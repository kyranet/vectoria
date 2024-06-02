import type { BasePath } from '~/utils/svg/path/base/BasePath';
import type { BasePathPart } from '~/utils/svg/path/base/BasePathPart';

export function usePathPartProperty<Part extends BasePathPart<BasePath<string>>, Property extends keyof Part>(
	part: Part,
	property: Property,
	emit: (event: 'update', value: Part) => void
): Ref<Part[Property]> {
	const value = ref(part[property]) as Ref<Part[Property]>;
	watch(value, (value) => {
		part[property] = value as Part[Property];
		emit('update', part);
	});

	return value;
}
