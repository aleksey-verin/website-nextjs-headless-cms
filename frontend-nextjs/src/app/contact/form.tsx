'use client'
import Button from '../components/button'
import Fieldset from '../components/fieldset'
import Input from '../components/input'
import Textarea from '../components/textarea'

const INPUT = 'INPUT'
const TEXTAREA = 'TEXTAREA'

const fields = [
  {
    label: 'Name',
    component: INPUT,
    type: 'text',
    name: 'full_name',
    id: 'full_name',
    required: true,
  },
  {
    label: 'Email',
    component: INPUT,
    type: 'email',
    name: 'email',
    id: 'email',
    required: true,
  },
  {
    label: 'Subject',
    component: INPUT,
    type: 'text',
    name: 'subject',
    id: 'subject',
    required: true,
  },
  {
    label: 'Message',
    component: TEXTAREA,
    type: 'text',
    name: 'message',
    id: 'message',
    required: true,
  },
]

const Form = () => {
  return (
    <form className='flex flex-col gap-6'>
      {fields.map((field) => (
        <Fieldset key={field.id}>
          {field.component === INPUT && (
            <Input type={field.type} required={field.required} name={field.name} />
          )}
          {field.component === TEXTAREA && <Textarea required={field.required} name={field.name} />}
        </Fieldset>
      ))}
      <Button type='submit' className='w-40'>
        Submit
      </Button>
    </form>
  )
}

export default Form
