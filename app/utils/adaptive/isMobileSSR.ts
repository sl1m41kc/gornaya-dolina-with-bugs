import { headers } from 'next/headers';

const isMobile = (userAgent: string | null | undefined): boolean => {
  return /Mobi|Android|iPhone|iPad|iPod/i.test(userAgent || '');
};

export const isMobileSSR = (): boolean => {
  const userAgent: string | null = headers().get('user-agent');
  return isMobile(userAgent);
};
