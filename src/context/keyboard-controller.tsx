import { createContext, useMemo, useRef } from 'react'
import {
  KeyboardProvider,
  useKeyboardController,
} from 'react-native-keyboard-controller'

export const KeyboardControllerRefCountContext = createContext<{
  incrementRefCount: () => void
  decrementRefCount: () => void
}>({
  incrementRefCount: () => {},
  decrementRefCount: () => {},
})

export function KeyboardControllerProvider({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <KeyboardProvider enabled={false} statusBarTranslucent>
      <KeyboardControllerProviderInner>
        {children}
      </KeyboardControllerProviderInner>
    </KeyboardProvider>
  )
}

function KeyboardControllerProviderInner({
  children,
}: {
  children: React.ReactNode
}) {
  const { setEnabled } = useKeyboardController()
  const refCount = useRef(0)

  const value = useMemo(
    () => ({
      incrementRefCount: () => {
        refCount.current++
        setEnabled(refCount.current > 0)
      },
      decrementRefCount: () => {
        refCount.current--
        setEnabled(refCount.current > 0)

        if (__DEV__ && refCount.current < 0) {
          console.error('KeyboardController ref count < 0')
        }
      },
    }),
    [setEnabled],
  )

  return (
    <KeyboardControllerRefCountContext.Provider value={value}>
      {children}
    </KeyboardControllerRefCountContext.Provider>
  )
}
