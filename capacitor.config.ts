import { CapacitorConfig } from '@capacitor/cli';
import { KeyboardStyle, KeyboardResize } from '@capacitor/keyboard';

const config: CapacitorConfig = {
  appId: 'io.ionic.starter',
  appName: 'challenge-chat-ionic',
  webDir: 'www',
  server: {
    androidScheme: 'http',
    allowNavigation: [
      'http://10.0.2.2:3000', // Para emulador Android
      'http://10.0.2.2',
      'http://192.168.1.58:3000', // Para dispositivos en la misma red
      'http://localhost:3000',
      'localhost',
    ],
    cleartext: true,
  },
  plugins: {
    Keyboard: {
      resize: KeyboardResize.Body,
      style: KeyboardStyle.Dark,
      resizeOnFullScreen: true,
    },
  },
};

export default config;
