import type { CapacitorConfig } from '@capacitor/cli';

const serverUrl = (process.env.TELECHAT_URL ?? '').trim();
if (!/^https:\/\//i.test(serverUrl)) {
  throw new Error(
    'TELECHAT_URL must be set to the public HTTPS URL of the deployed TeleChat server. ' +
      'Example: https://telechat.example.com',
  );
}

const config: CapacitorConfig = {
  appId: 'com.telechat.app',
  appName: 'TeleChat',
  webDir: 'android-wrapper',
  bundledWebRuntime: false,
  server: {
    url: serverUrl,
    cleartext: false,
    allowNavigation: [serverUrl],
  },
  android: {
    allowMixedContent: false,
  },
};

export default config;
