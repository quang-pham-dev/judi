const path = require('path')
const dotenv = require('dotenv')
const pkg = require('./package.json')

// Load environment variables from .env file
const env = process.env.ENV || 'development'
const envPath = env === 'development' ? '.env' : `.env.${env}`
const envConfig = dotenv.config({
  path: path.resolve(process.cwd(), envPath),
}).parsed

const VERSION = pkg.version
const PROJECT_NAME = pkg.name
// const IS_DEV = process.env.EXPO_PUBLIC_ENV === 'development'

// Default configuration
const defaultConfig = {
  name: PROJECT_NAME,
  slug: PROJECT_NAME,
  version: VERSION,
  newArchEnabled: true,
  scheme: PROJECT_NAME,
  orientation: 'portrait',
  icon: './assets/images/icon.png',
  userInterfaceStyle: 'automatic',
  primaryColor: '#1083fe',
  splash: {
    image: './assets/images/splash.png',
    resizeMode: 'contain',
    backgroundColor: '#ffffff',
  },
  assetBundlePatterns: ['**/*'],
  ios: {
    supportsTablet: false,
    bundleIdentifier:
      process.env.EXPO_PUBLIC_BUNDLE_IDENTIFIER || 'com.judi.app',
    config: {
      usesNonExemptEncryption: false,
    },
    infoPlist: {
      UIBackgroundModes: ['remote-notification'],
      NSCameraUsageDescription:
        'Used for profile pictures, posts, and other kinds of content.',
      NSPhotoLibraryAddUsageDescription: 'Used to save images to your library.',
      NSPhotoLibraryUsageDescription:
        'Used for profile pictures, posts, and other kinds of content',
    },
  },
  android: {
    adaptiveIcon: {
      foregroundImage: './assets/images/adaptive-icon.png',
      backgroundColor: '#ffffff',
    },
    package: process.env.EXPO_PUBLIC_BUNDLE_IDENTIFIER || 'com.judi.app',
    googleServicesFile: './google-services.json',
  },
  web: {
    favicon: './assets/images/favicon.png',
  },
  extra: {
    ...envConfig,
    eas: {
      projectId: process.env.EXPO_PUBLIC_EAS_PROJECT_ID,
    },
  },
  plugins: [
    'expo-router',
    'expo-localization',
    [
      'expo-build-properties',
      {
        ios: {
          deploymentTarget: '15.1',
          newArchEnabled: false,
        },
        android: {
          compileSdkVersion: 35,
          targetSdkVersion: 35,
          buildToolsVersion: '35.0.0',
          newArchEnabled: false,
          enableProguardInReleaseBuilds: true,
          enableShrinkResourcesInReleaseBuilds: true,
        },
      },
    ],
    [
      'expo-notifications',
      {
        icon: './assets/images/notification-icon.png',
        color: '#1185fe',
      },
    ],
    [
      'expo-splash-screen',
      {
        ios: {
          backgroundColor: '#ffffff',
          image: './assets/images/splash.png',
          resizeMode: 'contain',
        },
        android: {
          backgroundColor: '#ffffff',
          image: './assets/images/splash.png',
          resizeMode: 'contain',
        },
      },
    ],
  ],
  hooks: {
    postPublish: [],
  },
}

export default () => {
  return defaultConfig
}
