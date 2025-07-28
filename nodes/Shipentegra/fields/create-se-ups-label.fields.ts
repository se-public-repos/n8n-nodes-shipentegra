import { INodeProperties } from "n8n-workflow";
import { baseLabelFields } from "./_common-label.fields";
import { OperationOptions } from "../types/operation.type";


export const createSeUpsLabelFields: INodeProperties[] = baseLabelFields.map(field => ({
	...field,
	displayOptions: {
		show: {
			operation: [OperationOptions.CREATE_SE_UPS_LABEL],
		},
	},
}));
