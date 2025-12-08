import type { SocialLink } from '$lib/types/common';

export const socialLinks: SocialLink[] = [
  {
    id: 'linkedin',
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/your-profile',
    icon: 'linkedin',
    color: 'from-blue-600 to-blue-700',
    hoverColor: 'hover:from-blue-500 hover:to-blue-600',
  },
  {
    id: 'facebook',
    name: 'Facebook',
    url: 'https://www. facebook.com/your-profile',
    icon: 'facebook',
    color: 'from-blue-500 to-indigo-600',
    hoverColor: 'hover:from-blue-400 hover:to-indigo-500',
  },
  {
    id: 'instagram',
    name: 'Instagram',
    url: 'https://www.instagram.com/your-profile',
    icon: 'instagram',
    color: 'from-pink-500 via-purple-500 to-orange-500',
    hoverColor: 'hover:from-pink-400 hover:via-purple-400 hover:to-orange-400',
  },
  {
    id: 'telegram',
    name: 'Telegram',
    url: 'https://t.me/your-username',
    icon: 'telegram',
    color: 'from-cyan-500 to-blue-600',
    hoverColor: 'hover:from-cyan-400 hover:to-blue-500',
  },
];
