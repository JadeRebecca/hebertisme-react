import React from 'react'
import {
  FormGroup,
  Label,
  Input,
  InputGroup,
  Message,
  Select,
  SelectGroup,
  FormGroupContainer,
  EpreuveWrapper,
  EpreuveContainer,
} from './FormElements'

const timeOptions = []
for (let i = 0; i < 60; i++) {
  timeOptions.push(
    <option value={i} key={i}>
      {i}
    </option>
  )
}

const cmOptions = []
for (let i = 0; i < 100; i++) {
  cmOptions.push(
    <option value={i} key={i}>
      {i}
    </option>
  )
}

const sautMeterOptions = []
for (let i = 0; i < 5; i++) {
  sautMeterOptions.push(
    <option value={i} key={i}>
      {i}
    </option>
  )
}

const grimperMeterOptions = []
for (let i = 0; i < 25; i++) {
  grimperMeterOptions.push(
    <option value={i} key={i}>
      {i}
    </option>
  )
}

const grimperCmOptions = [
  <option value="0" key="50">
    0
  </option>,
  <option value="50" key="50">
    50
  </option>,
]

const grimperAppuiOptions = []
for (let i = 0; i < 15; i + 0.5) {
  grimperAppuiOptions.push(
    <option value={i} key={i}>
      {i}
    </option>
  )
}

