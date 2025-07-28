import { INodeProperties } from "n8n-workflow";
import { OperationOptions } from "../types/operation.type";

const baseFields: INodeProperties[] = [{
	displayName: 'Request Details',
	type: 'notice',
	name: '',
	default: '',
},
{
	displayName: 'Page',
	name: 'page',
	type: 'number',
	typeOptions: {
		minValue: 1,
	},
	default: 1,
},
{
	displayName: 'Limit',
	name: 'pLimit',
	type: 'number',
	typeOptions: {
		minValue: 20,
		maxValue: 100,
	},
	default: 20,
},
{
	displayName: 'Status',
	name: 'status',
	type: 'options',
	// eslint-disable-next-line n8n-nodes-base/node-param-options-type-unsorted-items
	options: [
		{ name: 'None', value: '' },
		{ name: '0', value: '0' },
		{ name: '1', value: '1' },
		{ name: '2', value: '2' },
		{ name: '3', value: '3' },
		{ name: '4', value: '4' },
		{ name: '5', value: '5' },
	],
	default: '',
},
{
	displayName: 'Order Number',
	name: 'orderNumber',
	type: 'string',
	default: '',
},
{
	displayName: 'Store ID',
	name: 'storeId',
	type: 'number',
	typeOptions: {
		maxValue: 2147483647,
	},
	default: null,
},
];

export const findOrdersFields: INodeProperties[] = baseFields.map(field => ({
	...field,
	displayOptions: {
		show: {
			operation: [OperationOptions.FIND_ORDERS],
		},
	},
}));


export const findOrdersSchema = {
	page: "={{ $parameter.page }}",
	limit: "={{ $parameter.pLimit }}",
	status: "={{ $parameter.status }}",
	orderNumber: "={{ $parameter.orderNumber }}",
	storeId: "={{ $parameter.storeId }}"
}
