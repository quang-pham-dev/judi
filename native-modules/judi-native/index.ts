// Reexport the native module. On web, it will be resolved to JudiNativeModule.web.ts
// and on native platforms to JudiNativeModule.ts
export { default } from './src/JudiNativeModule'
export { default as JudiNativeView } from './src/JudiNativeView'
export * from './src/JudiNative.types'
