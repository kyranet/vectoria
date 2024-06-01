<template>
	<label class="form-control">
		<div class="label">
			<span class="label-text">
				Fill Color
				<editor-attributes-common-info url="https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/fill" />
				<editor-attributes-common-animation :animatable="animation ? 'no' : 'yes'" />
			</span>
		</div>
		<select v-if="animation" v-model="value" class="select select-bordered">
			<option value="freeze">freeze</option>
			<option value="remove">remove</option>
		</select>
		<editor-attributes-input-color v-else v-model="value" />
	</label>
</template>

<script setup lang="ts">
type GraphicsElement =
	| SVGCircleElement
	| SVGEllipseElement
	| SVGPathElement
	| SVGPolygonElement
	| SVGPolylineElement
	| SVGRectElement
	| SVGTextElement
	| SVGTextPathElement
	| SVGTSpanElement;
type AnimationElement = SVGAnimateElement | SVGAnimateMotionElement | SVGAnimateTransformElement | SVGSetElement;

const props = defineProps<{ el: GraphicsElement | AnimationElement }>();
const animation = isAnimationElement(props.el);
const value = useAttribute(props.el, 'fill', animation ? 'remove' : 'black');

function isAnimationElement(el: GraphicsElement | AnimationElement): el is AnimationElement {
	return el.tagName === 'animate' || el.tagName === 'animateMotion' || el.tagName === 'animateTransform' || el.tagName === 'set';
}
</script>
