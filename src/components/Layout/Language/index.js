import React from 'react'
import ReactCountryFlag from 'react-country-flag'

const index = () => {
  return (
    <div>
      <ReactCountryFlag
        countryCode="FR"
        svg
        style={{
          width: '2em',
          height: '2em',
        }}
        title="FR"
      />
    </div>
  )
}

export default index
