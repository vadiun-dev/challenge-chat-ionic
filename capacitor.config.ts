import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'io.ionic.starter',
  appName: 'challenge-chat-ionic',
  webDir: 'www',
  server: {
    allowNavigation: ['190.114.92.148', 'yourdomain.com'], // Add your domain here
    cleartext: true,
  },
};

export default config;
