import { METRICS } from '@/themes/metrics'

export type ErrorsProps = {
  errorInfo?: {
    message?: {
      msg?: string
    }
  }
  message?: string
}

/**
 * Format unit for the css value
 * @param value: number | string
 * @returns value
 */
export const convertToPx = (value: number | string): string => {
  return typeof value === 'number' ? `${value}px` : value
}

/**
 * Format unit for the css value
 * @param type: string
 * @param key: string
 * @returns type
 *
 */
const MetricType = METRICS as {
  [key: string]: any
}

export const getType = (type: string, key: string) => {
  return type && MetricType[key][type]
}
