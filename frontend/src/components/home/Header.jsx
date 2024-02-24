import React from 'react'
import Logo from '/Logo.png'
import { AddShoppingCart, LocationOn, MoreVert } from '@mui/icons-material'

const Header = () => {
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

            <div className="div">
                <button>
                    Lang
                </button>
                <div className="absolute w-32 z-10 bg-white p-3  top-14 right-90 Lang">
                    <li>English</li>
                    <li>Français</li>
                    <li>Deutsch</li>
                    <li>Español</li>
                    <li>Português</li>
                    <li>Русский</li>
                    <li>中文</li>
                </div>
            </div>

            <div className="signIn">sign</div>
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