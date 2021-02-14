import Slide from "./components/Slide"
import About from "./components/About"
import Nav from "./components/Nav"

const App = () => {

  const navItem = ['Home', 'Shop', 'About', 'Contact']

  return (
    <>
      <Nav 
        item={navItem[0]} 
        item1={navItem[1]} 
        item2={navItem[2]} 
        item3={navItem[3]} 
      />
      <Slide />
      <About />
    </>
  )
}

export default App
