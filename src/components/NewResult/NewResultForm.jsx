import React, { useState } from 'react'
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

const plongeonMeterOptions = []
for (let i = 0; i < 15; i++) {
  plongeonMeterOptions.push(
    <option value={i} key={i}>
      {i}
    </option>
  )
}

const NewResultForm = ({ user }) => {
  const [nbEpreuve, setNbEpreuve] = useState(0)

  const nbEpreuveHandler = (e) => {
    console.log(e.target.value)
    setNbEpreuve(e.target.value)
  }

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
          <Select
            name="nombreEpreuve"
            id="nombreEpreuve"
            onChange={nbEpreuveHandler}
          >
            <option value="">-- Choisir un nombre --</option>
            <option value="3">3</option>
            <option value="5">5</option>
            <option value="7">7</option>
            <option value="10">10</option>
            <option value="12">12</option>
          </Select>
        </div>
      </FormGroupContainer>

      {nbEpreuve > 0 && (
        <ResultWrapper>
          <ResultContainer>
            <H3>Version 1</H3>
            {nbEpreuve > 9 && (
              <EpreuveContainer>
                <h4>Course de vitesse</h4>
                <FormGroupContainer>
                  <div>
                    <Label htmlFor="course-vitesse-1">60m</Label>
                    <InputGroup id="course-vitesse-1">
                      <Input
                        type="number"
                        id="course-vitesse-1-s"
                        min="0"
                        max="59"
                        step="1"
                      />
                      s
                    </InputGroup>
                  </div>
                  <div>
                    <Label htmlFor="course-vitesse-2">80m</Label>
                    <InputGroup id="course-vitesse-2">
                      <Input
                        type="number"
                        id="course-vitesse-2-s"
                        min="0"
                        max="59"
                        step="1"
                      />
                      s
                    </InputGroup>
                  </div>
                  <div>
                    <Label htmlFor="course-vitesse-3">100m</Label>
                    <InputGroup id="course-vitesse-3">
                      <Input
                        type="number"
                        id="course-vitesse-3-s"
                        min="0"
                        max="59"
                        step="1"
                      />
                      s
                    </InputGroup>
                  </div>
                  <div>
                    <Label htmlFor="course-vitesse-4">300m</Label>
                    <InputGroup id="course-vitesse-4">
                      <Input
                        type="number"
                        id="course-vitesse-4-s"
                        min="0"
                        max="59"
                        step="1"
                      />
                      s
                    </InputGroup>
                  </div>
                </FormGroupContainer>
              </EpreuveContainer>
            )}

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

            {nbEpreuve > 5 && (
              <EpreuveContainer>
                <h4>Course de fond</h4>
                <FormGroupContainer>
                  <div>
                    <Label htmlFor="course-fond-1">3000m</Label>
                    <InputGroup id="course-fond-1">
                      <Input
                        type="number"
                        id="course-fond-1-min"
                        min="0"
                        max="100"
                        step="1"
                      />
                      min
                      <Input
                        type="number"
                        id="course-fond-1-s"
                        min="0"
                        max="59"
                        step="1"
                      />
                      s
                    </InputGroup>
                  </div>
                  <div>
                    <Label htmlFor="course-fond-2">5000m</Label>
                    <InputGroup id="course-fond-2">
                      <Input
                        type="number"
                        id="course-fond-2-min"
                        min="0"
                        max="100"
                        step="1"
                      />
                      min
                      <Input
                        type="number"
                        id="course-fond-2-s"
                        min="0"
                        max="59"
                        step="1"
                      />
                      s
                    </InputGroup>
                  </div>
                </FormGroupContainer>
              </EpreuveContainer>
            )}

            <EpreuveContainer>
              <h4>Saut en hauteur</h4>
              <FormGroupContainer>
                <div>
                  <Label htmlFor="hauteur-elan">avec élan</Label>
                  <InputGroup>
                    <Input
                      type="number"
                      id="hauteur-elan"
                      min="0"
                      max="100"
                      step="0.01"
                    />
                    m
                  </InputGroup>
                </div>
                {nbEpreuve > 9 && (
                  <div>
                    <Label htmlFor="hauteur-sans-elan">sans élan</Label>
                    <InputGroup>
                      <Input
                        type="number"
                        id="hauteur-sans-elan"
                        min="0"
                        max="100"
                        step="0.01"
                      />
                      m
                    </InputGroup>
                  </div>
                )}
              </FormGroupContainer>
            </EpreuveContainer>

            {nbEpreuve > 3 && (
              <EpreuveContainer>
                <h4>Saut en longueur</h4>
                <FormGroupContainer>
                  <div>
                    <Label htmlFor="longueur-elan">avec élan</Label>
                    <InputGroup>
                      <Input
                        type="number"
                        id="longueur-elan"
                        min="0"
                        max="100"
                        step="0.01"
                      />
                      m
                    </InputGroup>
                  </div>
                  {nbEpreuve > 9 && (
                    <div>
                      <Label htmlFor="longueur-sans-elan">sans élan</Label>
                      <InputGroup>
                        <Input
                          type="number"
                          id="longueur-sans-elan"
                          min="0"
                          max="100"
                          step="0.01"
                        />
                        m
                      </InputGroup>
                    </div>
                  )}
                </FormGroupContainer>
              </EpreuveContainer>
            )}

            <EpreuveContainer>
              <h4>Grimper à la corde</h4>
              <FormGroupContainer>
                <div>
                  <Label htmlFor="grimper-corde-hauteur">
                    En hauteur simple
                  </Label>
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
                  <Label htmlFor="grimper-corde-vitesse">En vitesse</Label>
                  <InputGroup>
                    <Input
                      type="number"
                      id="grimper-corde-vitesse-m"
                      min="0"
                      max="100"
                      step="0.01"
                    />
                    m
                    <Input
                      type="number"
                      id="grimper-corde-vitesse-s"
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
                  <Label htmlFor="grimper-traction-sans-appui">
                    Sans appui des pieds
                  </Label>
                  <Input
                    type="number"
                    id="grimper-traction-sans-appui"
                    min="0"
                    max="100"
                    step="0.1"
                  />
                </div>
                <div>
                  <Label htmlFor="grimper-traction-avec-appui">
                    Avec appui des pieds
                  </Label>
                  <Input
                    type="number"
                    id="grimper-traction-avec-appui"
                    min="0"
                    max="100"
                    step="0.01"
                  />
                </div>
              </FormGroupContainer>
            </EpreuveContainer>

            {nbEpreuve > 3 && (
              <EpreuveContainer>
                <h4>Lever</h4>
                <FormGroupContainer>
                  <div>
                    <Label htmlFor="lever-lourd">en lourd</Label>
                    <InputGroup>
                      <Input
                        type="number"
                        id="lever-lourd"
                        min="0"
                        max="100"
                        step="1"
                      />
                      kg
                    </InputGroup>{' '}
                  </div>
                  <div>
                    <Label htmlFor="lever-resistance">en résistance</Label>
                    <InputGroup>
                      <Input
                        type="number"
                        id="lever-resistance-kg"
                        min="0"
                        max="100"
                        step="0.01"
                      />
                      kg
                      <Input
                        type="number"
                        id="lever-resistance-rep"
                        min="0"
                        max="100"
                        step="1"
                      />
                      fois
                    </InputGroup>
                  </div>
                </FormGroupContainer>
              </EpreuveContainer>
            )}

            {nbEpreuve > 3 && (
              <EpreuveContainer>
                <h4>Lancer en distance</h4>
                <FormGroupContainer>
                  <div>
                    <Label htmlFor="lancer-distance-1">7kg 257</Label>
                    <InputGroup>
                      <Input
                        type="number"
                        id="lancer-distance-1"
                        min="0"
                        max="100"
                        step="0.01"
                      />
                      m
                    </InputGroup>
                  </div>
                  <div>
                    <Label htmlFor="lancer-distance-2">4kg</Label>
                    <InputGroup>
                      <Input
                        type="number"
                        id="lancer-distance-2"
                        min="0"
                        max="100"
                        step="0.01"
                      />
                      m
                    </InputGroup>
                  </div>
                  <div>
                    <Label htmlFor="lancer-distance-3">1kg</Label>
                    <InputGroup>
                      <Input
                        type="number"
                        id="lancer-distance-3"
                        min="0"
                        max="100"
                        step="0.01"
                      />
                      m
                    </InputGroup>
                  </div>
                </FormGroupContainer>
              </EpreuveContainer>
            )}
            {nbEpreuve > 3 && (
              <EpreuveContainer>
                <h4>Lancer en adresse</h4>
                <FormGroupContainer>
                  <div>
                    <Label htmlFor="lancer-adresse">12 lancers par bras</Label>
                    <InputGroup>
                      <Input
                        type="number"
                        id="lancer-adresse"
                        min="0"
                        max="100"
                        step="1"
                      />
                      jets
                    </InputGroup>
                  </div>
                </FormGroupContainer>
              </EpreuveContainer>
            )}
            {nbEpreuve > 10 && (
              <EpreuveContainer>
                <h4>Natation</h4>
                <FormGroupContainer>
                  <div>
                    <Label htmlFor="natation-50">50m</Label>
                    <InputGroup id="natation-50">
                      <Input
                        type="number"
                        id="natation-50-min"
                        min="0"
                        max="59"
                        step="1"
                      />
                      min
                      <Input
                        type="number"
                        id="natation-50-s"
                        min="0"
                        max="59"
                        step="1"
                      />
                      s
                    </InputGroup>
                  </div>
                  <div>
                    <Label htmlFor="natation-100">100m</Label>
                    <InputGroup id="natation-100">
                      <Input
                        type="number"
                        id="natation-100-min"
                        min="0"
                        max="59"
                        step="1"
                      />
                      min
                      <Input
                        type="number"
                        id="natation-100-s"
                        min="0"
                        max="59"
                        step="1"
                      />
                      s
                    </InputGroup>
                  </div>
                </FormGroupContainer>
                <FormGroupContainer>
                  <div>
                    <Label htmlFor="plongee">plongée</Label>
                    <InputGroup id="plongee">
                      <Input
                        type="number"
                        id="plongee-min"
                        min="0"
                        max="59"
                        step="1"
                      />
                      min
                      <Input
                        type="number"
                        id="plongee-s"
                        min="0"
                        max="59"
                        step="1"
                      />
                      s
                    </InputGroup>
                  </div>
                  <div>
                    <Label htmlFor="plongeon">plongeon</Label>
                    <InputGroup id="plongeon">
                      <Input
                        type="number"
                        id="plongeon-m"
                        min="0"
                        max="59"
                        step="1"
                      />
                      m
                    </InputGroup>
                  </div>
                </FormGroupContainer>
              </EpreuveContainer>
            )}
          </ResultContainer>

          <ResultContainer>
            <H3>Version 2</H3>
            {nbEpreuve > 9 && (
              <EpreuveContainer>
                <h4>Course de vitesse</h4>
                <FormGroupContainer>
                  <div>
                    <Label htmlFor="course-vitesse-1">60m</Label>
                    <SelectGroup id="course-vitesse-1">
                      <Select name="course-vitesse-1-s" id="course-vitesse-1-s">
                        <option value="">-- s --</option>
                        {timeOptions}
                      </Select>
                    </SelectGroup>
                  </div>
                  <div>
                    <Label htmlFor="course-vitesse-2">80m</Label>
                    <SelectGroup id="course-vitesse-2">
                      <Select name="course-vitesse-2-s" id="course-vitesse-2-s">
                        <option value="">-- s --</option>
                        {timeOptions}
                      </Select>
                    </SelectGroup>
                  </div>
                  <div>
                    <Label htmlFor="course-vitesse-3">100m</Label>
                    <SelectGroup id="course-vitesse-3">
                      <Select name="course-vitesse-3-s" id="course-vitesse-3-s">
                        <option value="">-- s --</option>
                        {timeOptions}
                      </Select>
                    </SelectGroup>
                  </div>
                  <div>
                    <Label htmlFor="course-vitesse-4">300m</Label>
                    <SelectGroup id="course-vitesse-4">
                      <Select name="course-vitesse-4-s" id="course-vitesse-4-s">
                        <option value="">-- s --</option>
                        {timeOptions}
                      </Select>
                    </SelectGroup>
                  </div>
                </FormGroupContainer>
              </EpreuveContainer>
            )}

            <EpreuveContainer>
              <h4>Course de demi-fond</h4>
              <FormGroupContainer>
                <div>
                  <Label htmlFor="course-demi-1">500m</Label>
                  <SelectGroup id="course-demi-1">
                    <Select name="course-demi-1-min" id="course-demi-1-min">
                      <option value="">-- min --</option>
                      {timeOptions}
                    </Select>
                    <Select name="course-demi-1-s" id="course-demi-1-s">
                      <option value="">-- s --</option>
                      {timeOptions}
                    </Select>
                  </SelectGroup>
                </div>
                <div>
                  <Label htmlFor="course-demi-2">1000m</Label>
                  <SelectGroup id="course-demi-2">
                    <Select name="course-demi-2-min" id="course-demi-2-min">
                      <option value="">-- min --</option>
                      {timeOptions}
                    </Select>
                    <Select name="course-demi-2-s" id="course-demi-2-s">
                      <option value="">-- s --</option>
                      {timeOptions}
                    </Select>
                  </SelectGroup>
                </div>
                <div>
                  <Label htmlFor="course-demi-3">1500m</Label>
                  <SelectGroup id="course-demi-3">
                    <Select name="course-demi-3-min" id="course-demi-3-min">
                      <option value="">-- min --</option>
                      {timeOptions}
                    </Select>
                    <Select name="course-demi-3-s" id="course-demi-3-s">
                      <option value="">-- s --</option>
                      {timeOptions}
                    </Select>
                  </SelectGroup>
                </div>
              </FormGroupContainer>
            </EpreuveContainer>

            {nbEpreuve > 5 && (
              <EpreuveContainer>
                <h4>Course de fond</h4>
                <FormGroupContainer>
                  <div>
                    <Label htmlFor="course-fond-1">3000m</Label>
                    <SelectGroup id="course-fond-1">
                      <Select name="course-fond-1-min" id="course-fond-1-min">
                        <option value="">-- min --</option>
                        {timeOptions}
                      </Select>
                      <Select name="course-fond-1-s" id="course-fond-1-s">
                        <option value="">-- s --</option>
                        {timeOptions}
                      </Select>
                    </SelectGroup>
                  </div>
                  <div>
                    <Label htmlFor="course-fond-2">5000m</Label>
                    <SelectGroup id="course-fond-2">
                      <Select name="course-fond-2-min" id="course-fond-2-min">
                        <option value="">-- min --</option>
                        {timeOptions}
                      </Select>
                      <Select name="course-fond-2-s" id="course-fond-2-s">
                        <option value="">-- s --</option>
                        {timeOptions}
                      </Select>
                    </SelectGroup>
                  </div>
                </FormGroupContainer>
              </EpreuveContainer>
            )}

            <EpreuveContainer>
              <h4>Saut en hauteur</h4>
              <FormGroupContainer>
                <div>
                  <Label htmlFor="hauteur-elan">avec élan</Label>
                  <SelectGroup id="hauteur-elan">
                    <Select name="hauteur-elan-m" id="hauteur-elan-m">
                      <option value="">-- m --</option>
                      {sautMeterOptions}
                    </Select>
                    <Select name="hauteur_elan-cm" id="hauteur-elan-cm">
                      <option value="">-- cm --</option>
                      {cmOptions}
                    </Select>
                  </SelectGroup>
                </div>
                {nbEpreuve > 9 && (
                  <div>
                    <Label htmlFor="hauteur-sans-elan">sans élan</Label>
                    <SelectGroup id="hauteur-sans-elan">
                      <Select
                        name="hauteur-sans-elan-m"
                        id="hauteur-sans-elan-m"
                      >
                        <option value="">-- m --</option>
                        {sautMeterOptions}
                      </Select>
                      <Select
                        name="hauteur-sans-elan-cm"
                        id="hauteur-sans-elan-cm"
                      >
                        <option value="">-- cm --</option>
                        {cmOptions}
                      </Select>
                    </SelectGroup>
                  </div>
                )}
              </FormGroupContainer>
            </EpreuveContainer>

            {nbEpreuve > 3 && (
              <EpreuveContainer>
                <h4>Saut en longueur</h4>
                <FormGroupContainer>
                  <div>
                    <Label htmlFor="longueur-elan">avec élan</Label>
                    <SelectGroup id="longueur-elan">
                      <Select name="longueur-elan-m" id="longueur-elan-m">
                        <option value="">-- m --</option>
                        {sautMeterOptions}
                      </Select>
                      <Select name="longueur-elan-cm" id="longueur-elan-cm">
                        <option value="">-- cm --</option>
                        {cmOptions}
                      </Select>
                    </SelectGroup>
                  </div>
                  {nbEpreuve > 9 && (
                    <div>
                      <Label htmlFor="longueur-sans-elan">sans élan</Label>
                      <SelectGroup id="longueur-sans-elan">
                        <Select
                          name="longueur-sans-elan-m"
                          id="longueur-sans-elan-m"
                        >
                          <option value="">-- m --</option>
                          {sautMeterOptions}
                        </Select>
                        <Select
                          name="longueur-sans-elan-cm"
                          id="longueur-sans-elan-cm"
                        >
                          <option value="">-- cm --</option>
                          {cmOptions}
                        </Select>
                      </SelectGroup>
                    </div>
                  )}
                </FormGroupContainer>
              </EpreuveContainer>
            )}

            <EpreuveContainer>
              <h4>Grimper à la corde</h4>
              <FormGroupContainer>
                <div>
                  <Label htmlFor="grimper-corde">En hauteur simple</Label>
                  <SelectGroup id="grimper-corde">
                    <Select name="grimper-corde-m" id="grimper-corde-m">
                      <option value="">-- m --</option>
                      {grimperMeterOptions}
                    </Select>
                    <Select name="grimper-corde-cm" id="grimper-corde-cm">
                      <option value="">-- cm --</option>
                      {cmOptions}
                    </Select>
                  </SelectGroup>
                </div>
                <div>
                  <Label htmlFor="grimper-vitesse">En vitesse</Label>
                  <SelectGroup id="grimper-vitesse">
                    <Select name="grimper-vitesse-m" id="grimper-vitesse-m">
                      <option value="">-- m --</option>
                      {grimperMeterOptions}
                    </Select>
                    <Select name="grimper-vitesse-cm" id="grimper-vitesse-cm">
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
                  <Label htmlFor="grimper-sans-appui">
                    sans appui des pieds
                  </Label>
                  <div>
                    <Select
                      name="grimper-sans-appui-m"
                      id="grimper-sans-appui-m"
                    >
                      <option value="">-- m --</option>
                      {grimperAppuiOptions}
                    </Select>
                  </div>
                </div>
                <div>
                  <Label htmlFor="grimper-avec-appui">
                    avec appui des pieds
                  </Label>
                  <div>
                    <Select
                      name="grimper-avec-appui-m"
                      id="grimper-avec-appui-m"
                    >
                      <option value="">-- m --</option>
                      {grimperSansAppuiOptions}
                    </Select>
                  </div>
                </div>
              </FormGroupContainer>
            </EpreuveContainer>

            {nbEpreuve > 3 && (
              <EpreuveContainer>
                <h4>Lever</h4>
                <FormGroupContainer>
                  <div>
                    <Label htmlFor="lever-lourd">en lourd</Label>
                    <div>
                      <Select name="lever-lourd" id="lever-lourd">
                        <option value="">-- kg --</option>
                        {leverLourdOptions}
                      </Select>
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="lever-resistance">en résistance</Label>
                    <div>
                      <Select name="lever-resistance" id="lever-resistance">
                        <option value="">-- kg --</option>
                        {leverResistanceOptions}
                      </Select>
                    </div>
                  </div>
                </FormGroupContainer>
              </EpreuveContainer>
            )}

            {nbEpreuve > 3 && (
              <EpreuveContainer>
                <h4>Lancer en distance</h4>
                <FormGroupContainer>
                  <div>
                    <Label htmlFor="lancer-distance-1">7kg 257</Label>
                    <SelectGroup id="lancer-distance-1">
                      <Select
                        name="lancer-distance-1-m"
                        id="lancer-distance-1-m"
                      >
                        <option value="">-- m --</option>
                        {lancerMeterOptions}
                      </Select>
                      <Select
                        name="lancer-distance-1-cm"
                        id="lancer-distance-1-cm"
                      >
                        <option value="">-- cm --</option>
                        {cmOptions}
                      </Select>
                    </SelectGroup>
                  </div>
                  <div>
                    <Label htmlFor="lancer-distance-2">4kg</Label>
                    <SelectGroup id="lancer-distance-2">
                      <Select
                        name="lancer-distance-2-m"
                        id="lancer-distance-2-m"
                      >
                        <option value="">-- m --</option>
                        {lancerMeterOptions}
                      </Select>
                      <Select
                        name="lancer-distance-2-cm"
                        id="lancer-distance-2-cm"
                      >
                        <option value="">-- cm --</option>
                        {cmOptions}
                      </Select>
                    </SelectGroup>
                  </div>
                  <div>
                    <Label htmlFor="lancer-distance-3">1kg</Label>
                    <SelectGroup id="lancer-distance-3">
                      <Select
                        name="lancer-distance-3-m"
                        id="lancer-distance-3-m"
                      >
                        <option value="">-- m --</option>
                        {lancerMeterOptions}
                      </Select>
                      <Select
                        name="lancer-distance-3-cm"
                        id="lancer-distance-3-cm"
                      >
                        <option value="">-- cm --</option>
                        {cmOptions}
                      </Select>
                    </SelectGroup>
                  </div>
                </FormGroupContainer>
              </EpreuveContainer>
            )}
            {nbEpreuve > 3 && (
              <EpreuveContainer>
                <h4>Lancer en adresse</h4>
                <FormGroupContainer>
                  <div>
                    <Label htmlFor="lancer-adresse">12 lancers par bras</Label>
                    <div>
                      <Select name="lancer-adresse" id="lancer-adresse">
                        <option value="">-- jets --</option>
                        {lancerAdresseOptions}
                      </Select>
                    </div>
                  </div>
                </FormGroupContainer>
              </EpreuveContainer>
            )}
            {nbEpreuve > 10 && (
              <EpreuveContainer>
                <h4>Natation</h4>
                <FormGroupContainer>
                  <div>
                    <Label htmlFor="natation-50">50m</Label>
                    <SelectGroup id="natation-50">
                      <Select name="natation-50-min" id="natation-50-min">
                        <option value="">-- min --</option>
                        {timeOptions}
                      </Select>
                      <Select name="natation-50-s" id="natation-50-s">
                        <option value="">-- s --</option>
                        {timeOptions}
                      </Select>
                    </SelectGroup>
                  </div>
                  <div>
                    <Label htmlFor="natation-100">100m</Label>
                    <SelectGroup id="natation-100">
                      <Select name="natation-100-min" id="natation-100-min">
                        <option value="">-- min --</option>
                        {timeOptions}
                      </Select>
                      <Select name="natation-100s" id="natation-100s">
                        <option value="">-- s --</option>
                        {timeOptions}
                      </Select>
                    </SelectGroup>
                  </div>
                </FormGroupContainer>
                <FormGroupContainer>
                  <div>
                    <Label htmlFor="plongee">plongée</Label>
                    <SelectGroup id="plongee">
                      <Select name="plongee-min" id="plongee-min">
                        <option value="">-- min --</option>
                        {timeOptions}
                      </Select>
                      <Select name="plongee-s" id="plongee-s">
                        <option value="">-- s --</option>
                        {timeOptions}
                      </Select>
                    </SelectGroup>
                  </div>
                  <div>
                    <Label htmlFor="plongeon">plongeon</Label>
                    <SelectGroup id="plongeon">
                      <Select name="plongeon-m" id="plongeon-m">
                        <option value="">-- m --</option>
                        {plongeonMeterOptions}
                      </Select>
                      <Select name="plongeon-cm" id="plongeon-cm">
                        <option value="">-- cm --</option>
                        {cmOptions}
                      </Select>
                    </SelectGroup>
                  </div>
                </FormGroupContainer>
              </EpreuveContainer>
            )}
          </ResultContainer>
        </ResultWrapper>
      )}
    </div>
  )
}

export default NewResultForm
