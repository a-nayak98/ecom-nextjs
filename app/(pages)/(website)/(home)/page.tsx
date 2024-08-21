import *  as React from "react"
import Image from 'next/image'
import pathLogo from "../../../../public/assets/images/logo.svg"

const Home = () => {
  return (
    <main>
      <h1>home</h1>

       <Image src={pathLogo} alt='logo' width="200" height={200} /> 
    </main>
  )
}

export default Home