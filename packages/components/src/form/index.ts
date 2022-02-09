import { Form as FormType, IFormFeedback } from '@formily/core'
import { FormProvider as _FormProvider, h, useForm } from '@formily/vue'
import { FormLayout, FormLayoutProps } from '../form-layout'
import { Component, VNode, defineComponent } from 'vue'

const FormProvider = _FormProvider as unknown as Component

export interface FormProps extends FormLayoutProps {
  form?: FormType
  component?: Component
  previewTextPlaceholder: string | (() => VNode)
  onAutoSubmit?: (values: any) => any
  onAutoSubmitFailed?: (feedbacks: IFormFeedback[]) => void
}

export const Form = defineComponent({
  name: 'FForm',
  props: [
    'form',
    'component',
    'previewTextPlaceholder',
    'onAutoSubmit',
    'onAutoSubmitFailed',
  ],
  setup(props, { attrs, slots }) {
    const top = useForm()

    return () => {
      const {
        form,
        component = 'form',
        previewTextPlaceholder = slots?.previewTextPlaceholder,
      } = props

      const renderContent = (form: FormType) => {
        return h(
          FormLayout,
          {
            attrs: {
              ...attrs,
            },
          },
          {
            default: () => [
              h(
                component,
                {
                  on: {
                    submit: (e: Event) => {
                      e?.stopPropagation?.()
                      e?.preventDefault?.()
                    },
                  },
                },
                slots,
              ),
            ],
          },
        )
      }

      if (form) {
        return h(
          FormProvider,
          { props: { form } },
          {
            default: () => renderContent(form),
          },
        )
      }

      if (!top.value) throw new Error('must pass form instance by createForm')

      return renderContent(top.value)
    }
  },
})

export default Form
