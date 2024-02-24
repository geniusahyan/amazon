import React, { useState } from 'react'
import Logo from '/Logo.png'
import { AddShoppingCart, LocationOn, MoreVert } from '@mui/icons-material'

const Header = () => {
    const [LangDisplay, setLangDisplay] = useState('hidden')
    const [SignDisplay, setSignDisplay] = useState('hidden')
    const LangMouseEnter = ()=>{
        setLangDisplay('block')
    }
    const LangMouseLeave = ()=>{
        setLangDisplay('hidden')
    }
    const SignMouseEnter = ()=>{
        setSignDisplay('block')
    }
    const SignMouseLeave = ()=>{
        setSignDisplay('hidden')
    }


    const LangClass = `absolute w-32 z-10 bg-white p-3 px-2 pb-1 ${LangDisplay}  top-14 right-90 Lang`
    const SignClass = `absolute w-72 z-10 bg-white ${SignDisplay} p-3 px-2 pb-1 top-14 right-[8rem] Sign`

  return (
    <>
        <div className="navbar text-black relative justify-between px-3 bg-gray-400">
            <div className="">
                <a className="btn btn-ghost  ">
                    <img src={Logo} alt="logo" className=' w-12  '/>
                </a>
            </div>

            <div className="flex flex-col h-12">
                <span className='ml-6' >
                    deliver to
                </span>
                <span>
                    <LocationOn />
                    <span className="font-bold">
                        New York
                    </span>
                </span>
            </div>

            <input type="text" placeholder="search amazon" className="input placeholder:text-gray-400 h-9 text-sm  bg-white input-info w-full max-w-xs" />

            <div className="div" onMouseEnter={LangMouseEnter} onMouseLeave={LangMouseLeave}   >
                <button>
                    Lang
                </button>
                <div className={LangClass}>
                    <li>English</li>
                    <li>Français</li>
                    <li>Deutsch</li>
                    <li>Español</li>
                    <li>Português</li>
                    <li>Русский</li>
                    <li>中文</li>
                </div>
            </div>

            <div className="signIn" onMouseEnter={SignMouseEnter} onMouseLeave={SignMouseLeave}  >
                <button>
                    signIn
                </button>
                <div className={SignClass}>
                    <div className="top text-center">
                        <button className='px-5 mb-2 py-1 bg-slate-500 rounded text-white' >sign in</button>
                        <p className='text-sm' >
                            New customer ? <a className='text-blue-800' href="/">start here</a>
                        </p>
                    </div>

                    <div className="bottom flex text-center p-2">
                        <div className="left flex-1 text-left ">
                            <h2 className='font-bold' >Your Lists</h2>
                            <a className='text-sm'  href="">find a list</a>
                            <a className='text-sm'  href="">create a list or registry </a>
                        </div>
                        <div className="right flex-1 text-left ">
                            <h2 className='font-bold' >Your Account</h2>
                            <a className='text-sm'  href="">account</a>
                            <a className='text-sm'  href="">orders</a>
                            <a className='text-sm'  href="">recomandation</a>
                            <a className='text-sm'  href="">browser history</a>
                            <a className='text-sm'  href="">watchlist</a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="return">Return or Refund</div>

            <div className="flex-none">
                <div className="cart">
                    <AddShoppingCart />
                    <span>cart</span>
                </div>
            </div>
        </div>
    </>
  )
}

export default Header