const grimperSansAppuiOptions = []
for (let i = 0; i < 25; i++) {
  grimperSansAppuiOptions.push(
    <option value={i} key={i}>
      {i}
    </option>
  )
}

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
          <h3>Version 1</h3>
          <h4>Course de demi-fond</h4>
          <FormGroupContainer>
            <div>
              <Label htmlFor="course-demi-1">500m</Label>
              <InputGroup id="course-demi-1">
                <Input
                  type="number"
                  id="course-demi-1-min"
                  min="0"
                  max="100"
                  step="1"
                />
                min
                <Input
                  type="number"
                  id="course-demi-1-s"
                  min="0"
                  max="59"
                  step="1"
                />
                s
              </InputGroup>
            </div>
            <div>
              <Label htmlFor="course-demi-2">1000m</Label>
              <InputGroup id="course-demi-2">
                <Input
                  type="number"
                  id="course-demi-2-min"
                  min="0"
                  max="100"
                  step="1"
                />
                min
                <Input
                  type="number"
                  id="course-demi-2-s"
                  min="0"
                  max="59"
                  step="1"
                />
                s
              </InputGroup>
            </div>
            <div>
              <Label htmlFor="course-demi-3">1500m</Label>
              <InputGroup id="course-demi-3">
                <Input
                  type="number"
                  id="course-demi-3-min"
                  min="0"
                  max="100"
                  step="1"
                />
                min
                <Input
                  type="number"
                  id="course-demi-3-s"
                  min="0"
                  max="59"
                  step="1"
                />
                s
              </InputGroup>
            </div>
          </FormGroupContainer>

          <h4>Saut en hauteur</h4>
          <FormGroupContainer>
            <div>
              <Label htmlFor="hauteur">avec élan</Label>
              <Input type="number" id="hauteur" min="0" max="100" step="0.01" />
            </div>
            <div>
              <Label htmlFor="longueur">sans élan</Label>
              <Input
                type="number"
                id="longueur"
                min="0"
                max="100"
                step="0.01"
              />
            </div>
          </FormGroupContainer>

          <h4>Saut en longueur</h4>
          <FormGroupContainer>
            <div>
              <Label htmlFor="hauteur">avec élan</Label>
              <Input type="number" id="hauteur" min="0" max="100" step="0.01" />
            </div>
            <div>
              <Label htmlFor="longueur">sans élan</Label>
              <Input
                type="number"
                id="longueur"
                min="0"
                max="100"
                step="0.01"
              />
            </div>
          </FormGroupContainer>

          <h4>Grimper à la corde</h4>
          <FormGroupContainer>
            <div>
              <Label htmlFor="hauteur">En hauteur simple</Label>
              <InputGroup>
                <Input
                  type="number"
                  id="grimper-corde-hauteur"
                  min="0"
                  max="100"
                  step="0.01"
                />
                m
              </InputGroup>
            </div>
            <div>
              <Label htmlFor="longueur">En vitesse</Label>
              <InputGroup>
                <Input
                  type="number"
                  id="grimper-corde-vitesse"
                  min="0"
                  max="100"
                  step="0.01"
                />
                m
                <Input
                  type="number"
                  id="grimper-corde-vitesse"
                  min="0"
                  max="100"
                  step="0.01"
                />
                s
              </InputGroup>
            </div>
          </FormGroupContainer>

          <h4>Grimper traction / répulsion</h4>
          <FormGroupContainer>
            <div>
              <Label htmlFor="hauteur">Sans appui des pieds</Label>
              <Input
                type="number"
                id="grimper-corde-hauteur"
                min="0"
                max="100"
                step="0.1"
              />
            </div>
            <div>
              <Label htmlFor="longueur">Avec appui des pieds</Label>
              <Input
                type="number"
                id="grimper-corde-vitesse"
                min="0"
                max="100"
                step="0.01"
              />
            </div>
          </FormGroupContainer>
        </EpreuveContainer>

        <EpreuveContainer>
          <h3>Version 2</h3>
          <h4>Course de demi-fond</h4>
          <FormGroupContainer>
            <div>
              <Label htmlFor="course-demi-1">500m</Label>
              <SelectGroup id="course-demi-1">
                <Select name="hauteur" id="hauteur">
                  <option value="">-- min --</option>
                  {timeOptions}
                </Select>
                <Select name="hauteur" id="hauteur">
                  <option value="">-- s --</option>
                  {timeOptions}
                </Select>
              </SelectGroup>
            </div>
            <div>
              <Label htmlFor="course-demi-2">1000m</Label>
              <SelectGroup id="course-demi-2">
                <Select name="hauteur" id="hauteur">
                  <option value="">-- min --</option>
                  {timeOptions}
                </Select>
                <Select name="hauteur" id="hauteur">
                  <option value="">-- s --</option>
                  {timeOptions}
                </Select>
              </SelectGroup>
            </div>
            <div>
              <Label htmlFor="course-demi-3">1500m</Label>
              <SelectGroup id="course-demi-3">
                <Select name="hauteur" id="hauteur">
                  <option value="">-- min --</option>
                  {timeOptions}
                </Select>
                <Select name="hauteur" id="hauteur">
                  <option value="">-- s --</option>
                  {timeOptions}
                </Select>
              </SelectGroup>
            </div>
          </FormGroupContainer>

          <h4>Saut en hauteur</h4>
          <FormGroupContainer>
            <div>
              <Label htmlFor="hauteur">avec élan</Label>
              <SelectGroup id="course-demi-1">
                <Select name="hauteur" id="hauteur">
                  <option value="">-- m --</option>
                  {sautMeterOptions}
                </Select>
                <Select name="hauteur" id="hauteur">
                  <option value="">-- cm --</option>
                  {cmOptions}
                </Select>
              </SelectGroup>
            </div>
            <div>
              <Label htmlFor="longueur">sans élan</Label>
              <SelectGroup id="course-demi-1">
                <Select name="hauteur" id="hauteur">
                  <option value="">-- m --</option>
                  {sautMeterOptions}
                </Select>
                <Select name="hauteur" id="hauteur">
                  <option value="">-- cm --</option>
                  {cmOptions}
                </Select>
              </SelectGroup>
            </div>
          </FormGroupContainer>

          <h4>Saut en longueur</h4>
          <FormGroupContainer>
            <div>
              <Label htmlFor="hauteur">avec élan</Label>
              <SelectGroup id="course-demi-1">
                <Select name="hauteur" id="hauteur">
                  <option value="">-- m --</option>
                  {sautMeterOptions}
                </Select>
                <Select name="hauteur" id="hauteur">
                  <option value="">-- cm --</option>
                  {cmOptions}
                </Select>
              </SelectGroup>
            </div>
            <div>
              <Label htmlFor="longueur">sans élan</Label>
              <SelectGroup id="course-demi-1">
                <Select name="hauteur" id="hauteur">
                  <option value="">-- m --</option>
                  {sautMeterOptions}
                </Select>
                <Select name="hauteur" id="hauteur">
                  <option value="">-- cm --</option>
                  {cmOptions}
                </Select>
              </SelectGroup>
            </div>
          </FormGroupContainer>

          <h4>Grimper à la corde</h4>
          <FormGroupContainer>
            <div>
              <Label htmlFor="hauteur">En hauteur simple</Label>
              <SelectGroup id="course-demi-1">
                <Select name="hauteur" id="hauteur">
                  <option value="">-- m --</option>
                  {grimperMeterOptions}
                </Select>
                <Select name="hauteur" id="hauteur">
                  <option value="">-- cm --</option>
                  {grimperCmOptions}
                </Select>
              </SelectGroup>
            </div>
            <div>
              <Label htmlFor="longueur">En vitesse</Label>
              <SelectGroup id="course-demi-1">
                <Select name="hauteur" id="hauteur">
                  <option value="">-- m --</option>
                  {grimperMeterOptions}
                </Select>
                <Select name="hauteur" id="hauteur">
                  <option value="">-- cm --</option>
                  {grimperCmOptions}
                </Select>
              </SelectGroup>
            </div>
          </FormGroupContainer>

          <h4>Grimper traction ou répulsion</h4>
          <FormGroupContainer>
            <div>
              <Label htmlFor="hauteur">sans appui des pieds</Label>
              <SelectGroup id="course-demi-1">
                <Select name="hauteur" id="hauteur">
                  <option value="">-- m --</option>
                  {grimperMeterOptions}
                </Select>
                <Select name="hauteur" id="hauteur">
                  <option value="">-- cm --</option>
                  {grimperAppuiOptions}
                </Select>
              </SelectGroup>
            </div>
            <div>
              <Label htmlFor="longueur">avec appui des pieds</Label>
              <SelectGroup id="course-demi-1">
                <Select name="hauteur" id="hauteur">
                  <option value="">-- m --</option>
                  {grimperMeterOptions}
                </Select>
                <Select name="hauteur" id="hauteur">
                  <option value="">-- cm --</option>
                  {grimperSansAppuiOptions}
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
