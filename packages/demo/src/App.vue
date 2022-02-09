<template>
  <Form :form="form">
    <SchemaField :schema="schema" />
    <Input />
  </Form>
</template>

<script lang="ts">
import { createForm, onFormValuesChange } from '@formily/core'
import { createSchemaField } from '@formily/vue'
import { Input, Form, FormItem } from '@formily/vant-x3'
import '@formily/vant-x3/lib/style'

const schema = {
  type: 'object',
  properties: {
    input1: {
      type: 'string',
      title: '输入框',
      'x-decorator': 'FormItem',
      required: true,
      'x-component': 'Input'
    }
    // textarea: {
    //   type: 'string',
    //   title: '文本框',
    //   'x-decorator': 'FormItem',
    //   'x-component': 'Input.TextArea',
    // },
  }
}

const form = createForm({
  values: {
    input: '12',
    input1: '12'
  },
  effects() {
    onFormValuesChange((form) => {
      console.log(form)
    })
  }
})
const { SchemaField } = createSchemaField({
  components: {
    Input,
    FormItem
  }
})

export default {
  components: { SchemaField, Form, Input },
  data() {
    return {
      form,
      schema
    }
  },
  methods: {
    onSubmit(value: any) {
      console.log(value)
      console.log(form.modified)
      console.log(form)
    }
  }
}
</script>
