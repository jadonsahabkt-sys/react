import React from 'react'
import { useParams } from 'react-router-dom'

const CoursesDetail = () => {
  
    const params=useParams()
    console.log(params.coursesId);

  return (
    <div>
             <h1 className='absolute text-3xl font-extrabold top-1/2 left-1/2 capitalize'>{params.coursesId
} Courses Details Page</h1>
    </div>
  )
}

export default CoursesDetail
