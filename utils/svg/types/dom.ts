export type RelType =
	| 'alternate'
	| 'author'
	| 'bookmark'
	| 'canonical'
	| 'dns-prefetch'
	| 'external'
	| 'help'
	| 'icon'
	| 'license'
	| 'manifest'
	| 'me'
	| 'modulepreload'
	| 'next'
	| 'nofollow'
	| 'noopener'
	| 'noreferrer'
	| 'opener'
	| 'pingback'
	| 'preconnect'
	| 'prefetch'
	| 'preload'
	| 'prerender'
	| 'prev'
	| 'privacy-policy'
	| 'search'
	| 'stylesheet'
	| 'tag'
	| 'terms-of-service';

export type TargetType = '_self' | '_blank' | '_parent' | '_top' | string;

export type MIMEType = string & { __type__: 'MIMEType' };
