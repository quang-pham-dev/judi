import { StatusBar, PixelRatio } from 'react-native'
import { isIOS } from './platform-detection'
import { METRICS } from '@/themes'

const { screenWidth, screenHeight } = METRICS

export function isIphoneX() {
  const X_WIDTH = 375
  const X_HEIGHT = 812
  return isIOS && screenHeight === X_HEIGHT && screenWidth === X_WIDTH
}

export function getStatusBarHeight() {
  let statusBarHeight = 20
  if (isIOS) {
    statusBarHeight = StatusBar.currentHeight || 20
  }
  if (isIphoneX()) {
    statusBarHeight = 44
  }
  return statusBarHeight
}

const designWidth = 375
const designHeight = 667

export const unitWidth = screenWidth / designWidth
export const unitHeight = screenHeight / designHeight
export const statusBarHeight = getStatusBarHeight()
export const safeAreaViewHeight = isIphoneX() ? 34 : 0

export const titleHeight = unitWidth * 100 + statusBarHeight

export const fontScale = PixelRatio.getFontScale()
