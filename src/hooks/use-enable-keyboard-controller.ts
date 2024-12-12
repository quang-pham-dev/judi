import { useCallback, useContext, useEffect } from 'react'
import { useFocusEffect } from '@react-navigation/native'
import { KeyboardControllerRefCountContext } from '@/context/keyboard-controller'

export function useEnableKeyboardController(shouldEnable: boolean) {
  const { incrementRefCount, decrementRefCount } = useContext(
    KeyboardControllerRefCountContext,
  )

  useEffect(() => {
    if (!shouldEnable) {
      return
    }
    incrementRefCount()
    return () => {
      decrementRefCount()
    }
  }, [shouldEnable, incrementRefCount, decrementRefCount])
}

export function useEnableKeyboardControllerScreen(shouldEnable: boolean) {
  const { incrementRefCount, decrementRefCount } = useContext(
    KeyboardControllerRefCountContext,
  )

  useFocusEffect(
    useCallback(() => {
      if (!shouldEnable) {
        return
      }
      incrementRefCount()
      return () => {
        decrementRefCount()
      }
    }, [shouldEnable, incrementRefCount, decrementRefCount]),
  )
}
