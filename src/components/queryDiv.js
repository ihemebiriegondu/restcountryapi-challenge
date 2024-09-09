import React from 'react'
import Searchbar from './searchbar'
import Filter from './filter'

import '../componentsStyles/querydiv.css'

export default function QueryDiv() {
  return (
    <section id='queryDiv'>
        <Searchbar />
        <Filter />
    </section>
  )
}
