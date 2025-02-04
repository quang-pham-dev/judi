import React from 'react'
import Modal, { ModalProps } from 'react-native-modal'
import { ThemedView } from '@/components/ThemedView'
import { useThemeColor } from '@/hooks/use-theme-color'

interface Props extends ModalProps {
  lightColor?: string
  darkColor?: string
}

export const ThemedModal = ({ lightColor, darkColor, ...props }: Props) => {
  const backgroundColor = useThemeColor(
    { light: lightColor, dark: darkColor },
    'background',
  )

  return (
    <Modal
      {...props}
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor,
      }}
      avoidKeyboard
      useNativeDriver
      hideModalContentWhileAnimating
      swipeDirection={['down']}>
      <ThemedView style={{ flex: 1 }} {...props} />
    </Modal>
  )
}
