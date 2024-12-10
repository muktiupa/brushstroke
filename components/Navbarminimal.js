import React from 'react'
import  Logo  from "@/components/Logo";
import Userbtn from "@/components/Userbtn";
import Navsetfive from './Navsetfive';

function Navbarminimal() {
  return (
    <div className='p-4 w-full bg-[#1E1E1E]  flex justify-between items-center' >
        <Logo/>
        <Navsetfive/>
        <Userbtn/>
    </div>
  )
}

export default Navbarminimal