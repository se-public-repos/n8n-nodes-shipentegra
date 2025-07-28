import { INodeProperties } from "n8n-workflow";
import { OperationOptions } from "../types/operation.type";

const baseFields: INodeProperties[] = [];

export const listCarriersFields: INodeProperties[] = baseFields.map(field => ({
	...field,
	displayOptions: {
		show: {
			operation: [OperationOptions.LIST_CARRIERS],
		},
	},
}));

export const listCarriersSchema = {}
