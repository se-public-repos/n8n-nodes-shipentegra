import { INodeProperties } from "n8n-workflow";
import { OperationOptions } from "../types/operation.type";

const baseFields: INodeProperties[] = [{
	displayName: 'Request Details',
	type: 'notice',
	name: '',
	default: '',
},
{
	displayName: 'Order IDs',
	name: 'orderIds',
	type: 'fixedCollection',
	typeOptions: {
		multipleValues: true,
	},
	default: {},
	required: true,
	options: [
		{
			name: 'orderIds',
			displayName: 'Order IDs',
			values: [
				{
					displayName: 'Order ID',
					name: 'id',
					type: 'number',
					typeOptions: {
						minValue: 1,
					},
					default: 1,
					required: true,
				},
			],
		},
	],
},
{
	displayName: 'Status',
	name: 'status',
	type: 'options',
	// eslint-disable-next-line n8n-nodes-base/node-param-options-type-unsorted-items
	options: [
		{ name: 'None', value: '' },
		{ name: '1', value: 1 },
		{ name: '2', value: 2 },
		{ name: '3', value: 3 },
		{ name: '4', value: 4 },
	],
	default: '',
	required: true,
},
];

export const updateOrderStatusFields: INodeProperties[] = baseFields.map(field => ({
	...field,
	displayOptions: {
		show: {
			operation: [OperationOptions.UPDATE_ORDER_STATUS],
		},
	},
}));

export const updateOrderStatusSchema = {
	orderIds: "={{ $parameter.orderIds.orderIds.map(o => o.id) }}",
	status: "={{ $parameter.status }}"
}
