import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const Header = () => {

    const nav = [
        {
            id: 1,
            menu: "Home",
            url: "/"
        },
        {
            id: 2,
            menu: "ApplePay",
            url: "applepay"
        }, 
        {
            id: 3,
            menu: "GooglePay",
            url: "googlepay"
        }
    ]

    return (
        <div className='flex justify-between items-center px-5'>
            <div className="py-2 px-3 rounded-sm text-white bg-green-600">
                Experiment
            </div>
            <ul className='flex justify-center gap-5 py-5'>
                {
                    nav.map(menu => (
                        <li key={menu.id}><NavLink className="py-2 px-3 rounded-sm text-white bg-green-600" to={menu.url}>{menu.menu}</NavLink></li>
                    ))
                }
            </ul>
            <div>            
                <div className="py-2 px-3 rounded-sm text-white bg-green-600">
                    User
                </div>
            </div>
        </div>
    )
}

export default Header