import { INodeProperties } from "n8n-workflow";
import { countryCodes } from "../types/country-codes.type";
import { currencies } from "../types/currencies.type";
import { OperationOptions } from "../types/operation.type";

const baseFields: INodeProperties[] = [
	{
		displayName: 'Request Details',
		type: 'notice',
		name: '',
		default: '',
	},
	{
		displayName: 'Package Quantity',
		name: 'packageQuantity',
		type: 'number',
		typeOptions: { minValue: 1, maxValue: 100000 },
		default: 1,
		description: 'Number of packages (default 1)',

	},
	{
		displayName: 'Shipping Amount',
		name: 'shippingAmount',
		type: 'number',
		typeOptions: { minValue: 0.01, maxValue: 10000000 },
		default: 0.01,
		required: true,
	},
	{
		displayName: 'Currency',
		name: 'currency',
		type: 'options',
		options: currencies.map((c: string) => ({ name: c, value: c })),
		default: '',
		required: true,
		description: 'Currency code',
	},
	{
		displayName: 'Description',
		name: 'description',
		type: 'string',
		default: '',
		required: true,
		description: 'Order description (5-50 chars)',

	},
	{
		displayName: 'Weight (Kg)',
		name: 'weight',
		type: 'number',
		typeOptions: { minValue: 0, maxValue: 100000 },
		default: 0,
		description: 'Total weight in kilograms',

	},
	{
		displayName: 'Height (Cm)',
		name: 'height',
		type: 'number',
		typeOptions: { minValue: 0, maxValue: 100000 },
		default: 0,
		description: 'Package height in centimeters',

	},
	{
		displayName: 'Width (Cm)',
		name: 'width',
		type: 'number',
		typeOptions: { minValue: 0, maxValue: 100000 },
		default: 0,
		description: 'Package width in centimeters',

	},
	{
		displayName: 'Length (Cm)',
		name: 'length',
		type: 'number',
		typeOptions: { minValue: 0, maxValue: 100000 },
		default: 0,
		description: 'Package length in centimeters',

	},
	{
		displayName: 'Reference 1',
		name: 'reference1',
		type: 'string',
		default: '',
		description: 'Reference field (max 40 chars)',

	},
	{
		displayName: 'IOSS Number',
		name: 'iossNumber',
		type: 'string',
		default: '',
		description: 'IOSS number (max 33 chars)',

	},
	{
		displayName: 'Number',
		name: 'number',
		type: 'string',
		default: '',
		description: 'Number (max 128 chars)',
	},

	{
		displayName: 'Address Name',
		name: 'addressName',
		type: 'string',
		default: '',
		required: true,
		description: 'Address name (1-80 chars)',

	},
	{
		displayName: 'Remember My Address',
		name: 'rememberMyAddress',
		type: 'boolean',
		default: false,
		description: 'Whether to remember this address for future orders',

	},

	{
		displayName: 'Shipping Address',
		name: 'shippingAddress',
		type: 'fixedCollection',

		default: {},
		required: true,
		options: [
			{
				displayName: 'Shipping Address',
				name: 'shippingAddress',
				values: [
					{
						displayName: 'Recipient Name',
						name: 'name',
						type: 'string',
						default: '',
						required: true,
						description: 'Recipient name (2-128 chars)',
					},
					{
						displayName: 'Street Address',
						name: 'address',
						type: 'string',
						default: '',
						required: true,
						description: 'Street address (5-255 chars)',
					},
					{
						displayName: 'Country',
						name: 'country',
						type: 'options',
						options: Object.entries(countryCodes).map(([key, value]) => ({ name: value, value: key })),
						default: '',
						required: true,
						description: 'Destination country ISO code',
					},
					{
						displayName: 'City',
						name: 'city',
						type: 'string',
						default: '',
						required: true,
						description: 'City (2-128 chars)',
					},
					{
						displayName: 'State',
						name: 'state',
						type: 'string',
						default: '',
						description: 'State (max 128 chars)',
					},
					{
						displayName: 'Postal Code',
						name: 'postalCode',
						type: 'string',
						default: '',
						required: true,
						description: 'Postal code (1-20 chars)',
					},
					{
						displayName: 'Email',
						name: 'email',
						type: 'string',
						default: '',
						placeholder: 'name@email.com',
						description: 'Email address (max 60 chars)',
					},
					{
						displayName: 'Phone',
						name: 'phone',
						type: 'string',
						default: '',
						description: 'Phone number (max 25 chars)',
					},
				]
			}
		]
	},

	{
		displayName: 'Order Items',
		name: 'items',
		type: 'fixedCollection',
		typeOptions: {
			multipleValues: true,
		},
		default: {},
		required: true,
		options: [
			{
				displayName: 'Order Items',
				name: 'items',
				// eslint-disable-next-line n8n-nodes-base/node-param-fixed-collection-type-unsorted-items
				values: [
					{
						displayName: 'Name',
						name: 'name',
						type: 'string',
						default: undefined,
						required: true,
						description: 'Item name (3-512 chars)',
					},
					{
						displayName: 'Quantity',
						name: 'quantity',
						type: 'number',
						typeOptions: { minValue: 1, maxValue: 100000 },
						default: 1,
						required: true,
					},
					{
						displayName: 'Unit Price',
						name: 'unitPrice',
						type: 'number',
						typeOptions: { minValue: 0.01, maxValue: 10000000 },
						default: 0.01,
						required: true,
					},
					{
						displayName: 'SKU',
						name: 'sku',
						type: 'string',
						default: undefined,
						description: 'Stock Keeping Unit (max 128 chars)',
					},
					{
						displayName: 'GTIP',
						name: 'gtip',
						type: 'string',
						default: undefined,
						description: 'GTIP code (number or string)',
					},
					{
						displayName: 'Image URL',
						name: 'imageUrl',
						type: 'string',
						default: undefined,
						description: 'Image URL (max 255 chars)',
					},
				],
			},
		],
	},
];

export const createManualOrderFields: INodeProperties[] = baseFields.map(field => ({
	...field,
	displayOptions: {
		show: {
			operation: [OperationOptions.CREATE_MANUAL_ORDER],
		},
	},
}));


export const createManualOrderSchema = {
	shippingAddress: "={{ $parameter.shippingAddress.shippingAddress }}",
	description: '={{ $parameter.description }}',
	items: '={{ $parameter.items.items }}',
	packageQuantity: '={{ $parameter.packageQuantity }}',
	currency: '={{ $parameter.currency }}',
	weight: '={{ $parameter.weight }}',
	height: '={{ $parameter.height }}',
	width: '={{ $parameter.width }}',
	length: '={{ $parameter.length }}',
	reference1: '={{ $parameter.reference1 }}',
	iossNumber: '={{ $parameter.iossNumber }}',
	rememberMyAddress: '={{ $parameter.rememberMyAddress }}',
	addressName: '={{ $parameter.addressName }}',
	number: '={{ $parameter.number }}',
	shippingAmount: '={{ $parameter.shippingAmount }}',
}
