import { registerWebModule, NativeModule } from 'expo'

import { ChangeEventPayload } from './JudiNative.types'

type JudiNativeModuleEvents = {
  onChange: (params: ChangeEventPayload) => void
}

class JudiNativeModule extends NativeModule<JudiNativeModuleEvents> {
  PI = Math.PI
  async setValueAsync(value: string): Promise<void> {
    this.emit('onChange', { value })
  }
  hello() {
    return 'Hello world! 👋'
  }
}

export default registerWebModule(JudiNativeModule)
