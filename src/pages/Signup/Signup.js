import React, { useState } from 'react'
import { useNavigate } from 'react-router'
import logo from "../../assets/hasset/bsvg.svg"
import logo1 from "../../assets/hasset/bsvg1.svg"
import Nav from '../nav'
import "./signup.css"
import axios from "axios"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function Signup() {
    const [isWing, setisWing] = useState(true)
    const [name,setName]=useState("")
    const [cname,setCname]=useState("")
    const [email,setEmail]=useState("")
    const [field,setField]=useState("")
    const [interested,setInterested]=useState("")
    const [weblink,setWeblink]=useState("")
    const [comment,setComment]=useState("")
    const [mobile,setMobile]=useState()
    const [budget,setBudget]=useState()

    setTimeout(() => setisWing(!isWing), 3000)
    const navigate=useNavigate()

    const handlesubmit=(e)=>{
        e.preventDefault();
        axios.post("https://sheetdb.io/api/v1/8hkqovp8tpez8",{data:[
            {
                "Name":name,
                "Mobile no":mobile,
                "Monthly Budget":budget,
                "Company Name":cname,
                "Company Email":email,
                "Interested for" :interested,
                "Field Buisness":field,
                "Web Link":weblink,
                "Comment":comment,
                "Date & Time":"DATETIME"
               
                
            }
        ]

        }).then((data)=>{
            toast.success('Contact recieved', {
                position: toast.POSITION.TOP_CENTER,
                autoClose:"800",
                hideProgressBar: true
            })

            setBudget("")
            setCname("")
            setComment("")
            setEmail("")
            setField("")
            setInterested("")
            setMobile("")
            setWeblink("")
            setName("")
            console.log(data)
            
        }
        
        
        ).catch((err)=>alert("some error occur"))
    }
    return (
        <main className='home w-full h-full'>
            <header className='w-full flex  justify-center'>
                <div class="header-center ">
                    <a class="logo " href='/'>
                        {
                            isWing ? <img src={logo} id="wings" alt="logo" /> :
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
                <Nav />
                <div class="s-hero" >
                    <div class="m-hero-container " style={{overflow:"initial"}}>
                        <div class="m-hero-header">
                            <h2 className='text-white '> <span style={{ border: "none" }}><span id='m'>C</span>ONTACT</span>   <span style={{ color: "var(--cyancolor)" }}>US</span></h2>
                        </div>
                        <form class="input-container" onSubmit={handlesubmit}>
                            <div class="ic1">
                                <input type="text" className='inp1' placeholder='YOUR NAME' value={name} onChange={(e)=>setName(e.target.value)} />
                                <input type="text" className='inp1' minLength={10} pattern="[0-9]*" placeholder='MOBILE NUMBER' value={mobile} onChange={(e)=>setMobile(e.target.value)}/>
                                <input type="text" className='inp1' min={200} pattern="[0-9]*" placeholder='MONTHLY BUDGET' value={budget} onChange={(e)=>setBudget(e.target.value)}/>
                            </div>
                            <div class="ic2 ic1">
                                <input type="text" className='inp1' placeholder='COMPANY NAME' value={cname}  onChange={(e)=>setCname(e.target.value)}/>
                                <input type="email" className='inp1' placeholder='COMPANY E-MAIL'value={email} onChange={(e)=>setEmail(e.target.value)} />
                                <select className="interested"  value={interested} onChange={(e)=>setInterested(e.target.value) }>
                                <option value="not selected">--SELECT--</option>
                                <option value="MARKETING">MARKETING</option>
                                <option value="RECRUITMENT">RECRUITMENT</option>
                                <option value="DEVELOPMENT">DEVELOPMENT</option>
                                </select>
                            </div>
                            <div class="ic3">
                                <input type="text" className='inp1' placeholder='FIELD OF THE BUISNESS' value={field} onChange={(e)=>setField(e.target.value)}/>
                                <input type="text" className='inp1' placeholder='WEBSITE LINK' value={weblink} onChange={(e)=>setWeblink(e.target.value)}/>
                                <textarea name="" id="" cols="30" rows="5" placeholder='ANY COMMENTS' value={comment} onChange={(e)=>setComment(e.target.value)}></textarea>
                                <div><button type='submit'>SUBMIT</button></div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <ToastContainer />
</main >
  )
}

export default Signup