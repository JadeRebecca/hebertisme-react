import React from 'react'
import { FormGroup, Label, Input, Message } from './FormElements'

const NewResultForm = () => {
  return (
    <div>
      <FormGroup>
        <Label htmlFor="label">Date</Label>
        <Input type="date" id="label" />
        {/* <Message>This is the validation message</Message> */}
      </FormGroup>
      <FormGroup>
        <Label>Age</Label>
        <Input type="text" />
      </FormGroup>
      <FormGroup>
        <Label>Lieu</Label>
        <Input type="text" />
        {/* <Message>This is the validation message</Message> */}
      </FormGroup>
    </div>
  )
}

export default NewResultForm
