import type { VectorAny } from '~/utils/svg/shared/makeVectorElement';

export const InjectedCodeInput = Symbol('InjectedCodeInput') as InjectionKey<Ref<string>>;
export const InjectedSelectedElement = Symbol('InjectedSelectedElement') as InjectionKey<Ref<VectorAny | null>>;
