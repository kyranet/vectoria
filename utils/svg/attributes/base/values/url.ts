import { err, ok } from '@sapphire/result';
import type { ValueAttributeValue } from './base/makeAttributeValue';

export function attributeValueUrl(): ValueAttributeValue<AttributeURL> {
	return {
		name: 'url',
		type: 'value',
		from: (value) => {
			if (!value.startsWith('url(') || !value.endsWith(')')) {
				return err(`Expected an url(<value>), received: ${value}`);
			}

			const url = value.slice(4, -1).trim();
			if (url.startsWith('data:')) {
				const mediaTypeEndIndex = url.indexOf(';', 5);
				if (mediaTypeEndIndex === -1) {
					return err(`Expected a media type, received: ${url}`);
				}

				const mediaType = url.slice(5, mediaTypeEndIndex);
				const encodingEndIndex = url.indexOf(',', mediaTypeEndIndex + 1);
				if (encodingEndIndex === -1) {
					return err(`Expected an encoding, received: ${url}`);
				}

				const encoding = url.slice(mediaTypeEndIndex + 1, encodingEndIndex);
				const data = url.slice(encodingEndIndex + 1);
				return ok({ type: 'url', kind: 'data', mediaType, encoding, data });
			}

			let path: string;
			let id: string | null;
			const idStartIndex = url.indexOf('#');
			if (idStartIndex === -1) {
				path = url;
				id = null;
			} else {
				path = url.slice(0, idStartIndex);
				id = url.slice(idStartIndex + 1);
			}

			return ok({ type: 'url', kind: 'path', path, id });
		},
		to: (value) => {
			switch (value.kind) {
				case 'path':
					return `url(${value.path})`;
				case 'data':
					return `url(data:${value.mediaType};${value.encoding},${value.data})`;
			}
		}
	};
}

export type AttributeURL = AttributeURLPath | AttributeURLData;

interface BaseAttributeURL {
	type: 'url';
}

interface AttributeURLPath extends BaseAttributeURL {
	kind: 'path';
	path: string;
	id: string | null;
}

interface AttributeURLData extends BaseAttributeURL {
	kind: 'data';
	mediaType: string;
	encoding: string;
	data: string;
}
