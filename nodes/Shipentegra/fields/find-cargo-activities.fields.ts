import { INodeProperties } from "n8n-workflow";
import { OperationOptions } from "../types/operation.type";

const baseFields: INodeProperties[] = [{
	displayName: 'Request Details',
	type: 'notice',
	name: '',
	default: '',
},
{
	displayName: 'Tracking Number',
	name: 'trackingNumber',
	type: 'string',
	default: '',
	required: true
}
];

export const findCargoActivitiesFields: INodeProperties[] = baseFields.map(field => ({
	...field,
	displayOptions: {
		show: {
			operation: [OperationOptions.FIND_CARGO_ACTIVITIES],
		},
	},
}));


export const findCargoActivitiesSchema = {
	trackingNumber: "={{ $parameter.trackingNumber }}"
}
