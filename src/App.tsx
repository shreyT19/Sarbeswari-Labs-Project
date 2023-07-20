// import { useState } from 'react'

// import ActiveMenu from './components/ActiveMenu/ActiveMenu'
import ExpertsSection from './components/ExpertsSection/ExpertsSection'
import Hero from './components/HeroSection/Hero'
import CardComponent from './components/UsableComponents/CardComponent/CardComponent'
import VisitorNumber from './components/VisitorNumbers/VisitorNumbers'
import Header from './components/header/Header'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
     
      <Header/>
      {/* <ActiveMenu/> */}
      <Hero/>
      <CardComponent/>
      <VisitorNumber/>
      <ExpertsSection/>
      {/* <CardComponent/>
      <CardComponent/> */}
    </>
  )
}

export default App
