'use client'
import React, { useState } from 'react'
import Button from '../components/button'
import Fieldset from '../components/fieldset'
import Input from '../components/input'
import Textarea from '../components/textarea'

const INPUT = 'INPUT'
const TEXTAREA = 'TEXTAREA'

const initialFields = [
  {
    label: 'Name',
    component: INPUT,
    type: 'text',
    name: 'your-name',
    id: 'full_name',
    required: true,
    validation_error: false,
    validation_message: '',
  },
  {
    label: 'Email',
    component: INPUT,
    type: 'email',
    name: 'your-email',
    id: 'email',
    required: true,
    validation_error: false,
    validation_message: '',
  },
  {
    label: 'Subject',
    component: INPUT,
    type: 'text',
    name: 'your-subject',
    id: 'subject',
    required: true,
    validation_error: false,
    validation_message: '',
  },
  {
    label: 'Message',
    component: TEXTAREA,
    type: 'text',
    name: 'your-message',
    id: 'message',
    required: true,
    validation_error: false,
    validation_message: '',
  },
]

const Form = () => {
  const [fields, setFields] = useState(initialFields);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    setFields(fields.map(field => ({
      ...field,
      validation_error: false,
      validation_message: '',
    })))

    const data = new FormData(event.currentTarget)
    const req = await fetch('http://localhost/wordpress/index.php/wp-json/contact-form-7/v1/contact-forms/18/feedback', {
      method: 'POST',
      body: data,
    })
    const response = await req.json()
    console.log(response); 

    if (!response) return console.log('error submitting form')

    if (response.invalid_fields && response.invalid_fields.length > 0) {
      setFields(fields.map(field => {
        const invalidField = response.invalid_fields.find((invalidField: any) => invalidField.field === field.name)
        if (invalidField) {
          return {
            ...field,
            validation_error: true,
            validation_message: invalidField.message,
          }
        }
        return field
      }))
    }
  }

  return (
    <form onSubmit={handleSubmit} className='flex flex-col gap-6'>
      {fields.map((field) => (
        <Fieldset key={field.id}>
          {field.component === INPUT && (
            <Input type={field.type} required={field.required} name={field.name} />
          )}
          {field.component === TEXTAREA && <Textarea required={field.required} name={field.name} />}
          {field.validation_error && <div className='text-sm text-red-500'>{field.validation_message}</div>}
        </Fieldset>
      ))}
      <Button type='submit' className='w-40'>
        Submit
      </Button>
    </form>
  )
}

export default Form
