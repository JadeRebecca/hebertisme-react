import React from 'react'
import {
  FormGroup,
  Label,
  Input,
  Message,
  Select,
  SelectGroup,
  FormGroupContainer,
  EpreuveWrapper,
  EpreuveContainer,
} from './FormElements'

const NewResultForm = ({ user }) => {
  return (
    <div>
      <h3>
        Pratiquant concerné : {user.firstName} {user.lastName}
      </h3>
      <FormGroupContainer>
        <FormGroup>
          <Label htmlFor="date">Date</Label>
          <Input type="date" id="date" />
          {/* <Message>This is the validation message</Message> */}
        </FormGroup>
        <FormGroup>
          <Label>Age</Label>
          <Input type="text" value={user.age} />
        </FormGroup>
        <FormGroup>
          <Label>Lieu</Label>
          <Input type="text" />
          {/* <Message>This is the validation message</Message> */}
        </FormGroup>
      </FormGroupContainer>

      <h3>Nombre d'épreuves</h3>
      <FormGroupContainer>
        <div>
          <Select name="nombre" id="nombre">
            <option value="">-- Choisir un nombre --</option>
            <option value="3">3</option>
            <option value="5">5</option>
            <option value="7">7</option>
            <option value="10">10</option>
            <option value="12">12</option>
          </Select>
        </div>
      </FormGroupContainer>

      <EpreuveWrapper>
        <EpreuveContainer>
          <h3>Course de demi-fond, version 1</h3>
          <FormGroupContainer>
            <div>
              <Label htmlFor="course-demi">Course</Label>
              <Input type="number" id="hauteur" min="0" max="100" step="0.01" />
            </div>
          </FormGroupContainer>

          <h3>Saut</h3>
          <FormGroupContainer>
            <div>
              <Label htmlFor="hauteur">Hauteur</Label>
              <Input type="number" id="hauteur" min="0" max="100" step="0.01" />
            </div>
            <div>
              <Label htmlFor="longueur">Longueur</Label>
              <Input
                type="number"
                id="longueur"
                min="0"
                max="100"
                step="0.01"
              />
            </div>
          </FormGroupContainer>
        </EpreuveContainer>
        <EpreuveContainer>
          <h3>Course de demi-fond, version 2</h3>
          <FormGroupContainer>
            <div>
              <Label htmlFor="course-demi">Course</Label>
              <Select name="hauteur" id="hauteur">
                <option value="">-- cm --</option>
                <option value="0">0</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
              </Select>
            </div>
          </FormGroupContainer>

          <h3>Saut, version 2</h3>
          <FormGroupContainer>
            <div>
              <Label htmlFor="hauteur">Hauteur</Label>
              <SelectGroup>
                <Select name="hauteur" id="hauteur">
                  <option value="">-- m --</option>
                  <option value="0">0</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                </Select>
                {/* <span>,</span> */}
                <Select name="hauteur" id="hauteur">
                  <option value="">-- cm --</option>
                  <option value="0">0</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                </Select>
              </SelectGroup>
            </div>
            <div>
              <Label htmlFor="longueur">Longueur</Label>
              <SelectGroup>
                <Select name="longueur" id="longueur">
                  <option value="">-- m --</option>
                  <option value="0">0</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                </Select>
                {/* <span>,</span> */}
                <Select name="longueur" id="longueur">
                  <option value="">-- cm --</option>
                  <option value="0">0</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                </Select>
              </SelectGroup>
            </div>
          </FormGroupContainer>
        </EpreuveContainer>
      </EpreuveWrapper>
    </div>
  )
}

export default NewResultForm
