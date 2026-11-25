/** Live URLs. A value starting with "[" is treated as "not ready" and is hidden or disabled. */
export const EMAIL = 'nangendodennis@gmail.com';
export const CV_LINK = '/Dennis-Nangendo-Resume.pdf';
export const GITHUB_LINK = 'https://github.com/devnabibia';
export const LINKEDIN_LINK = '[LINKEDIN_LINK_PLACEHOLDER]';
export const X_LINK = 'https://x.com/devnabibia';
export const WISDOM_TCP_LINK = 'https://github.com/devnabibia/wisdom-tcp-server';
export const CLOUD_MESSAGING_LINK = 'https://github.com/devnabibia/cloud_messaging_app';
export const MICROSERVICES_LINK = 'https://github.com/devnabibia/microservices';
export const INVOICER_LINK = 'https://github.com/devnabibia/invoicer';
export const WSCHAT_LINK = 'https://github.com/devnabibia/wschat';
export const MARTPRO_LINK = 'https://github.com/devnabibia/MartPro';
export const SITE_URL = '[SITE_URL_PLACEHOLDER]';

export function isLinkReady(url: string): boolean {
	return !url.startsWith('[');
}
