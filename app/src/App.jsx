import { useState } from 'react'

import { Navigation }  from './components/static/Navigation'
import { Hero } from './ui/pages/Home/ui/partials/Hero'
import { Partner } from './ui/pages/Home/ui/partials/Partner'
import { Story } from './ui/pages/Home/ui/partials/Story'

import './App.css'
import { Product } from './ui/pages/Home/ui/partials/Product'
import { Community } from './ui/pages/Home/ui/partials/Community'
import { Gallery } from './ui/pages/Home/ui/partials/Gallery'
import { Information } from './ui/pages/Home/ui/partials/Information'
import { Testimony } from './ui/pages/Home/ui/partials/Testimony'
import { Documents } from './ui/pages/Home/ui/partials/Documents'
import { Footer } from './ui/pages/Home/ui/partials/Footer'

function App() {

  return (
    <>
    <Navigation />

      <div>
        <Hero />
        <Partner />
        <Story />
        <Product />
        <Community />
        <Gallery />
        <Testimony />
        <Information />
        <Documents />
        <Footer />
      </div>
    </>
  )
}

export default App
