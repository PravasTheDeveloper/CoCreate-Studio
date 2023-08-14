import React, { useState } from 'react'
import { PiCodeBlockDuotone } from 'react-icons/pi';
import { BsPlay } from 'react-icons/bs';
import Avatar from 'react-avatar';

function EditorPage() {

    const [userNames, setuserNames] = useState([
        { username: "Pravas Chandra" },
        { username: "Rahul Mandal" },
        { username: "Tarak Hasan" }
    ])

    return (
        <>
            <div className='w-full h-screen bg-slate-700 select-none'>
                <div className='w-full h-[7%] bg-slate-800'>
                    <div className='w-full h-full flex justify-between mx-auto container text-white items-center'>
                        <div className='Logo__Section text-3xl flex justify-center items-center'>
                            <PiCodeBlockDuotone />
                            <div className='text-lg Logo__Text__Stlying'>
                                CoCreate Studio
                            </div>
                        </div>
                        <div className='UsersSection flex items-center'>
                            {userNames.slice(0, 3).map((data, index) => {
                                return (
                                    <div className='mr-3'>
                                        <Avatar name={data.username} size={40} round="100px" />
                                    </div>
                                )
                            })}
                            {
                                userNames.length > 3 ? "..." : null
                            }
                        </div>
                        <div className='Run Section text-3xl hover:text-rose-500 duration-200 cursor-pointer'>
                            <BsPlay />
                        </div>
                    </div>
                </div>
                <div className='w-full h-[93%]  container mx-auto py-10'>
                    <div className='w-full h-full border border-white'>

                    </div>
                </div>
            </div>
        </>
    )
}

export default EditorPage