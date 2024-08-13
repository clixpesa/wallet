import type * as DocumentPicker from 'expo-document-picker'
import type * as ImagePicker from 'expo-image-picker/src/ImagePicker'
import { useEvent } from 'tamagui'

export type MediaTypeOptions = 'All' | 'Videos' | 'Images' | 'Audios'
export type UseFilePickerControl = {
  open: () => void
  dragStatus?: {
    isDragAccept: boolean
    isDragActive: boolean
    isDragReject: boolean
  }
}

type NativeFiles<MT extends MediaTypeOptions[]> = MT[number] extends 'Images'
  ? ImagePicker.ImagePickerResult['assets']
  : DocumentPicker.DocumentPickerResult[]

export type OnPickType<MT extends MediaTypeOptions[]> = (param: {
  webFiles: File[] | null
  nativeFiles: NativeFiles<MT> | null
}) => void | Promise<void>
type UseFilePickerProps<MT extends MediaTypeOptions> = {
  mediaTypes: MT[]
  onPick: OnPickType<MT[]>
  /** multiple only works for image only types on native, but on web it works regarding the media types */
  multiple: boolean
  typeOfPicker: 'file' | 'image'
}

export function useFilePicker<MT extends MediaTypeOptions>(props?: UseFilePickerProps<MT>) {
  const { mediaTypes, onPick, ...rest } = props || {}

  const _onDrop = useEvent((webFiles) => {
    if (onPick) {
      onPick({ webFiles, nativeFiles: null })
    }
  })

  const onOpen = useEvent((nativeFiles) => {
    if (onPick) {
      onPick({ webFiles: null, nativeFiles })
    }
  })

  const control = {
    open,
  }

  return { control, ...control }
}
