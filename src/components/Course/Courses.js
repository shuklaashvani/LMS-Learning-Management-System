import React, { useState } from "react";
import { FcGenericSortingDesc } from "react-icons/fc";
import {  MdQuiz,  } from "react-icons/md";
import {  RiPagesFill, RiDiscussFill } from "react-icons/ri";
import { AiFillBook } from "react-icons/ai";
import { SiGoogleanalytics, SiHomeadvisor } from "react-icons/si";
import { HiSpeakerphone } from "react-icons/hi";
import { BsFillPeopleFill } from "react-icons/bs";
import { MdAssignment } from "react-icons/md";
import { Link } from "react-router-dom";
import { useAuth } from "../../Auth/auth";
import Cookies from 'js-cookie'


const Courses = ({courseId}) => {

    // const auth = useAuth()
    // const userRole = auth.user
    // const token = Cookies.get('token')
    const userRole = Cookies.get('userRole')
    const menus = [
        { name: "Home ", link: "/", icon: SiHomeadvisor , role:"both"},
        { name: "Announcements", link: `/announcement/${courseId}`, icon: HiSpeakerphone , role:"both"},
        { name: "Assignments", link: `/assignment/${courseId}`, icon: MdAssignment , role:"both"},
        { name: "Discussion", link: `/discussion/${courseId}`, icon: RiDiscussFill , role:"both"},
        { name: "Grades", link: `/Grades/${courseId}`, icon:  SiGoogleanalytics ,role:"both"},
        { name: "Students", link: `/Students/${courseId}`, icon: BsFillPeopleFill, margin: true ,role:"Admin"},
        { name: "Pages", link: `/course/${courseId}`, icon: AiFillBook ,role:"both"},
        { name: "Quizzes", link: `/quiz/${courseId}`, icon: MdQuiz ,role:"both"},
        { name: "Syllabus", link: `/syllabus/${courseId}`, icon: RiPagesFill, role:"both"},
    ];
    const [open,setOpen] = useState(false);


    
  return ( 
    
      <section className="flex min-h-screen  ">
             <div
                className={` bg-[#10102a] min-h-fit ${open ? "w-52" : "w-16"
                    } duration-500 text-gray-300 px-1`}
            >
                <div className=" mt-3 pt-3 pb-2 flex justify-end mr-2 ">
                    <FcGenericSortingDesc
                        size={36}
                        className="cursor-pointer"
                        onClick={() => setOpen(!open)}
                    />
                    
                </div>

              <hr className=" h-1 -mx-1 bg-slate-300"/>
                <div className="mt-4 select-none flex flex-col gap-5 px-2">
                    {menus?.map((menu, i) => {
                        return(
                            <>
                        {((menu.role === "both") || (menu.role === userRole)) ?
                         <Link
                            to={menu.link}
                            key={i}
                            className={` ${menu?.margin && ""
                                } group flex items-center text-md  gap-5 font-semibold p-2 hover:bg-blue-800 rounded-md`}
                        >

                            <div>{React.createElement(menu.icon, { size: "23" })}</div>
                            <h2
                                
                                className={`whitespace-pre duration-1000 ${!open && "opacity-0 translate-x-30 overflow-hidden"
                                    }`}
                            >
                                {menu.name}
                            </h2>
                            <h2
                                className={`${open && "hidden"
                                    } absolute left-48 bg-gray-900 font-semibold whitespace-pre text-gray-300 rounded-md drop-shadow-lg px-0 py-0 w-0 overflow-hidden group-hover:px-2 group-hover:py-1 group-hover:left-14 group-hover:duration-300 group-hover:w-fit  `}
                            >
                                {menu.name}
                            </h2>
                        </Link>:null}
                        </>     
                    )})}
                </div>
            </div>
        </section>
   
  )
}

export default Courses;
