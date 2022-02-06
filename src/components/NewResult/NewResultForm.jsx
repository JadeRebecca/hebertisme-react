import React from 'react'
import {
  FormGroup,
  Label,
  Input,
  InputGroup,
  EpreuveContainer,
  Message,
  H3,
  Select,
  SelectGroup,
  FormGroupContainer,
  ResultWrapper,
  ResultContainer,
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

const grimperAppuiOptions = []
for (let i = 0; i < 15; i += 0.5) {
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

const leverLourdOptions = []
for (let i = 0; i < 150; i += 10) {
  leverLourdOptions.push(
    <option value={i} key={i}>
      {i}
    </option>
  )
}

const leverResistanceData = [
  {
    id: 1,
    value: 1,
    title: '10kg 1 fois',
  },
  {
    id: 2,
    value: 2,
    title: '15kg 1 fois',
  },
  {
    id: 3,
    value: 3,
    title: '20kg 1 fois',
  },
  {
    id: 4,
    value: 4,
    title: '25kg 1 fois',
  },
  {
    id: 5,
    value: 5,
    title: '30kg 1 fois',
  },
  {
    id: 6,
    value: 6,
    title: '40kg 1 fois',
  },
  {
    id: 7,
    value: 7,
    title: '40kg 3 fois',
  },
  {
    id: 8,
    value: 8,
    title: '40kg 5 fois',
  },
  {
    id: 9,
    value: 9,
    title: '40kg 10 fois',
  },
  {
    id: 10,
    value: 10,
    title: '40kg 15 fois',
  },
  {
    id: 11,
    value: 11,
    title: '40kg 20 fois',
  },
  {
    id: 12,
    value: 12,
    title: '40kg 22 fois',
  },
  {
    id: 13,
    value: 13,
    title: '40kg 24 fois',
  },
  {
    id: 14,
    value: 14,
    title: '40kg 26 fois',
  },
  {
    id: 15,
    value: 15,
    title: '40kg 28 fois',
  },
  {
    id: 16,
    value: 16,
    title: '40kg 30 fois',
  },
  {
    id: 17,
    value: 17,
    title: '40kg 32 fois',
  },
  {
    id: 18,
    value: 18,
    title: '40kg 34 fois',
  },
  {
    id: 19,
    value: 19,
    title: '40kg 36 fois',
  },
  {
    id: 20,
    value: 20,
    title: '40kg 38 fois',
  },
  {
    id: 21,
    value: 21,
    title: '40kg 40 fois',
  },
]
const leverResistanceOptions = []
for (let item of leverResistanceData) {
  leverResistanceOptions.push(
    <option value={item.value} key={item.id}>
      {item.title}
    </option>
  )
}

const lancerMeterOptions = []
for (let i = 0; i < 35; i++) {
  lancerMeterOptions.push(
    <option value={i} key={i}>
      {i}
    </option>
  )
}

const lancerAdresseOptions = []
for (let i = 0; i < 25; i++) {
  lancerAdresseOptions.push(
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

      <ResultWrapper>
        <ResultContainer>
          <H3>Version 1</H3>
          <EpreuveContainer>
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
          </EpreuveContainer>

          <EpreuveContainer>
            <h4>Saut en hauteur</h4>
            <FormGroupContainer>
              <div>
                <Label htmlFor="hauteur">avec élan</Label>
                <InputGroup>
                  <Input
                    type="number"
                    id="hauteur"
                    min="0"
                    max="100"
                    step="0.01"
                  />
                  m
                </InputGroup>
              </div>
              <div>
                <Label htmlFor="longueur">sans élan</Label>
                <InputGroup>
                  <Input
                    type="number"
                    id="longueur"
                    min="0"
                    max="100"
                    step="0.01"
                  />
                  m
                </InputGroup>
              </div>
            </FormGroupContainer>
          </EpreuveContainer>

          <EpreuveContainer>
            <h4>Saut en longueur</h4>
            <FormGroupContainer>
              <div>
                <Label htmlFor="hauteur">avec élan</Label>
                <InputGroup>
                  <Input
                    type="number"
                    id="hauteur"
                    min="0"
                    max="100"
                    step="0.01"
                  />
                  m
                </InputGroup>
              </div>
              <div>
                <Label htmlFor="longueur">sans élan</Label>
                <InputGroup>
                  <Input
                    type="number"
                    id="longueur"
                    min="0"
                    max="100"
                    step="0.01"
                  />
                  m
                </InputGroup>
              </div>
            </FormGroupContainer>
          </EpreuveContainer>

          <EpreuveContainer>
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
          </EpreuveContainer>

          <EpreuveContainer>
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
            <h4>Lever</h4>
            <FormGroupContainer>
              <div>
                <Label htmlFor="hauteur">en lourd</Label>
                <InputGroup>
                  <Input
                    type="number"
                    id="hauteur"
                    min="0"
                    max="100"
                    step="1"
                  />
                  kg
                </InputGroup>{' '}
              </div>
              <div>
                <Label htmlFor="longueur">en résistance</Label>
                <InputGroup>
                  <Input
                    type="number"
                    id="longueur"
                    min="0"
                    max="100"
                    step="0.01"
                  />
                  kg
                  <Input
                    type="number"
                    id="longueur"
                    min="0"
                    max="100"
                    step="1"
                  />
                  fois
                </InputGroup>
              </div>
            </FormGroupContainer>
          </EpreuveContainer>

          <EpreuveContainer>
            <h4>Lancer en distance</h4>
            <FormGroupContainer>
              <div>
                <Label htmlFor="hauteur">7kg 257</Label>
                <InputGroup>
                  <Input
                    type="number"
                    id="hauteur"
                    min="0"
                    max="100"
                    step="0.01"
                  />
                  m
                </InputGroup>
              </div>
              <div>
                <Label htmlFor="longueur">4kg</Label>
                <InputGroup>
                  <Input
                    type="number"
                    id="longueur"
                    min="0"
                    max="100"
                    step="0.01"
                  />
                  m
                </InputGroup>
              </div>
              <div>
                <Label htmlFor="longueur">1kg</Label>
                <InputGroup>
                  <Input
                    type="number"
                    id="longueur"
                    min="0"
                    max="100"
                    step="0.01"
                  />
                  m
                </InputGroup>
              </div>
            </FormGroupContainer>
          </EpreuveContainer>

          <EpreuveContainer>
            <h4>Lancer en adresse</h4>
            <FormGroupContainer>
              <div>
                <Label htmlFor="hauteur">12 lancers par bras</Label>
                <InputGroup>
                  <Input
                    type="number"
                    id="hauteur"
                    min="0"
                    max="100"
                    step="1"
                  />
                  jets
                </InputGroup>
              </div>
            </FormGroupContainer>
          </EpreuveContainer>
        </ResultContainer>

        <ResultContainer>
          <H3>Version 2</H3>
          <EpreuveContainer>
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
          </EpreuveContainer>

          <EpreuveContainer>
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
          </EpreuveContainer>

          <EpreuveContainer>
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
          </EpreuveContainer>

          <EpreuveContainer>
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
                    {cmOptions}
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
                    {cmOptions}
                  </Select>
                </SelectGroup>
              </div>
            </FormGroupContainer>
          </EpreuveContainer>

          <EpreuveContainer>
            <h4>Grimper traction / répulsion</h4>
            <FormGroupContainer>
              <div>
                <Label htmlFor="hauteur">sans appui des pieds</Label>
                <div>
                  <Select name="hauteur" id="hauteur">
                    <option value="">-- m --</option>
                    {grimperAppuiOptions}
                  </Select>
                </div>
              </div>
              <div>
                <Label htmlFor="longueur">avec appui des pieds</Label>
                <div>
                  <Select name="hauteur" id="hauteur">
                    <option value="">-- m --</option>
                    {grimperSansAppuiOptions}
                  </Select>
                </div>
              </div>
            </FormGroupContainer>
          </EpreuveContainer>

          <EpreuveContainer>
            <h4>Lever</h4>
            <FormGroupContainer>
              <div>
                <Label htmlFor="hauteur">en lourd</Label>
                <div>
                  <Select name="hauteur" id="hauteur">
                    <option value="">-- kg --</option>
                    {leverLourdOptions}
                  </Select>
                </div>
              </div>
              <div>
                <Label htmlFor="longueur">en résistance</Label>
                <div>
                  <Select name="hauteur" id="hauteur">
                    <option value="">-- kg --</option>
                    {leverResistanceOptions}
                  </Select>
                </div>
              </div>
            </FormGroupContainer>
          </EpreuveContainer>

          <EpreuveContainer>
            <h4>Lancer en distance</h4>
            <FormGroupContainer>
              <div>
                <Label htmlFor="hauteur">7kg 257</Label>
                <SelectGroup id="course-demi-1">
                  <Select name="hauteur" id="hauteur">
                    <option value="">-- m --</option>
                    {lancerMeterOptions}
                  </Select>
                  <Select name="hauteur" id="hauteur">
                    <option value="">-- cm --</option>
                    {cmOptions}
                  </Select>
                </SelectGroup>
              </div>
              <div>
                <Label htmlFor="longueur">4kg</Label>
                <SelectGroup id="course-demi-1">
                  <Select name="hauteur" id="hauteur">
                    <option value="">-- m --</option>
                    {lancerMeterOptions}
                  </Select>
                  <Select name="hauteur" id="hauteur">
                    <option value="">-- cm --</option>
                    {cmOptions}
                  </Select>
                </SelectGroup>
              </div>
              <div>
                <Label htmlFor="longueur">1kg</Label>
                <SelectGroup id="course-demi-1">
                  <Select name="hauteur" id="hauteur">
                    <option value="">-- m --</option>
                    {lancerMeterOptions}
                  </Select>
                  <Select name="hauteur" id="hauteur">
                    <option value="">-- cm --</option>
                    {cmOptions}
                  </Select>
                </SelectGroup>
              </div>
            </FormGroupContainer>
          </EpreuveContainer>

          <EpreuveContainer>
            <h4>Lancer en adresse</h4>
            <FormGroupContainer>
              <div>
                <Label htmlFor="hauteur">12 lancers par bras</Label>
                <div>
                  <Select name="hauteur" id="hauteur">
                    <option value="">-- jets --</option>
                    {lancerAdresseOptions}
                  </Select>
                </div>
              </div>
            </FormGroupContainer>
          </EpreuveContainer>
        </ResultContainer>
      </ResultWrapper>
    </div>
  )
}

export default NewResultForm
