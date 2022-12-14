import {React,useState,useEffect} from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import Card from '../Card/Card'
import Sidenav from '../Layout/Sidenav'
import { Link } from 'react-router-dom';
import { useAuth } from '../../Auth/auth';
import Header from '../Header'
import { InfinitySpin } from 'react-loader-spinner'
import toast from 'react-hot-toast'

function Dashboard() {
    const auth = useAuth()
    const [token,setToken] = useState(auth.token)
    const Navigate = useNavigate()
    const backendServer = `${process.env.REACT_APP_SERVER}/user/courses`
    const [course,setCourse] = useState([])
    const [loader,setloader] = useState(true)


    useEffect(()=>{
        axios.get(backendServer,{
            headers: {
              'Authorization': token
            }
          }).then(res=>{
            // console.log(res)
            setloader(false)
            if(res.data){
                setCourse(res.data)
            }
            // console.log(res.data) 
            }).catch(err=>{
                setloader(false)
                toast.error(err.message);
            })
        },[])


        const Purchase = (item) => {
            // e.preventdefault()
            const id = item._id
            const publish = item.published
            console.log(publish)
            Navigate(`/course/${id}`)
            Navigate(`/course/${id}`,{state:{Publish:publish,item:item}})
            // console.log({id},"Clicked")
        }

    return (
        <div className='relative'>
            <div className='sticky top-0 '>
                <Header />
                </div>
        <aside className="flex flex-row">
            <div className='flex flex-col w-full'>
            <h1 className='mt-4 select-none px-6 capitalize text-4xl text-black font-semibold py-6 mx-auto'>
                            my courses
                        </h1>
                        <hr className="w-3/5 mx-auto h-2 mb-5" />
                    
                        {loader?
                            <div className="mx-auto">
                                <InfinitySpin 
                                width='200'
                                color="#4fa94d"
                                />
                            </div>:
                            <div className="flex grid-flow-col justify-items-center ml-6 mr-5">
                                <div className="mx-auto grid md:grid-cols-2 lg:grid-cols-3 w-full py-6">
                                    {course.map((item,key) =>{
                                        
                                        return(
                                            <Card item={item} key={key} Button="Open" onPublish={Purchase}/>
                                        )
                                    })}
                                </div>
                            </div> 
                        }

                </div>
            </aside>
        </div>
    )
}

export default Dashboard;