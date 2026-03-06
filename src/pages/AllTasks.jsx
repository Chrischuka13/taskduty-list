import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const AllTasks = ({tasks, deleteTask}) => {

  return (
    <main>
      <section className='w-10/12 container mx-auto py-12'>
        <div className="flex justify-between items-center mb-6">
            <h1 className="text-3xl font-bold">My Tasks</h1>
            <Link to="/new-tasks" className="text-purple-500 font-semibold">+ Add New Task</Link>
        </div>

        {tasks.map((task) => (
            <div key={task.id} className="border border-[#B8B6B6] rounded-lg p-4 mb-4">
                <div className='flex justify-between items-center'>
                    <p>{task.tag}</p>
                    <div className='flex gap-3'>
                        <Link to={`/edit-task/${task.id}`} className="flex gap-1 border bg-purple-500 text-white px-4 py-2 rounded-md"><img src="images/clarity_note-edit-line.png" alt="" /> Edit</Link>
                        <div onClick={() => deleteTask(task.id)} className="flex gap-1 border border-purple-500 text-purple-500 px-4 py-2 rounded-md cursor-pointer"><img src="images/fluent_delete-24-regular.png" alt="" />Delete</div>
                    </div>
                </div>

                <hr className='border-[#B8B6B6] mt-4'/>

                <h2 className="text-3xl mt-3">{task.title}</h2>
                <p className="text-gray-600 mb-3">{task.description}</p>
            </div>
        ))}
      </section>
    </main>
  )
}

export default AllTasks