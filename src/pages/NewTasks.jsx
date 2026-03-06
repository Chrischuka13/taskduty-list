import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

const NewTasks = ({addTask}) => {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [tag, setTag] = useState("Important");

    const navigate = useNavigate()

    const handleSubmit = () => {
    const newTask = {
      id: Date.now(),
      title,
      description,
      tag,
    };


    addTask(newTask);
    navigate("/all-tasks");
  };

  
  return (
    <main>
        <section className='w-10/12 container mx-auto py-10'>
            <div className=''>
                <div onClick={() => navigate(-1)} className='flex gap-4 items-center text-3xl md:text-5xl mb-12 cursor-pointer'><img src="/images/Vector back.png" alt="" />New Tasks</div>
                    <div className='relative'>
                        <label className='text-[#9C9C9C] text-2xl font-medium absolute -top-4 left-10'>Task Title</label>
                        <input value={title} onChange={(e) => setTitle(e.target.value)} type="text" placeholder='E.g Project Defense, Assignment...' className=' w-full border border-[#B8B6B6] rounded-md p-6 mb-8 px-10'/>
                    </div>
                    
                    <div className='relative'>
                        <label className='text-[#9C9C9C] text-2xl font-medium absolute -top-4 left-10'>Description</label>
                        <textarea value={description} onChange={(e) => setDescription(e.target.value)} placeholder='Briefly describe your task...' className='w-full border border-[#B8B6B6] rounded-md p-6 mb-8 px-10'/>
                    </div>
                    
                    <div className='relative'>
                        <label className='text-[#9C9C9C] text-2xl font-medium absolute -top-4 left-10'>Tags</label>
                        <select value={tag} onChange={(e) => setTag(e.target.value)} name="tags" id="tags" className=' w-full  border border-[#B8B6B6] rounded-md p-6 mb-8 px-10'>
                            <option>Urgent</option>
                            <option>Important</option>
                        </select>
                    </div>

                <button onClick={handleSubmit} className='w-full mb-6'>Done</button>
            </div>
        </section>
    </main>
  )
}

export default NewTasks