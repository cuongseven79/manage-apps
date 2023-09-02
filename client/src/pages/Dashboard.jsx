import React, { useState } from 'react'
import icHeart from '../assets/icons/ic-heart.svg'
import icComment from '../assets/icons/ic-comment.svg'
import icBookMark from '../assets/icons/ic-bookmark.svg'
import icDot from '../assets/icons/ic-dot.svg'



const Dashboard = ({
  avatar,
  accountName,
  accountTitle,
  dotIcon,
  description,
  image,
  iconAction,
  quatity,
  content,
}) => {

  return (
    <div className=' px-10 flex justify-around bg-blue-100'>
      {Array(3).fill(
        <div className='bg-white w-80 h-auto m-6 rounded-[16px]'>
          <div className='flex justify-between p-2'>
            <div className='flex gap-2'>
              <span>
                <img
                  src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3270&q=80"
                  alt=""
                  width={40}
                  height={40}
                  className='rounded-[50%] h-full'
                />
              </span>
              <div className='flex flex-col '>
                <span className='text-[14px] font-bold'>Sam Guy</span>
                <span className='text-[14px] text-black/50'>@Sam Guy</span>
              </div>
            </div>
            <span className='flex items-center'>
              <img
                src={icDot}
                alt="icon-dot"
              />
            </span>
          </div>
          <p className='text-[14px] font-[Inter] font-[400] p-2'>
            Lorem ipsum dolor sit ame #uxui #userinterface #design #webinspirations #userexperience #figma #ux #ui
          </p>
          <div className='overflow-hidden'>
            <span className=''>
              <img
                src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3270&q=80"
                alt=""
              />
            </span>

            <div className='border border-gray-100 p-3 flex flex-row  justify-between'>
              <div className='basis-1/2 flex justify-between'>
                <span className='flex items-center gap-2 text-black/50'>
                  <img
                    src={icHeart}
                    alt="icon-heart"
                  />
                  <p className='text-[12px]'>110</p>
                </span>
                <span className='flex items-center gap-2 text-black/50'>
                  <img
                    src={icComment}
                    alt="icon"
                  />
                  <p className='text-[12px]'>32</p>
                </span>
              </div>

              <span className=''>
                <img
                  src={icBookMark}
                  alt="bookmark"
                />
              </span>
            </div>
            <div className='p-2 pb-14'>
              <div className='flex'>
                <span className='text-[14px] font-bold'>Sam Guy</span>
                <span className='text-[14px] text-black/50'>@Sam Guy</span>
              </div>
              <p className='text-[14px] font-[Inter] font-[400] '>Travel and you will you will and will and   born for a. </p>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Dashboard