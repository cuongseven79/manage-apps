import React from 'react'
import icHeart from '../../assets/icons/ic-heart.svg'
import icComment from '../../assets/icons/ic-comment.svg'
import icBookMark from '../../assets/icons/ic-bookmark.svg'
import icDot from '../../assets/icons/ic-dot.svg'

const Dashboard = () => {

  const items = Array(99).fill(
    {
      avatarPath: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3270&q=80",
      accountName: "Sam Guy",
      accountTitle: "@Sam Guy",
      description: "Lorem ipsum dolor sit ame #uxui #userinterface #design #webinspirations #userexperience #figma #ux #ui",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3270&q=80",
      heartQuatity: "110",
      commentQuatity: "32",
      content: "Travel and you will you will and will and born for a.",
    }
  )
  return (
    <div className='flex flex-wrap justify-evenly overflow-y-auto h-full '>
      {items && items.map((item, index) => (
        <div key={index} className='bg-white w-80  m-6 rounded-[16px] '>
          <div className='flex justify-between p-2'>
            <div className='flex gap-2'>
              {item.avatarPath &&
                <span>
                  <img
                    src={item.avatarPath}
                    alt=""
                    width={40}
                    height={40}
                    className='rounded-[50%] h-full object-cover'
                  />
                </span>
              }
              <div className='flex flex-col '>
                <span className='text-[14px] font-bold'>{item.accountName}</span>
                <span className='text-[14px] text-black/50'>{item.accountTitle}</span>
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
            {item.description}
          </p>
          <div className='overflow-hidden'>
            <span className=''>
              <img
                src={item.image}
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
                  <p className='text-[12px]'>{item.heartQuatity}</p>
                </span>
                <span className='flex items-center gap-2 text-black/50'>
                  <img
                    src={icComment}
                    alt="icon"
                  />
                  <p className='text-[12px]'>{item.commentQuatity}</p>
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
                <span className='text-[14px] font-bold'>{item.accountName}</span>
                <span className='text-[14px] text-black/50'>{item.accountTitle}</span>
              </div>
              <p className='text-[14px] font-[Inter] font-[400] '>{item.content}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Dashboard