import React, { useContext, useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import NavBar from './NavBar'
import { AuthContext } from '../context/AuthContext'
import api from '../api/axios'

const images = [
    "images/Property 1=Frame 1.png",
    "images/Property 1=Frame 2.png",
    "images/Property 1=Frame 3.png",
]

const Hero = () => {
    const [index, setIndex] = useState(0)

    useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 6000);
    return () => clearInterval(interval);
    }, []);

  const {user, getAuthHeaders} = useContext(AuthContext)
  const [data, setData] = useState("null")
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState("")


  useEffect(()=>{
    const fetchProfile = async () => {
      try {
        const response = await api.get("/profile", 
          {headers: getAuthHeaders()}
        )
        setData(response.data.user);
      } catch (err) {
        console.error(err)
        console.log(err.response);
        setError(err.response?.data?.message || "Failed to load profile")
      }finally{
        setLoading(false)
      }
    }
    

    if (user?.token) {
      fetchProfile()
    }
  }, [user])

  console.log(user);
  

  if (loading) return <p>Loading profile...</p>
  if (error) return <p style={{ color: "red" }}>{error}</p>
    
  return (
    <section>
        <div className='w-10/12 container mx-auto py-12'>
            <h2 className='text-2xl mb-4'>Welcome, Mr {data?.username}</h2>
            <div className='lg:flex gap-20 '>
                <div className='lg:w-1/2'>
                    <h1 className='text-5xl mb-6 text-[#292929] text-balance font-semibold'>Manage your Tasks on <span className='text-[#974FD0]'>TaskDuty</span></h1>
                    <p className='text-2xl mb-6 text-[#737171] text-balance'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non tellus, sapien, morbi ante nunc euismod ac felis ac. Massa et, at platea tempus duis non eget. Hendrerit tortor fermentum bibendum mi nisl semper porttitor. Nec accumsan.</p>
                    <Link to='/profile/all-tasks'><div className='bg-[#974FD0] max-w-60 p-4 text-white font-medium flex justify-center rounded-lg text-2xl hover:bg-[#7d44ac]'>Go to My Tasks</div></Link>
                </div>
                <div className='lg:w-1/2'>
                    {/* <img src="images/Component 1.png" alt="" /> */}
                    <div className="relative w-full h-full overflow-hidden">{images.map((src, i) => (
                        <img key={i} src={src} className={`absolute inset-0 object-cover transition-opacity duration-3000 ${i === index ? 'opacity-100' : 'opacity-0'}`}/>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Hero