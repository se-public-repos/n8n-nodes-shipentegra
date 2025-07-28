import { INodeType, INodeTypeDescription, NodeConnectionType } from 'n8n-workflow'
import { shipentegraOperations } from './Shipentegra.operations';
import { calculatePriceFields } from './fields/calculate-price.fields';
import { createManualOrderFields } from './fields/create-manuel-order.fields';
import { createPostOrdersFields } from './fields/create-post-orders.fields';
import { createSeFedexLabelFields } from './fields/create-se-fedex-label.fields';
import { createSeDhlEcommerceLabelFields } from './fields/create-se-dhl-ecommerce-label.fields';
import { createSeUpsLabelFields } from './fields/create-se-ups-label.fields';
import { createSeUspsLabelFields } from './fields/create-se-usps-label.fields';
import { createShipentegraLabelFields } from './fields/create-shipentegra-label.fields';
import { findCargoActivitiesFields } from './fields/find-cargo-activities.fields';
import { findOrderFields } from './fields/find-order.fields';
import { findOrdersFields } from './fields/find-orders.fields';
import { listCarriersFields } from './fields/list-carriers.fields';
import { updateOrderStatusFields } from './fields/update-order-status.fields';

export class Shipentegra implements INodeType {
	description: INodeTypeDescription = {
		name: 'shipentegra',
		displayName: 'Shipentegra API',
		icon: 'file:shipentegra.svg',
		group: ['transform'],
		version: 1,
		description: 'Shipentegra provides a versatile integration for easily managing shipping and logistics operations.',
		defaults: {
			name: 'Shipentegra',
		},
		usableAsTool: true,
		inputs: [NodeConnectionType.Main],
		outputs: [NodeConnectionType.Main],
		credentials: [
			{
				name: 'shipentegraApi',
				required: true
			}
		],
		requestDefaults: {
			baseURL: 'https://publicapi.shipentegra.com/v1',
			headers: {
				'Content-Type': 'application/json;charset=utf-8',
				Accept: 'application/json',
				'Accept-Language': '={{ $credentials.language || "en-US" }}',
			},
			json: true,
			returnFullResponse: true,
		},
		properties: [
			...shipentegraOperations,
			...calculatePriceFields,
			...createManualOrderFields,
			...createPostOrdersFields,
			...createSeDhlEcommerceLabelFields,
			...createSeFedexLabelFields,
			...createSeUpsLabelFields,
			...createSeUspsLabelFields,
			...createShipentegraLabelFields,
			...findCargoActivitiesFields,
			...findOrderFields,
			...findOrdersFields,
			...listCarriersFields,
			...updateOrderStatusFields
		]
	}
}
