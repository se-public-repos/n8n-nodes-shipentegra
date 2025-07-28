import { INodeProperties } from "n8n-workflow";
import { currencies } from "../types/currencies.type";

export const baseLabelFields: INodeProperties[] = [
	{
		displayName: 'Request Details',
		type: 'notice',
		name: '',
		default: '',
	},
	{
		displayName: 'Special Service',
		name: 'specialServier',
		type: 'string',
		default: undefined,
	},
	{
		displayName: 'Order ID',
		name: 'orderId',
		type: 'number',
		typeOptions: {
			minValue: 1,
			maxValue: Number.MAX_SAFE_INTEGER,
		},
		default: undefined,
	},
	{
		displayName: 'Store ID',
		name: 'storeId',
		type: 'number',
		typeOptions: {
			minValue: 1,
			maxValue: Number.MAX_SAFE_INTEGER,
		},
		default: undefined,
	},
	{
		displayName: 'Number',
		name: 'number',
		type: 'string',
		default: undefined,
	},
	{
		displayName: 'Verpackg',
		name: 'verpackg',
		type: 'boolean',
		default: false,
	},
	{
		displayName: 'Content',
		name: 'content',
		type: 'string',
		default: undefined,
	},
	{
		displayName: 'Weight',
		name: 'weight',
		type: 'number',
		typeOptions: {
			minValue: 0,
			maxValue: 9999999,
		},
		default: undefined,
	},
	{
		displayName: 'IOSS Number',
		name: 'iossNumber',
		type: 'string',
		default: undefined,
	},
	{
		displayName: 'Currency',
		name: 'currency',
		type: 'options',
		options: [{ name: 'None', value: "" }, ...currencies.map((c: string) => ({ name: c, value: c }))],
		default: "",
	},
	{
		displayName: 'Items',
		name: 'items',
		type: 'fixedCollection',
		typeOptions: {
			multipleValues: true,
		},
		default: {},
		description: 'Declared items (min 1, max 100)',
		options: [
			{
				name: 'items',
				displayName: 'Items',
				values: [
					{
						displayName: 'Item ID',
						name: 'itemId',
						type: 'number',
						typeOptions: {
							minValue: 1,
							maxValue: Number.MAX_SAFE_INTEGER,
						},
						default: undefined,
					},
					{
						displayName: 'Declared Quantity',
						name: 'declaredQuantity',
						type: 'number',
						typeOptions: {
							minValue: 1,
							maxValue: Number.MAX_SAFE_INTEGER,
						},
						default: undefined,
					},
					{
						displayName: 'Declared Price',
						name: 'declaredPrice',
						type: 'number',
						typeOptions: {
							minValue: 0.01,
							maxValue: Number.MAX_SAFE_INTEGER,
						},
						default: undefined,
					},
					{
						displayName: 'GTIP',
						name: 'gtip',
						type: 'string',
						default: undefined,
					},
				],
			},
		],
	},
	{
		displayName: 'Ship From',
		name: 'shipFrom',
		type: 'fixedCollection',
		typeOptions: {
			multipleValues: false,
		},
		default: {},
		description: 'Sender address information',
		options: [
			{
				name: 'shipFrom',
				displayName: 'Ship From',
				// eslint-disable-next-line n8n-nodes-base/node-param-fixed-collection-type-unsorted-items
				values: [
					{
						displayName: 'Name',
						name: 'name',
						type: 'string',
						default: '',
						required: true,
						description: 'Sender name (max 64 chars)',
					},
					{
						displayName: 'Address 1',
						name: 'address1',
						type: 'string',
						default: '',
						required: true,
						description: 'Address line 1 (max 64 chars)',
					},
					{
						displayName: 'Address 2',
						name: 'address2',
						type: 'string',
						default: '',
						description: 'Address line 2 (max 64 chars)',
					},
					{
						displayName: 'State',
						name: 'state',
						type: 'string',
						default: '',
						description: 'State (max 64 chars)',
					},
					{
						displayName: 'City',
						name: 'city',
						type: 'string',
						default: '',
						required: true,
						description: 'City (max 64 chars)',
					},
					{
						displayName: 'Zip Code',
						name: 'zipCode',
						type: 'string',
						default: '',
						description: 'Zip code (max 16 chars)',
					},
					{
						displayName: 'Phone',
						name: 'phone',
						type: 'string',
						default: '',
						description: 'Phone (max 16 chars)',
					},
				],
			},
		],
	},
];


export const baseLabelSchema = {
	orderId: "={{ $parameter.orderId }}",
	storeId: "={{ $parameter.storeId }}",
	specialServier: "={{ $parameter.specialServier }}",
	number: "={{ $parameter.number }}",
	verpackg: "={{ $parameter.verpackg ? 1 : 0 }}",
	content: "={{ $parameter.content }}",
	weight: "={{ $parameter.weight }}",
	iossNumber: "={{ $parameter.iossNumber }}",
	currency: "={{ $parameter.currency }}",
	items: "={{ $parameter.items.items }}",
	shipFrom: "={{ $parameter.shipFrom.shipFrom }}",
}
