import React from 'react'
import './Blogs.css'
import blog1 from '../../assets/images/blog1.jpg'
import blog2 from '../../assets/images/blog2.jpg'
import blog3 from '../../assets/images/blog3.jpg'
const BlogCard=(props)=>{
    return(
        <div className='col-md-4'>
            <div className='card blog'>
                <div className='card-body'>
                    <img src={props.img} className='blog-image'/>

                </div>

            </div>

            </div>
    )
}
const Blogs = () => {
  return (
    <div className='container-fluid'>
        <div className='row blog-row py-4 bg-light'>
            <h1 >Recent Blogs</h1>
           <BlogCard img={blog1}/>
           <BlogCard img={blog2}/>
           <BlogCard img={blog3}/>

        </div>
    </div>
  )
}

export default Blogs