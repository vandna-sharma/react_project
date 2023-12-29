import React from 'react'
import featured1 from '../../assets/images/featured1.webp'
import featured2 from '../../assets/images/featured2.webp'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import './featured-products.css'
const Card = (props) =>{
  return(
    <div className='col-md-4'>
    <div className='card border-1'>
    <img src={featured1} style={{height:400}}/>
      <div className='card-body'>
        <h5>{props.title}</h5>
        <p className='text-secondary'>{props.brand} </p>
        <div className='d-flex icons'>
        <FontAwesomeIcon icon={faStar} />
        <FontAwesomeIcon icon={faStar} />
        <FontAwesomeIcon icon={faStar} />
        <FontAwesomeIcon icon={faStar} />
        <FontAwesomeIcon icon={faStar} />
        <span style={{color:"black",paddingLeft:10}}>{props.sold}</span>
        </div>
        <p className='pt-4 text-success fw-5'>Today's Deal</p>
        <h3> &#8377;{props.price}<del className='dis-price'>&#8377;{props.disprice}</del></h3>
      
       

      </div>

    </div>

  </div>


  )
}
const FeaturedProducts = () => {
  return (
    <div className='container-fluid'>
      <div className='row'>
        <h1 className='text-center'>Featured Products</h1>
       <Card title="Jack Velvet 3 Seater Sofa in Green Colour " brand=" Adorn Homez" sold="(156 Sold)" price="26,733" disprice="30,240"/>
       <Card title="  Murdock Fabric 3 Seater Sofa in Grey Colour  " brand=" Adorn India " sold="(278 Sold)" price="35,874" disprice="28,987"/>
       <Card title=" Kiki 3 Seater Sofa in Sapling Green Colour " brand=" Sleepyhead " sold="(93 Sold)" price="18,987" disprice="12,561"/>
      </div>

    </div>
  )
}

export default FeaturedProducts