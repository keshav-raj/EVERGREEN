App.accessRule( "blob:*" );

App.info({
  id: '',
  name: 'EverGreen',
  description: 'EverGreen Dairy.',
  author: 'SFT Ltd',
  email: 'support@sft.io',
  website: 'sft.io',
  version: '1.0'
});

App.configurePlugin('phonegap-plugin-push', {
  SENDER_ID: 'xxx'
});

App.setPreference("AutoHideSplashScreen", "true");
App.setPreference("ShowSplashScreenSpinner", "false");
App.setPreference("SplashScreenDelay", "3000");

App.icons({
  'android_mdpi': 'mobile/icons/evergreen_x48.png', //(48x48)
  'android_hdpi': 'mobile/icons/evergreen_x72.png', //(72x72)
  'android_xhdpi': 'mobile/icons/evergreen_x96.png', //(96x96)
  'android_xxhdpi': 'mobile/icons/evergreen_x144.png', //(144x144)
  'android_xxxhdpi': 'mobile/icons/evergreen_x192.png' //(192x192)
  //'iphone_2x': '', //(120x120)
  //'iphone_3x': '', //(180x180)
  //'ipad': '', //(76x76)
  //'ipad_2x': '', //(152x152)
  //'ipad_pro': '', //(167x167)
  //'ios_settings': '', //(29x29)
  //'ios_settings_2x': '', //(58x58)
  //'ios_settings_3x': '', //(87x87)
  //'ios_spotlight': '', //(40x40)
  //'ios_spotlight_2x': '', //(80x80)
});

App.launchScreens({
  'android_mdpi_portrait': 'mobile/splash/evergreen_320x470.png', //(320x470)
  'android_mdpi_landscape': 'mobile/splash/evergreen_470x320.png', //(470x320)
  'android_hdpi_portrait': 'mobile/splash/evergreen_480x640.png', //(480x640)
  'android_hdpi_landscape': 'mobile/splash/evergreen_640x480.png', //(640x480)
  'android_xhdpi_portrait': 'mobile/splash/evergreen_720x960.png', //(720x960)
  'android_xhdpi_landscape': 'mobile/splash/evergreen_960x720.png', //(960x720)
  'android_xxhdpi_portrait': 'mobile/splash/evergreen_1080x1440.png', //(1080x1440)
  'android_xxhdpi_landscape': 'mobile/splash/evergreen_1440x1080.png' //(1440x1080)
  //'iphone_2x': '', //(640x960)
  //'iphone5': '', //(640x1136)
  //'iphone6': '', //(750x1334)
  //'iphone6p_portrait': '', //(1242x2208)
  //'iphone6p_landscape': '', //(2208x1242)
  //'ipad_portrait': '', //(768x1024)
  //'ipad_portrait_2x': '', //(1536x2048)
  //'ipad_landscape': '', //(1024x768)
  //'ipad_landscape_2x': '', //(2048x1536)
});

App.accessRule( "https://google.com" );
App.accessRule( "https://facebook.com" );
App.accessRule( "https://geocoder.api.here.com" );
App.accessRule( "https://reverse.geocoder.api.here.com" );
