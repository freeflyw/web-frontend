import React, { useState } from 'react'
import lens from "../assets/hasset/lens.svg"
import lens1 from "../assets/hasset/lens1.svg"
import mrkt from "../assets/hasset/mrkt.svg"
import mrkt1 from "../assets/hasset/mrkt1.svg"
import dev from "../assets/hasset/dev.svg"
import dev1 from "../assets/hasset/dev1.svg"
import {GrResources} from "react-icons/gr"
function Nav() {
  const [grn,setGrn]=useState(false)
  const [pink,setPink]=useState(false)
  const [org,setOrg]=useState(false)
  
  return (
    <aside class="nav ">
    <a href="/market" onMouseEnter={()=>setGrn(true)} onMouseLeave={()=>setGrn(false)}>
        {
            grn?<img  src={mrkt1} alt="newsletter" />:<img  src={mrkt} alt="newsletter" />
        }
        </a>
    <a href="/recruit" onMouseEnter={()=>setPink(true)} onMouseLeave={()=>setPink(false)}>
    {
            pink?<img src={lens1} alt="newsletter" />:<img src={lens} alt="newsletter" />
        }
        </a>
    <a href="/develop" onMouseEnter={()=>setOrg(true)} onMouseLeave={()=>setOrg(false)}>
    {
            org? <img src={dev1} alt="newsletter" />: <img src={dev} alt="newsletter" />
        }
    </a>
    <a href="/resources" id='newletter' >
       <GrResources/>
    
    </a>
    
</aside>
  )
}

export default Nav