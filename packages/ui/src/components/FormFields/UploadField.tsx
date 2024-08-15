import { useFieldInfo, useTsController } from '@ts-react/form'
import { useId } from 'react'
import { Fieldset, Label, XStack } from 'tamagui'
import { z } from 'zod'

import { FieldError } from '../FieldError'
import { Shake } from '../Shake'
import { UploadFile } from '../elements/pickers/UploadFile'

export const UploadSchema = z.object({
  file: z.coerce.date(),
})

export const UploadField = () => {
  const {
    field,
    error,
    formState: { isSubmitting },
  } = useTsController<z.infer<typeof UploadSchema>>()
  const { label } = useFieldInfo()
  const id = useId()
  const disabled = isSubmitting

  return (
    <Fieldset gap="$2">
      <Label theme="alt1" size="$3">
        {label}
      </Label>

      <XStack $sm={{ fd: 'column' }} $gtSm={{ fw: 'wrap' }} gap="$4">
        {/* <Theme name={error?.file ? 'red' : null} forceClassName> */}
        <Fieldset $gtSm={{ fb: 0 }} f={1}>
          <Shake shakeKey={error?.file?.errorMessage}>
            <UploadFile />
          </Shake>
          <FieldError message={error?.file?.errorMessage} />
        </Fieldset>
        {/* </Theme> */}
      </XStack>
    </Fieldset>
  )
}
