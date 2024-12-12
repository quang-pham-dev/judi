import { NativeModule, requireNativeModule } from 'expo'

import { JudiNativeModuleEvents } from './JudiNative.types'

declare class JudiNativeModule extends NativeModule<JudiNativeModuleEvents> {
  PI: number
  hello(): string
  setValueAsync(value: string): Promise<void>
}

// This call loads the native module object from the JSI.
export default requireNativeModule<JudiNativeModule>('JudiNative')
