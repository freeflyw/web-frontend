import React, { useEffect, useState } from 'react'
import logo from "../../assets/hasset/obf.svg"
import logo1 from "../../assets/hasset/obf1.svg"
import "./develop.css"
import "../slider2.css"
import lens from "../../assets/hasset/lens.svg"
import mrkt from "../../assets/hasset/mrkt.svg"
import dev from "../../assets/hasset/dev.svg"
import { BsArrowLeft, BsArrowRight } from "react-icons/bs"
import developdata from './developdata'
import Slider2 from '../slider2'
import Nav from '../nav'
import {useNavigate} from "react-router-dom"
import Slider3 from '../slider3'

function Develop() {
    const [isWing,setisWing]=useState(true)
    const [isMobileScreen, setIsMobileScreen] = useState(false);
    setTimeout(()=>setisWing(!isWing),3000)
    const navigate=useNavigate()
    useEffect(() => {
        const handleResize = () => {
        const screenWidth = window.innerWidth;
        setIsMobileScreen(screenWidth < 600);
        };
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
      }, []);
   

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
                    <h2><span className='orange' >FREEFLY</span> WINGS</h2>
                    <p>WE GIVE WINGS TO YOUR BUISNESS</p>
                </div>
            </a>
            <div class="header2 flex gap-25">
                <button class="orange-br-btn cyan-br-btn" style={{border:"1px solid var(--orange)"}} onClick={()=>navigate("/signup")}>
                Let's talk
                </button>
            </div>
        </div>
    </header>

    <div class="main-container2 flex justify-left gap-7">

    <Nav/>
        <div class="m-hero hero " style={{border:"1px solid var(--orange)"}}>
            <div class="m-hero-container  ">
                <div class="m-hero-header">
                    <h2 className='text-white '> <span style={{ borderBottom: "3px solid var(--orange) ", }}><span id='m'>D</span>EVELOP</span>   <span className='' style={{color:"var(--orange)"}} >WING</span></h2>
                </div>
                {
                    isMobileScreen?<Slider3 data={developdata}/>:<Slider2 data={developdata} />
                }
                

            </div>
        </div>
    </div>
    <div class="footer-txt">
        <div style={{background:'var(--orange)'}}></div>
        <h3  style={{color:'var(--orange)'}} >WE GIVE <span style={{color:"white"}}>WINGS</span> TO YOUR PRODUCTS AND SERVICES</h3>
        <div style={{background:'var(--orange)'}}></div>
    </div>
</main>
  )
}

export default Develop