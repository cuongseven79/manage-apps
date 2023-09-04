import React from 'react'
import { ButtonCreate } from '../PostDialog/CreatePost'
import SearchBar from '../SearchBar'

const DashBoardBreadcumb = () => {
    return (
        <div className='flex justify-between'>
            <SearchBar />
            <ButtonCreate />
        </div>
    )
}

export default DashBoardBreadcumb