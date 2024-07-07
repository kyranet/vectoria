import type { VectorAny } from '~/utils/svg/shared/makeVectorElement';

export const InjectedSelectedElement = Symbol('InjectedSelectedElement') as InjectionKey<Ref<VectorAny | null>>;
