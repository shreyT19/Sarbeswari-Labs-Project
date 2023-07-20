// import { useState } from 'react'

// import ActiveMenu from './components/ActiveMenu/ActiveMenu'
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
      {/* <CardComponent/>
      <CardComponent/> */}
    </>
  )
}

export default App
