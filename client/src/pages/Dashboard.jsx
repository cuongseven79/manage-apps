import React from 'react'
import { icAccount } from '../utils/assets'

function Post({
  avatar = "",
  accountName = "",
  accountTitle = "",
  dotIcon = "",
  description = "",
  image = "",
  iconAction = "",
  quatity = "",
  content = "",
}) {
  return (
    <div className='border w-10'>
      d
    </div>
  )
}

const Dashboard = () => {
  return (
    <div className='px-10 h-full flex justify-around bg-blue-100'>
      {Array(3).fill(
        <div className='bg-white w-80 h-96 m-6 rounded-[16px]'>
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
                <span className='text-[12px] font-bold'>Sam Guy</span>
                <span className='text-[10px] text-black/50'>@Sam Guy</span>
              </div>
            </div>
            <span className='flex items-center'>
              <img
                src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3270&q=80"
                alt=""
                width={40}
              />
            </span>
          </div>

          <div className=''>
            <span className=''>
              <img
                src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3270&q=80"
                alt=""
              />
            </span>

            <div className='border p-1 flex flex-row justify-between '>
              <div className=' flex'>
                <span className='flex items-center gap-2'>
                  <img
                    src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3270&q=80"
                    alt=""
                    width={40}
                  />
                  <p className='text-[12px]'>110</p>
                </span>
                <span className='flex items-center gap-2'>
                  <img
                    src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3270&q=80"
                    alt=""
                    width={40}
                  />
                  <p className='text-[12px]'>110</p>
                </span>
              </div>

              <span className='basis-1/12 '>
                <img
                  src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3270&q=80"
                  alt=""
                  width={40}
                />
              </span>
            </div>

          </div>
        </div>
      )}
    </div>
  )
}

export default Dashboard