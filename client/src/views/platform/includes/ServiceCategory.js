import React, {useState} from 'react'
import "../../../css/serviceCategory.css";
import Categories from './Categories';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import Slider from "react-slick";
import { cartCategories, categoryData } from './utils';
import FilterCategory from './FilterCategory';
import myImage from "../../../uploads/bg.jpeg"
import {Link } from 'react-router-dom'; 

const ServiceCategory = () => {
  const [filteredCards, setFilteredCards] = useState(categoryData);
  const [filteredCategory, setFilteredCategory] = useState(cartCategories);

  const filterCards = (buttonValue) => {
    console.log(buttonValue);
    const filteredCards = categoryData.filter((card) => card.category === buttonValue);
    setFilteredCards(filteredCards);
  };

  const handleFilterChange = (e) => {
    const buttonValue = e.target.value;
    filterCards(buttonValue);
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 7,
    slidesToScroll: 1,
    initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1
          }
        }
      ]
  };



   
  return (
    <div className='service-container'>
        <h2 className='service-title'>
                service category
        </h2>
        {/* <div className='category-card'> */}
        <div className='card'>
            <Slider {...settings}>
                {cartCategories.map((category,index) => {
              
                  return <Categories key={index}  icon={category.icon} title={category.title} category={category.category} handleFilterChange={handleFilterChange} bgColor={category.bgColor} />
                })
              }
            </Slider>
            </div>
        {/* </div> */}

     <div>
     <div className='featured-category'>featured category</div>
     <Link to={"#"} className='category-filter' style={{textDecoration:"none"}}>
 
 {
 
    filteredCards.map((cat)=>{
      return <FilterCategory name={cat.name} img={myImage}/>
    })
  }

</Link>
     </div>
    </div>
  )
}

export default ServiceCategory


