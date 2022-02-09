import { composeExport, transformComponent } from '../__builtins__/shared'
import { connect, mapProps, mapReadPretty } from '@formily/vue'
import { Field } from 'vant'
import type { FieldProps } from 'vant'
import { isVoidField } from '@formily/core'

const TransformElInput = transformComponent<FieldProps>(Field, {
  change: 'input'
})

const InnerInput = connect(
  TransformElInput,
  mapProps({
      readOnly: 'readonly',
      value: 'modelValue'
    },
    (props, field) => {
      if (isVoidField(field)) {
        return props
      }
      if (!field) {
        return props
      }
      return {
        feedbackStatus:
          field.validateStatus === 'validating'
            ? 'pending'
            : (Array.isArray(field.decorator) &&
              field.decorator[1]?.feedbackStatus) ||
            field.validateStatus
      }
    })
)

const TextArea = connect(
  InnerInput,
  mapProps((props) => {
    return {
      ...props,
      type: 'textarea'
    }
  })
)

export const Input = composeExport(InnerInput, {
  TextArea
})

export default Input
