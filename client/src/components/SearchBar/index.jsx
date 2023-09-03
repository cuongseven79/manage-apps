import React from 'react'
import icSearch from "../../assets/icons/ic-search.svg"

const SearchBar = ({ onClick, onChange }) => {

    return (
        <div className=''>
            <div className='relative gap-6 flex justify-around items-center'>
                <span className='absolute left-2'>
                    <img src={icSearch} alt="" />
                </span>
                <input
                    type="text"
                    placeholder='Search here..'
                    className='outline-none p-3 pl-11 w-full rounded-[10px] border-[1px] border-[#000]'
                    onChange={onChange}
                />
                <button type="button" className='hover:bg-blue-700 bg-[#2374E1] rounded-[10px] p-3 px-8 text-white'>Filter</button>
            </div>
        </div>
    )
}

export default SearchBar