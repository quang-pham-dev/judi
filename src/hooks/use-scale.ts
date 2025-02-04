import { useWindowDimensions } from 'react-native'

export function useScale() {
  // Screen height and width
  const { height, width } = useWindowDimensions()

  // Scale all sizes, margins, padding, by this factor
  const scale = Math.max(width, height) / 1000

  // Screen aspect ratio (always > 1)
  const aspectRatio = Math.max(width, height) / Math.min(width, height)

  // True for landscape views
  const landscape = width > height

  // This boolean selects for phones that are very tall compared to their width,
  // and is used by the main screen to lay out some controls more vertically
  // when in portrait orientation
  const tall = !landscape && aspectRatio > 1.7

  return {
    height,
    width,
    scale,
    landscape,
    aspectRatio,
    tall,
  }
}
