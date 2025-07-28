import { INodeProperties } from "n8n-workflow";
import { countryCodes } from "../types/country-codes.type";
import { OperationOptions } from "../types/operation.type";



const baseFields: INodeProperties[] = [
	{
		displayName: 'Request Details',
		type: 'notice',
		name: '',
		default: '',
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
		displayName: 'Carrier Code',
		name: 'seCarrier',
		type: 'string',
		default: '',
		required: true,
		description: 'Carrier code. Must be one of the codes returned by listCarriers().',
	},
	{
		displayName: 'Package Weight/Desi (Kg)',
		name: 'kgDesi',
		type: 'number',
		typeOptions: {
			minValue: 0,
			maxValue: 100000,
		},
		default: 0,
		required: true,
		description: 'Package desi or weight in kilograms',
	},
	{
		displayName: 'Amazon Shipment',
		name: 'isAmazonShipment',
		type: 'boolean',
		default: false,
		description: 'Whether the shipment is for Amazon',
	},
	{
		displayName: 'Order ID',
		name: 'orderId',
		type: 'number',
		typeOptions: {
			minValue: 0,
			maxValue: 2147483647,
		},
		default: null,
		description: 'Order ID for the shipment. Optional.',
	},
]

export const calculatePriceFields: INodeProperties[] = baseFields.map(field => ({
	...field,
	displayOptions: {
		show: {
			operation: [OperationOptions.CALCULATE_PRICE],
		},
	},
}));


export const calculatePriceSchema = {
	country: '={{ $parameter.country }}',
	seCarrier: '={{ $parameter.seCarrier }}',
	kgDesi: '={{ $parameter.kgDesi }}',
	isAmazonShipment: '={{ $parameter.isAmazonShipment ? 1 : 0 }}',
	orderId: '={{ $parameter.orderId }}',
}
