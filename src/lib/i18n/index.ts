import { register, init, getLocaleFromNavigator } from 'svelte-i18n';

// Register translation files
register('en', () => import('./locales/en.json'));
register('vi', () => import('./locales/vi.json'));

// Get saved locale or use browser language
function getInitialLocale() {
  if (typeof window !== 'undefined') {
    const saved = localStorage.getItem('locale');
    if (saved) return saved;
  }
  return getLocaleFromNavigator();
}

// Initialize i18n
init({
  fallbackLocale: 'en',
  initialLocale: getInitialLocale(),
});
