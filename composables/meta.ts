import type { MetaFlatInput } from '@unhead/schema';

const DefaultRobots = {
	all: true
} satisfies SeoOptionsRobots;

export function defineSeo(options: SeoOptions) {
	useSeoMeta({ title: options.title });
	useServerSeoMeta({
		title: options.title,
		description: options.description,

		ogTitle: options.title,
		ogDescription: options.description,
		ogImage: options.image?.url,
		ogImageAlt: options.image?.alt,
		ogImageWidth: options.image?.width,
		ogImageHeight: options.image?.height,

		twitterTitle: options.title,
		twitterDescription: options.description,
		twitterImage: options.image?.url,
		twitterImageAlt: options.image?.alt,
		twitterImageWidth: options.image?.width,
		twitterImageHeight: options.image?.height,

		robots: options.robots ?? DefaultRobots
	});
}

interface SeoOptions {
	title: string;
	description?: string;
	image?: SeoOptionsImage;
	robots?: string | SeoOptionsRobots;
}

interface SeoOptionsImage {
	url: string;
	alt: string;
	width: number;
	height: number;
}

type SeoOptionsRobots = Partial<MetaFlatInput['robots']>;
