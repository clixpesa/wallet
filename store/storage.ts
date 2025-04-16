import { MMKV } from 'react-native-mmkv'
import * as SecureStore from 'expo-secure-store'
import * as aesjs from 'aes-js'

export const storage = new MMKV()

async function _encrypt(key: string, value: string) {
  const encryptionKey = crypto.getRandomValues(new Uint8Array(256 / 8))
  const cipher = new aesjs.ModeOfOperation.ctr(encryptionKey, new aesjs.Counter(1))
  const encryptedBytes = cipher.encrypt(aesjs.utils.utf8.toBytes(value))
  await SecureStore.setItemAsync(key, aesjs.utils.hex.fromBytes(encryptionKey))
  return aesjs.utils.hex.fromBytes(encryptedBytes)
}

async function _decrypt(key: string, value: string) {
  const encryptionKeyHex = await SecureStore.getItemAsync(key)
  if (!encryptionKeyHex) {
    return encryptionKeyHex
  }
  const cipher = new aesjs.ModeOfOperation.ctr(
    aesjs.utils.hex.toBytes(encryptionKeyHex),
    new aesjs.Counter(1)
  )
  const decryptedBytes = cipher.decrypt(aesjs.utils.hex.toBytes(value))
  return aesjs.utils.utf8.fromBytes(decryptedBytes)
}

export async function getItem<T>(key: string): Promise<T | null> {
  const enValue = storage.getString(key)
  if (!enValue) {
    return enValue ? JSON.parse(enValue) : null
  }
  const value = await _decrypt(key, enValue)
  return value ? JSON.parse(value) : null
}

export async function setItem<T>(key: string, value: T): Promise<void> {
  const enValue = await _encrypt(key, JSON.stringify(value))
  storage.set(key, enValue)
}

export async function removeItem(key: string): Promise<void> {
  await SecureStore.deleteItemAsync(key)
  storage.delete(key)
}
