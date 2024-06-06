<template>
	<div class="input flex items-center gap-1">
		<input v-model="value" type="number" class="min-w-0 grow" :step="unit === '%' ? 1 : 0.01" />
		<select v-model="unit" class="bg-transparent">
			<option value=""></option>
			<option value="%">%</option>
		</select>
	</div>
</template>

<script setup lang="ts">
const props = defineProps<{ modelValue: string }>();
const emit = defineEmits<{
	(event: 'update:modelValue', value: string): void;
}>();

const value = ref<string>(null!);
const unit = ref<'' | '%'>(null!);

if (props.modelValue.endsWith('%')) {
	value.value = props.modelValue.slice(0, -1).trim();
	unit.value = '%';
} else {
	value.value = props.modelValue;
	unit.value = '';
}

watch([value, unit], () => {
	emit('update:modelValue', value.value + unit.value);
});
</script>
