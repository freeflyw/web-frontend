import React, { useState } from 'react'
import logo from "../../assets/hasset/pbf.svg"
import logo1 from "../../assets/hasset/pbf1.svg"
import "./Recruit.css"
import "../slider2.css"
import { BsArrowLeft, BsArrowRight } from "react-icons/bs"
import recruitdata from './Recruitdata'
import Slider2 from '../slider2'
import lens from "../../assets/hasset/lens.svg"
import mrkt from "../../assets/hasset/mrkt.svg"
import dev from "../../assets/hasset/dev.svg"
import Nav from '../nav'
import { useNavigate } from 'react-router'
import Slider3 from '../slider3'
import useScreenwidth from '../screenwidth'
function Recruit() {
  const [isWing,setisWing]=useState(true)
  const [isMobileScreen]=useScreenwidth()
   setTimeout(()=>setisWing(!isWing),3000)
const navigate =useNavigate()
  return (
    <main className='recruit-home w-full h-full'>
    <header className='w-full flex  justify-center'>
        <div class="header-center ">
            <a class="logo " href='/'>
                {
                    isWing?<img src={logo} id="wings" alt="logo" />:
                    <img src={logo1} id="wings" alt="logo" />
                }
            
                <div class="logo-text">
                    <h2><span className='pink' >FREEFLY</span> WINGS</h2>
                    <p>WE GIVE WINGS TO YOUR BUISNESS</p>
                </div>
            </a>
            <div class="header2 flex gap-25">
                
                <button class="pink-br-btn cyan-br-btn" style={{border:"1px solid var(--pink)"}} onClick={()=>navigate("/signup")}>
                Let's talk
                </button>
            </div>
        </div>
    </header>

    <div class="main-container2 flex justify-left gap-7">
    <Nav/>
        <div class="m-hero hero">
            <div class="m-hero-container  ">
                <div class="m-hero-header">
                    <h2 className='text-white '> <span style={{ borderBottom: "3px solid #c700a7 ", }}><span id='m'>R</span>ECRUIT</span>   <span className='' style={{color:"var(--pink)"}} >WING</span></h2>
                </div>
                
                {
                    isMobileScreen?<Slider3 data={recruitdata}/>:<Slider2 data={recruitdata} />
                }
            </div>
        </div>
    </div>
    <div class="footer-txt">
        <div style={{background:"#c700a7"}}></div>
        <h3  style={{color:'#c700a7'}} >WE GIVE <span style={{color:"white"}}>WINGS</span> TO YOUR PRODUCTS AND SERVICES</h3>
        <div style={{background:"#c700a7"}}></div>
    </div>
</main>
  )
}

export default Recruit