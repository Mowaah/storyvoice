export default ({ config }) => {
  // It's good practice to define your intended package name here
  const intendedPackageName = 'com.yabble.app'; // Or your chosen package name
  const intendedProjectId = 'c1ed0f96-ee67-47ed-86ee-a1ae848d390a';

  return {
    ...config,
    name: 'Yabble',
    slug: config.slug || 'yabble',
    version: config.version || '1.0.0',
    orientation: config.orientation || 'portrait',
    icon: config.icon || './assets/images/icon.png',
    scheme: config.scheme || 'yabble',
    userInterfaceStyle: config.userInterfaceStyle || 'automatic',
    splash: {
      ...(config.splash || {}),
      image: config.splash?.image || './assets/images/yabble.png',
      resizeMode: config.splash?.resizeMode || 'contain',
      backgroundColor: config.splash?.backgroundColor || '#FFF9DE',
    },
    updates: {
      ...(config.updates || {}),
      fallbackToCacheTimeout: config.updates?.fallbackToCacheTimeout || 0,
    },
    assetBundlePatterns: config.assetBundlePatterns || ['**/*'],
    ios: {
      ...(config.ios || {}),
      supportsTablet: config.ios?.supportsTablet || true,
      // You might need to add `bundleIdentifier` here for iOS builds later
      bundleIdentifier: config.ios?.bundleIdentifier || 'com.yabble.app',
      infoPlist: {
        ...(config.ios?.infoPlist || {}),
        ITSAppUsesNonExemptEncryption: false,
      },
    },
    android: {
      ...(config.android || {}),
      adaptiveIcon: {
        ...(config.android?.adaptiveIcon || {}),
        foregroundImage: config.android?.adaptiveIcon?.foregroundImage || './assets/images/icon.png',
        backgroundColor: config.android?.adaptiveIcon?.backgroundColor || '#FFFFFF',
      },
      package: 'com.yabble.app', // Set the package name
      permissions: Array.from(
        new Set([...(config.android?.permissions || []), 'READ_EXTERNAL_STORAGE', 'WRITE_EXTERNAL_STORAGE'])
      ),
    },
    web: {
      ...(config.web || {}),
      bundler: config.web?.bundler || 'metro',
      output: config.web?.output || 'static',
      favicon: config.web?.favicon || './assets/images/favicon.png',
    },
    plugins: config.plugins || [
      'expo-router',
      'expo-font',
      [
        '@react-native-google-signin/google-signin',
        {
          iosUrlScheme: 'com.googleusercontent.apps.939237185009-ihdc60udhgeose7sq5epksvajd25dsm6',
        },
      ],
    ],
    experiments: {
      ...(config.experiments || {}),
      typedRoutes: config.experiments?.typedRoutes || true,
    },
    extra: {
      ...(config.extra || {}),
      supabaseUrl: process.env.EXPO_PUBLIC_SUPABASE_URL,
      supabaseAnonKey: process.env.EXPO_PUBLIC_SUPABASE_ANON_KEY,
      elevenLabsApiKey: process.env.EXPO_PUBLIC_ELEVENLABS_API_KEY,
      router: {
        ...(config.extra?.router || {}),
        origin: config.extra?.router?.origin || false,
      },
      eas: {
        ...(config.extra?.eas || {}), // Keep this to merge other EAS properties
        projectId: intendedProjectId, // Directly set the new ID
      },
    },
    androidNavigationBar: {
      backgroundColor: '#000000',
      barStyle: 'light-content',
    },
  };
};
