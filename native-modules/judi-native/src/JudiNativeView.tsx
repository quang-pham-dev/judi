import { requireNativeView } from 'expo'
import * as React from 'react'

import { JudiNativeViewProps } from './JudiNative.types'

const NativeView: React.ComponentType<JudiNativeViewProps> =
  requireNativeView('JudiNative')

export default function JudiNativeView(props: JudiNativeViewProps) {
  return <NativeView {...props} />
}
