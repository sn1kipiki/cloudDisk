import React from 'react'
import more from './assets/more.svg'
import img from './assets/image.svg'
import "./styles.scss"
function FileItem
({file}) {
  return (
    <div className='fileItem'>
        <img className='fileItem__img' src={img} />
        <p className='fileItem__name'>{file.name}</p>
        <p className='fileItem__date'>{file.date.slice(0,10)}</p>
        <p className='fileItem__size'>{file.size}</p>
        <button className='fileItem__more'><img className='fileItem__more-img' src={more} /></button>
    </div>
  )
}

export default FileItem