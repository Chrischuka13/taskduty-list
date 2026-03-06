import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const images = [
    "public/images/Property 1=Frame 1.png",
    "public/images/Property 1=Frame 2.png",
    "public/images/Property 1=Frame 3.png",
]

const Hero = () => {
    const [index, setIndex] = useState(0)

    useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 6000);
    return () => clearInterval(interval);
    }, []);
    
  return (
    <section>
        <div className='w-10/12 container mx-auto py-12'>
            <div className='lg:flex gap-20 '>
                <div className='lg:w-1/2'>
                    <h1 className='text-5xl mb-6 text-[#292929] text-balance'>Manage your Tasks on <span className='text-[#974FD0]'>TaskDuty</span></h1>
                    <p className='text-2xl mb-6 text-[#737171]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non tellus, sapien, morbi ante nunc euismod ac felis ac. Massa et, at platea tempus duis non eget. Hendrerit tortor fermentum bibendum mi nisl semper porttitor. Nec accumsan.</p>
                    <Link to='/all-tasks'><button>Go to My Tasks</button></Link>
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