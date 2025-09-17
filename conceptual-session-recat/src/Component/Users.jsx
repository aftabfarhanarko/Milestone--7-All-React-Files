import React, { Component } from 'react'

const Mynamesa = ({persons,persons2}) => {
    console.log(persons,persons2)
    return (
      <div>
        <h1>Hello React</h1>
        <h1>Hello {persons.name}</h1>
        <h1>{persons.name} age {persons.age}</h1>
      </div>
    )
  }


export default Mynamesa;

