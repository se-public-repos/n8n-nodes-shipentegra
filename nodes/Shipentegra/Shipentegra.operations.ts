import { IExecuteSingleFunctions, IHttpRequestOptions, INodeProperties } from "n8n-workflow";
import { OperationOptions } from "./types/operation.type";
import { baseLabelSchema } from "./fields/_common-label.fields";
import { calculatePriceSchema } from "./fields/calculate-price.fields";
import { createManualOrderSchema } from "./fields/create-manuel-order.fields";
import { createPostOrdersSchema } from "./fields/create-post-orders.fields";
import { findCargoActivitiesSchema } from "./fields/find-cargo-activities.fields";
import { findOrderSchema } from "./fields/find-order.fields";
import { findOrdersSchema } from "./fields/find-orders.fields";
import { listCarriersSchema } from "./fields/list-carriers.fields";
import { updateOrderStatusSchema } from "./fields/update-order-status.fields";


async function requestLog(
	this: IExecuteSingleFunctions,
	requestOptions: IHttpRequestOptions,
) {
	console.log('requestOptions', JSON.stringify(requestOptions, null, 2))

	return requestOptions;
}

export const shipentegraOperations: INodeProperties[] = [{
	displayName: 'Operation',
	name: 'operation',
	type: 'options',
	noDataExpression: true,
	default: null,
	options: [
		{
			name: 'Calculate Price',
			value: OperationOptions.CALCULATE_PRICE,
			description: 'Calculate shipping price',
			action: 'Calculate shipping price',
			routing: {
				send: {
					preSend: [requestLog],
				},
				request: {
					method: "POST",
					url: "/tools/calculate",
					body: calculatePriceSchema,
				}
			}
		},
		{
			name: 'Create Manual Order',
			value: OperationOptions.CREATE_MANUAL_ORDER,
			description: 'Creates a manual order using the provided order details',
			action: 'Creates a manual order using the provided order details',
			routing: {
				send: {
					preSend: [requestLog],
				},
				request: {
					method: "POST",
					url: "/orders/manual",
					body: createManualOrderSchema
				}
			}
		},
		{
			name: 'Create Post Orders',
			value: OperationOptions.CREATE_POST_ORDERS,
			description: 'Creates one or more post orders by providing order details',
			action: 'Creates one or more post orders by providing order details',
			routing: {
				send: {
					preSend: [requestLog],
				},
				request: {
					method: "POST",
					url: "/orders/post",
					body: createPostOrdersSchema
				}
			}
		},
		{
			name: 'Create SE-DHL Ecommerce Label',
			value: OperationOptions.CREATE_SE_DHL_ECOMMERCE_LABEL,
			description: 'Create DHL ecommerce label',
			action: 'Create DHL ecommerce label',
			routing: {
				send: {
					preSend: [requestLog],
				},
				request: {
					method: "POST",
					url: "/logistics/labels/shipentegra/dhlecommerce",
					body: baseLabelSchema
				}
			}
		},
		{
			name: 'Create SE-Fedex Label',
			value: OperationOptions.CREATE_SE_FEDEX_LABEL,
			description: 'Create FedEx Shipping Label',
			action: 'Create fedex shipping label',
			routing: {
				send: {
					preSend: [requestLog],
				},
				request: {
					method: "POST",
					url: "/logistics/labels/shipentegra/fedex",
					body: baseLabelSchema
				}
			}
		},
		{
			name: 'Create SE-UPS Label',
			value: OperationOptions.CREATE_SE_UPS_LABEL,
			description: 'Create SE UPS Shipping Label',
			action: 'Create SE-UPS shipping label',
			routing: {
				send: {
					preSend: [requestLog],
				},
				request: {
					method: "POST",
					url: "/logistics/labels/shipentegra/ups",
					body: baseLabelSchema
				}
			}
		},
		{
			name: 'Create SE-USPS Label',
			value: OperationOptions.CREATE_SE_USPS_LABEL,
			description: 'Create SE USPS Shipping Label',
			action: 'Create SE-USPS shipping label',
			routing: {
				send: {
					preSend: [requestLog],
				},
				request: {
					method: "POST",
					url: "/logistics/labels/shipentegra/usps",
					body: baseLabelSchema
				}
			}
		},
		{
			name: 'Create Shipentegra Label',
			value: OperationOptions.CREATE_SHIPENTEGRA_LABEL,
			description: 'Create Shipentegra Shipping Label',
			action: 'Create shipentegra shipping label',
			routing: {
				send: {
					preSend: [requestLog],
				},
				request: {
					method: "POST",
					url: "/logistics/labels/shipentegra",
					body: baseLabelSchema
				}
			}
		},
		{
			name: 'Find Cargo Activities',
			value: OperationOptions.FIND_CARGO_ACTIVITIES,
			description: 'Finds cargo activities based on the provided criteria such as shipment number, date range, and status',
			action: 'Find cargo activities',
			routing: {
				send: {
					preSend: [requestLog],
				},
				request: {
					method: "GET",
					url: "/logistics/shipments/activities",
					qs: findCargoActivitiesSchema
				}
			}
		},
		{
			name: 'Find Order',
			value: OperationOptions.FIND_ORDER,
			description: 'Retrieve detailed information about a specific order',
			action: 'Retrieve detailed information about a specific order',
			routing: {
				send: {
					preSend: [requestLog],
				},
				request: {
					method: "GET",
					url: "=/orders/manual/{{ $parameter.orderId }}",
					qs: findOrderSchema
				}
			}
		},
		{
			name: 'Find Orders',
			value: OperationOptions.FIND_ORDERS,
			description: 'Retrieve a list of orders associated with the user',
			action: 'Retrieve a list of orders',
			routing: {
				send: {
					preSend: [requestLog],
				},
				request: {
					method: "GET",
					url: `/orders/manual`,
					qs: findOrdersSchema
				}
			}
		},
		{
			name: 'List Carriers',
			value: OperationOptions.LIST_CARRIERS,
			description: 'Lists the carriers the user is allowed to use',
			action: 'Lists the carriers',
			routing: {
				send: {
					preSend: [requestLog],
				},
				request: {
					method: "GET",
					url: "/users/carriers",
					qs: listCarriersSchema
				}
			}
		},
		{
			name: 'Update Order Status',
			value: OperationOptions.UPDATE_ORDER_STATUS,
			description: 'Updates the status of an order using the provided order ID and new status',
			action: 'Update order status',
			routing: {
				send: {
					preSend: [requestLog],
				},
				request: {
					method: "PATCH",
					url: "/orders/status",
					body: updateOrderStatusSchema
				}
			}
		},
	],
}]
