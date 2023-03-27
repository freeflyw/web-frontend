import React, { useState } from 'react'
import logo from "../../assets/hasset/gbf.svg"
import logo1 from "../../assets/hasset/gbf1.svg"
import "./Market.css"
import { BsArrowLeft, BsArrowRight } from "react-icons/bs"
import Slider from '../slider'
import marketdata from './marketdata'
import lens from "../../assets/hasset/lens.svg"
import mrkt from "../../assets/hasset/mrkt.svg"
import dev from "../../assets/hasset/dev.svg"
import Nav from '../nav'
import { useNavigate } from 'react-router'
import useScreenwidth from '../screenwidth'
import Slider3 from '../slider3'
function Market() {
    const [isWing,setisWing]=useState(true)
    const [isMobileScreen]=useScreenwidth()
    setTimeout(()=>setisWing(!isWing),3000)
    const navigate=useNavigate()
    return (
        <main className='market-home w-full h-full'>
            <header className='w-full flex  justify-center'>
                <div class="header-center ">
                    <a class="logo " href='/'>
                    {
                    isWing?<img src={logo} id="wings" alt="logo" />:
                    <img src={logo1} id="wings" alt="logo" />
                }
                        <div class="logo-text">
                            <h2><span className='green' >FREEFLY</span> WINGS</h2>
                            <p>WE GIVE WINGS TO YOUR BUISNESS</p>
                        </div>
                    </a>
                    <div class="header2 flex gap-25">
                        <button class="green-br-btn cyan-br-btn" style={{border:"1px solid #028C5A"}} onClick={()=>navigate("/signup")}>
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
                            <h2 className='text-white '> <span style={{ borderBottom: "3px solid #2a5e2a ", }}><span id='m'>M</span>ARKET</span>   <span className='text-green-800'>WING</span></h2>
                        </div>
                        
                        {
                    isMobileScreen?<Slider3 data={marketdata}/>:<Slider data={marketdata} />
                }

                    </div>
                </div>
            </div>
            <div class="footer-txt">
                <div></div>
                <h3 >WE GIVE <span style={{color:"white"}}>WINGS</span> TO YOUR PRODUCTS AND SERVICES</h3>
                <div ></div>
            </div>
        </main>
    )
}

export default Market