import * as React from 'react'

import { JudiNativeViewProps } from './JudiNative.types'

export default function JudiNativeView(props: JudiNativeViewProps) {
  return (
    <div>
      <iframe
        style={{ flex: 1 }}
        src={props.url}
        onLoad={() => props.onLoad({ nativeEvent: { url: props.url } })}
      />
    </div>
  )
}
