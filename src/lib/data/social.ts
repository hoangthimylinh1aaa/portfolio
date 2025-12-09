import type { SocialLink } from '$lib/types/common';

export const socialLinks: SocialLink[] = [
  {
    id: 'linkedin',
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/%C4%91%E1%BA%A1i-th%C3%A0nh-714466230/',
    icon: 'linkedin',
    color: 'from-blue-600 to-blue-700',
    hoverColor: 'hover:from-blue-500 hover:to-blue-600',
  },
  {
    id: 'facebook',
    name: 'Facebook',
    url: 'https://www.facebook.com/quandaithanh',
    icon: 'facebook',
    color: 'from-blue-500 to-indigo-600',
    hoverColor: 'hover:from-blue-400 hover:to-indigo-500',
  },
  {
    id: 'instagram',
    name: 'Instagram',
    url: 'https://www.instagram.com/daiithanh',
    icon: 'instagram',
    color: 'from-pink-500 via-purple-500 to-orange-500',
    hoverColor: 'hover:from-pink-400 hover:via-purple-400 hover:to-orange-400',
  },
  {
    id: 'telegram',
    name: 'Telegram',
    url: 'https://t.me/ThanhAris',
    icon: 'telegram',
    color: 'from-cyan-500 to-blue-600',
    hoverColor: 'hover:from-cyan-400 hover:to-blue-500',
  },
];
