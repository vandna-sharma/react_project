import React from 'react'
import featured1 from '../../assets/images/featured1.webp'
import featured2 from '../../assets/images/featured2.webp'
import featured3 from '../../assets/images/featured3.webp'
import featured4 from '../../assets/images/featured5.webp'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import './featured-products.css'
const Card = (props) =>{
  return(
    <div className='col-md-4 col-lg-3 col-sm-6'>
    <div className='card border-1'>
    <img src={props.img} style={{height:350}}/>
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
        <h1 className='text-center pb-4'>Featured Products</h1>
       <Card title="Jack Velvet 3 Seater Sofa in Green Colour " brand=" Adorn Homez" sold="(156 Sold)" price="26,733" disprice="32,240" img={featured1}/>
       <Card title="  Murdock Fabric 3 Seater Sofa in Grey Colour  " brand=" Adorn India " sold="(278 Sold)" price="35,874" disprice="45,987" img={featured2}/>
       <Card title=" Kiki 3 Seater Sofa in Sapling Green Colour " brand=" Sleepyhead " sold="(93 Sold)" price="18,987" disprice="21,561" img={featured3}/>
       <Card title=" Miranda Fabric 3 Seater Sofa In Navy Blue Colour " brand="  Woodsworth from Pepperfry  " sold="(354 Sold)" price="34,999" disprice="56,999" img={featured4}/>
      </div>

    </div>
  )
}

export default FeaturedProducts