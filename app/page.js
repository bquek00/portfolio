import NavBar from "./components/NavBar"
import About from "./components/About"

export default function Home() {
  

    return (
      <div className='bg-neutral-900 min-h-screen lg:flex items-center justify-center'>
        <NavBar />
        <About />
      </div>
    )
  }