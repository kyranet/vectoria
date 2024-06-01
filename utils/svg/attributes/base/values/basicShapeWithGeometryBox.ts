import { Result, ok } from '@sapphire/result';
import { parseBasicShape, type BasicShape } from './basicShape';
import type { ValueAttributeValue } from './base/makeAttributeValue';

export function attributeValueBasicShapeWithGeometryBox(): ValueAttributeValue<BasicShapeWithGeometryBox> {
	return {
		name: 'basic-shape-with-geometry-box',
		type: 'value',
		from: (value) => parseBasicShapeWithGeometryBox(value),
		to: (value) => value.toString()
	};
}

function parseBasicShapeWithGeometryBox(value: string): Result<BasicShapeWithGeometryBox, string> {
	// Check if the first part is a geometry box:
	const geometryBoxStart = GeometryBoxValues.find((box) => value.startsWith(box));
	if (geometryBoxStart) {
		return maybeParseBasicShape(value.slice(geometryBoxStart.length + 1).trim()).map((shape) => ({
			type: 'basic-shape-with-geometry-box',
			shape,
			geometry: geometryBoxStart
		}));
	}

	// Check if the last part is a geometry box:
	const geometryBoxEnd = GeometryBoxValues.find((box) => value.endsWith(box));
	if (geometryBoxEnd) {
		return maybeParseBasicShape(value.slice(0, value.length - geometryBoxEnd.length).trim()).map((shape) => ({
			type: 'basic-shape-with-geometry-box',
			shape,
			geometry: geometryBoxEnd
		}));
	}

	// `value` does not contain <geometry-box>:
	return maybeParseBasicShape(value).map((shape) => ({
		type: 'basic-shape-with-geometry-box',
		shape,
		geometry: null
	}));
}

function maybeParseBasicShape(value: string): Result<BasicShape | null, string> {
	return value ? parseBasicShape(value) : ok(null);
}

export const GeometryBoxValues = [
	'margin-box',
	'border-box',
	'padding-box',
	'content-box',
	'fill-box',
	'stroke-box',
	'view-box'
] as const satisfies GeometryBox[];

export interface BasicShapeWithGeometryBox {
	type: 'basic-shape-with-geometry-box';
	shape: BasicShape | null;
	geometry: GeometryBox | null;
}

export type GeometryBox = `${'margin' | 'border' | 'padding' | 'content' | 'fill' | 'stroke' | 'view'}-box`;
