import * as SecureStore from 'expo-secure-store'

import { JUDI_DEVICE } from '@/constants/common'
import { Device } from '@/lib/storage/device'

/**
 * Generic storage class. DO NOT use this directly. Instead, use the exported
 * storage instances below.
 */
export class Storage<Scopes extends unknown[], Schema> {
  protected sep = ':'
  protected id: string

  constructor({ id }: { id: string }) {
    this.id = id
  }

  /**
   * Store a value in storage based on scopes and/or keys
   *
   *   `set([key], value)`
   *   `set([scope, key], value)`
   */
  async set<Key extends keyof Schema>(
    scopes: [...Scopes, Key],
    data: Schema[Key],
  ): Promise<void> {
    // stored as `{ data: <value> }` structure to ease stringification
    const key = `${this.id}${this.sep}${scopes.join(this.sep)}`
    await SecureStore.setItemAsync(key, JSON.stringify({ data }))
  }

  /**
   * Get a value from storage based on scopes and/or keys
   *
   *   `get([key])`
   *   `get([scope, key])`
   */
  async get<Key extends keyof Schema>(
    scopes: [...Scopes, Key],
  ): Promise<Schema[Key] | undefined> {
    const key = `${this.id}${this.sep}${scopes.join(this.sep)}`
    const res = await SecureStore.getItemAsync(key)
    if (!res) return undefined
    // parsed from storage structure `{ data: <value> }`
    return JSON.parse(res).data
  }

  /**
   * Remove a value from storage based on scopes and/or keys
   *
   *   `remove([key])`
   *   `remove([scope, key])`
   */
  async remove<Key extends keyof Schema>(scopes: [...Scopes, Key]) {
    const key = `${this.id}${this.sep}${scopes.join(this.sep)}`
    await SecureStore.deleteItemAsync(key)
  }

  /**
   * Remove many values from the same storage scope by keys
   *
   *   `removeMany([], [key])`
   *   `removeMany([scope], [key])`
   */
  async removeMany<Key extends keyof Schema>(scopes: [...Scopes], keys: Key[]) {
    for (const key of keys) {
      await this.remove([...scopes, key])
    }
  }
}

/**
 * Device data that's specific to the device and does not vary based on account
 *
 *   `device.set([key], true)`
 */
export const device = new Storage<[], Device>({ id: JUDI_DEVICE })
