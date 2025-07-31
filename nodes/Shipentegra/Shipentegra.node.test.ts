import { Shipentegra } from './Shipentegra.node';

describe('Shipentegra Node', () => {
	test('should be defined', () => {
		const node = new Shipentegra();
		expect(node).toBeDefined();
	});

	test('should have correct name and displayName', () => {
		const node = new Shipentegra();
		expect(node.description.name).toBe('shipentegra');
		expect(node.description.displayName).toBe('Shipentegra API');
	});

	test('should require shipentegraApi credentials', () => {
		const node = new Shipentegra();
		const credentials = node.description.credentials;
		expect(credentials).toEqual(
			expect.arrayContaining([
				expect.objectContaining({ name: 'shipentegraApi', required: true })
			])
	);
	});

	test('should have baseURL set correctly', () => {
		const node = new Shipentegra();
		expect(node.description.requestDefaults?.baseURL).toBe('https://publicapi.shipentegra.com/v1');
	});

	test('should have properties array with length greater than 0', () => {
		const node = new Shipentegra();
		expect(Array.isArray(node.description.properties)).toBe(true);
		expect(node.description.properties.length).toBeGreaterThan(0);
	});
});
