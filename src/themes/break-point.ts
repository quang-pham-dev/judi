import { Platform } from 'react-native'
import { METRICS } from './metrics'

export const BREAKPOINTS = {
  WIDTH: {
    // for Android small screens
    AN_SM: 360,

    // for iphone 6, 6s, 7, 8, 11Pro, X, Xs
    SM: 375,

    // for iphone 6+, 6s+, 7+, 8+, 11, Xr, 11Pro Max, Xs Max
    LG: 414,

    // for Tablets Nexus 9 (768), Nexus 7 (2013) (600), Pixel C (900), Samsung Galaxy Tab 10 (800), Chromebook Pixel (1280)
    // for iPad: iPad Pro(1024), iPad Third & Fourth Generation, iPad Air 1 & 2, iPad Mini 2 & 3 and iPad Mini (768)
    XL: 600,
  },
  HEIGHT: {
    // for Android small screens
    AN_SM: 640,

    // for iphone 6, 6s, 7, 8
    SM: 667,

    // for iphone 6+, 6s+, 7+, 8+
    MD: 736,

    // for iphone 11Pro, X, Xs
    LG: 812,

    // for iphone 11Pro Max, Xs Max, 11, Xr
    XL: 896,
  },
}

export const SMALL_SCREEN = METRICS.screenHeight < BREAKPOINTS.HEIGHT.MD
export const MEDIUM_SCREEN =
  METRICS.screenHeight >= BREAKPOINTS.HEIGHT.MD &&
  METRICS.screenHeight < BREAKPOINTS.HEIGHT.LG
export const LARGE_SCREEN =
  METRICS.screenHeight >= BREAKPOINTS.HEIGHT.LG &&
  METRICS.screenHeight < BREAKPOINTS.HEIGHT.XL
export const EXTRA_LARGE_SCREEN = METRICS.screenHeight >= BREAKPOINTS.HEIGHT.XL
export const SMALL_WIDTH_SCREEN = METRICS.screenWidth < BREAKPOINTS.WIDTH.LG
export const LARGE_WIDTH_SCREEN = METRICS.screenWidth >= BREAKPOINTS.WIDTH.LG

export const ANDROID_SMALL_SCREEN =
  Platform.OS === 'android' && METRICS.screenWidth <= BREAKPOINTS.WIDTH.AN_SM
export const ANDROID_MEDIUM_SCREEN =
  Platform.OS === 'android' &&
  METRICS.screenWidth > BREAKPOINTS.WIDTH.SM &&
  METRICS.screenWidth <= BREAKPOINTS.WIDTH.LG
export const ANDROID_SMALL_HEIGHT_SCREEN =
  Platform.OS === 'android' && METRICS.screenHeight <= BREAKPOINTS.HEIGHT.MD
export const ANDROID_TINY_HEIGHT_SCREEN =
  Platform.OS === 'android' && METRICS.screenHeight <= BREAKPOINTS.HEIGHT.AN_SM
