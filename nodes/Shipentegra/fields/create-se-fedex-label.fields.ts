import { INodeProperties } from "n8n-workflow";
import { baseLabelFields } from "./_common-label.fields";
import { OperationOptions } from "../types/operation.type";


export const createSeFedexLabelFields: INodeProperties[] = baseLabelFields.map(field => ({
	...field,
	displayOptions: {
		show: {
			operation: [OperationOptions.CREATE_SE_FEDEX_LABEL],
		},
	},
}));
