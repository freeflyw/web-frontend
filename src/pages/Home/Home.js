import React, { useState } from 'react'
import "./Home.css"
import logo from "../../assets/hasset/bsvg.svg"
import logo1 from "../../assets/hasset/bsvg1.svg"
import Nav from '../nav'
import { useNavigate } from 'react-router'
function Home() {
    const [isWing,setisWing]=useState(true)
    
    setTimeout(()=>setisWing(!isWing),3000)
    const navigate=useNavigate()
    return (
        <main className='home w-full h-full'>
            <header className='w-full flex  justify-center'>
                <div class="header-center ">
                    <a class="logo " href='/'>
                    {
                    isWing?<img src={logo} id="wings" alt="logo" />:
                    <img src={logo1} id="wings" alt="logo" />
                }
                        <div class="logo-text">
                            <h2><span className='cyan' >FREEFLY</span> WINGS</h2>
                            <p>WE GIVE WINGS TO YOUR BUISNESS</p>
                        </div>
                    </a>
                    <div class="header2 flex gap-25">
                        <button class="cyan-br-btn" onClick={()=>navigate("/signup")}>
                            Let's talk
                        </button>
                    </div>
                </div>
            </header>

            <div class="main-container2 flex justify-left gap-7">


             <Nav/>
                <div class="hero ">
                    <div class="hero-container  ">
                        <div className='text-center' >
                            <h1>Welcome To <br id='br' /> <span className='cyan' >Freefly Wing</span></h1>
                            <h2><span className='cyan'>We Give Wings To<br id='br' /></span> Your Buisness</h2>
                        </div>
                        <button className='explore-btn' onClick={()=>navigate("/market")}>Explore</button>
                        <img className='wing' src={require("../../assets/hasset/half wing.png")} alt="half wing" />

                    </div>
                </div>
            </div>
        </main>
    )
}

export default Home