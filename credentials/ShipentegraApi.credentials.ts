import type {
	IAuthenticateGeneric,
	Icon,
	ICredentialDataDecryptedObject,
	ICredentialTestRequest,
	ICredentialType,
	IHttpRequestHelper,
	INodeProperties,
} from 'n8n-workflow';

export class ShipentegraApi implements ICredentialType {
	name: string = 'shipentegraApi';

	displayName: string = 'ShipEntegra API';

	icon: Icon = 'file:shipentegra.svg'

	documentationUrl: string = 'https://docs.shipentegra.com';

	properties: INodeProperties[] = [
		{
			displayName: 'Client ID',
			name: 'clientId',
			type: 'string',
			default: '',
			required: true,
			placeholder: 'Enter your ShipEntegra client ID',
		},
		{
			displayName: 'Client Secret',
			name: 'clientSecret',
			type: 'string',
			typeOptions: { password: true },
			default: '',
			required: true,
			placeholder: 'Enter your ShipEntegra client secret',
		},
		{
			displayName: 'Access Token',
			name: 'accessToken',
			type: 'hidden',
			typeOptions: {
				expirable: true,
			},
			default: '',
		},
	];

	async preAuthentication(this: IHttpRequestHelper, credentials: ICredentialDataDecryptedObject) {
		const result = await this.helpers.httpRequest({
			method: 'POST',
			url: `https://publicapi.shipentegra.com/v1/auth/token`,
			headers: {
				'x-shipentegra-platform': 'N8N'
			},
			body: {
				clientId: credentials.clientId,
				clientSecret: credentials.clientSecret,
			},
		})

		return { accessToken: result?.data?.accessToken };
	}


	authenticate: IAuthenticateGeneric = {
		type: 'generic',
		properties: {
			headers: {
				Authorization: '=Bearer {{$credentials.accessToken}}',
			}
		},
	};

	test: ICredentialTestRequest = {
		request: {
			baseURL: `https://publicapi.shipentegra.com/v1`,
			url: '/users/carriers',
			method: 'GET',
		},
	};
}
