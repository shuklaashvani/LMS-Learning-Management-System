import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import image from '../assets/logo.png'
import React from "react";
import { AiOutlineMenu } from "react-icons/ai";
import dem from '../assets/dem.png'


export default function NavBar({ sticky }) {
    const [navbarOpen, setNavbarOpen] = React.useState(false);
    const [navbar, setNavbar] = useState(false);
    const Navigate = useNavigate()
    const handleClick = () => {
        Navigate('/')



    }
    return (
        <>
            {/* <div className="absolute -inset-3 bg-gradient-to-r from-pink-600 to-purple-600 blur-lg opacity-75"></div> */}
            <nav className="relative w-auto h-28 bg-gray-800  ">
                <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
                    <div className=" flex flex-row justify-between w-full relative lg:w-auto lg:static lg:block lg:justify-start">
                        <div className="flex flex-row">
                            <img className="w-20 mt-3 " src={image} alt="Threat Guardian" />
                            <h1 className="text-white capitalize text-start font-semibold ml-4 mt-9 text-3xl">
                                Threat Guardians
                            </h1>
                        </div>

                        <button
                            className="text-white float-right cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
                            type="button"
                            onClick={() => setNavbarOpen(!navbarOpen)}
                        >
                            <AiOutlineMenu
                                size={36}
                            />
                        </button>
                    </div>

                    <div
                        className={
                            "lg:flex flex-row items-center" +
                            (navbarOpen ? " flex" : " hidden")
                        }
                        id="example-navbar-danger"
                    >
                        <ul className="flex flex-col lg:flex-row list-none lg:ml-40">
                            <li className="nav-item">
                                <a className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-85"
                                    href="#pablo">
                                    <button className="text-lg text-white hover:border-b-2 border-gray-300 font-medium w-24 h-12 ">Dashboard</button>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-85"
                                    href="#pablo">
                                    <button className="text-lg text-white hover:border-b-2 border-gray-300 font-medium w-24 h-12 ">Users</button>
                                </a>
                            </li>
                             <li className="nav-item">
                                <a className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-85"
                                    href="#pablo">
                                    <button className="text-lg text-white hover:border-b-2 border-gray-300 font-medium w-24 h-12 ">Courses</button>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-85"
                                    href="#pablo">
                                    <button className="text-lg hover:border-b-2 border-gray-300 text-white  font-medium w-24 h-12 ">Help</button>
                                </a>
                            </li>
                        </ul>

                        <div className=" ml-8 menu-container">
                            <div className="menu-trigger">
                                <img className="rounded-full w-16" src={dem}></img>
                            </div>
                        </div>
                        
                    </div>

                </div>
            </nav>
        </>

    );
}