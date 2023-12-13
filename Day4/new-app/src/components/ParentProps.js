import React from 'react'
import ChildProp from './ChildProp'

const ParentProp = () => {
    const name1 = "Shono Sharingan"
    const email1="itachi@gmail.com"
    const name2 ="Madara"
    const email2="Madara@gmail.com"
   return (
    <>
    <ChildProp name={name1} email={email1}/>
    <childProp name={name2} email={email2}/>
    </>
   ) 
}

export default ParentProp