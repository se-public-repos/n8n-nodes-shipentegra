import { INodeProperties } from "n8n-workflow";
import { OperationOptions } from "../types/operation.type";

const baseFields: INodeProperties[] = [
	{
		displayName: 'Request Details',
		type: 'notice',
		name: '',
		default: '',
	},
	{
		displayName: 'Order ID',
		name: 'orderId',
		type: 'number',
		typeOptions: {
			minValue: 1,
			maxValue: Number.MAX_SAFE_INTEGER,
		},
		default: 1,
		required: true,
	},
	{
		displayName: 'Filter',
		name: 'filter',
		type: 'options',
		options: [
			{ name: 'None', value: '' },
			{ name: 'General', value: 'general' },
			{ name: 'Price', value: 'price' },
			{ name: 'Carrier', value: 'carrier' },
		],
		default: '',
	},
];

export const findOrderFields: INodeProperties[] = baseFields.map(field => ({
	...field,
	displayOptions: {
		show: {
			operation: [OperationOptions.FIND_ORDER],
		},
	},
}));


export const findOrderSchema = {
	orderId: "={{ $parameter.orderId }}",
	filter: "={{ $parameter.filter }}"
}
