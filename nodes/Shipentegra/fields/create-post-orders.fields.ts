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
				displayName: 'Order ID',
				values: [
					{
						displayName: 'Order ID',
						name: 'id',
						type: 'number',
						typeOptions: {
							minValue: 1,
							maxValue: Number.MAX_SAFE_INTEGER,
						},
						default: undefined,
						required: true,
					},
				],
			},
		],
	},
	{
		displayName: 'Shipentegra',
		name: 'shipentegra',
		type: 'boolean',
		default: false,
	},
];

export const createPostOrdersFields: INodeProperties[] = baseFields.map(field => ({
	...field,
	displayOptions: {
		show: {
			operation: [OperationOptions.CREATE_POST_ORDERS],
		},
	},
}));


export const createPostOrdersSchema = {
	orderIds: "={{ $parameter.orderIds.orderIds.map(o => o.id) }}",
	shipentegra: "={{ $parameter.shipentegra ? 1 : 0 }}"
}
