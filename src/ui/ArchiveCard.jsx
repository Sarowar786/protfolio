import React from 'react'
import { FaRegFolder } from 'react-icons/fa'
import { RxOpenInNewWindow } from 'react-icons/rx'

export default function ArchiveCard({ project }) {
    return (
        <a href={project?.link} target='blank'>
            <div className='w-full h-80 bg-textBg rounded-lg  p-8 flex flex-col justify-center gap-6 group '>
                <div className='flex justify-between items-center'>
                    <FaRegFolder className='text-4xl text-designColor'/>
                    <RxOpenInNewWindow className='hover:text-designColor text-xl duration-200'/>
                </div>
                <div>
                    <h2 className='text-xl font-bold tracking-wide group-hover:text-designColor duration-200 '>{project?.title}</h2>
                    <p> {project?.description} </p>
                </div>
                <ul className='flex justify-between items-center text-xs md:text-sm text-darkText'>
                    {project?.listItem.map((item)=>(
                        <li key={item}>{item}</li>
                    ))}
                </ul>
            </div>
        </a>
    )
}
