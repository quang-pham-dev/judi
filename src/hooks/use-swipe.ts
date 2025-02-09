import { Dimensions, GestureResponderEvent } from 'react-native'
import { useSharedValue } from 'react-native-reanimated'

const SCREEN_WIDTH = Dimensions.get('window').width

export function useSwipe(
  onSwipeLeft: () => void,
  onSwipeRight: () => void,
): [
  onTouchStart: (event: GestureResponderEvent) => void,
  onTouchEnd: (event: GestureResponderEvent) => void,
] {
  let firstTouchPageX = useSharedValue(0).value
  const singleTouchValueThreshold = 2

  function onTouchStart(event: GestureResponderEvent) {
    firstTouchPageX = event.nativeEvent.pageX || 0
  }

  function onTouchEnd(event: GestureResponderEvent) {
    try {
      const positionX = event.nativeEvent.pageX || 0

      const isSingleTouch =
        Math.abs(positionX - firstTouchPageX) < singleTouchValueThreshold

      if (isSingleTouch) {
        onSingleTouchHandle(positionX)
        return
      }

      if (positionX < firstTouchPageX) {
        onSwipeRight()
      } else {
        onSwipeLeft()
      }
    } catch (error) {
      if (__DEV__) {
        console.error(error)
      }
    }
  }

  function onSingleTouchHandle(positionX: number) {
    if (positionX < SCREEN_WIDTH / 2) {
      onSwipeLeft()
    } else {
      onSwipeRight()
    }
  }

  return [onTouchStart, onTouchEnd]
}
