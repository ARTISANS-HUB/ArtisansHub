import React, {useState} from 'react'
import "../../../css/serviceCategory.css";
import Categories from './Categories';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import Slider from "react-slick";
import { cartCategories, categoryData } from './utils';
import FilterCategory from './FilterCategory';

const ServiceCategory = () => {
  const [cards,setCards]=useState(categoryData)

  const [filterOption,setFilterOption]= useState(["all","cleaning"])
  const [filter,setFilter] = useState("all")

 const filterCards=()=>{
  const filteredCards = cards.filter((card)=>{
    if(filter ==="all"){
      return true
    }else{
      return card.category === filter
    }
  })
console.log(filteredCards)
  setCards(filteredCards)
 } 

 const handleFilterChange = (e)=>{
  const selectedFilter = e.target.value;
  console.log(selectedFilter)
  setFilter(selectedFilter)
 }



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
            slidesToShow: 1,
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
        <div className='category-card'>
        <div className='card'>
            <Slider {...settings}>
                {cartCategories.map((category,index) => {
                  return <Categories key={index} onClick={handleFilterChange} icon={category.icon} title={category.title} />
                })
              }
            </Slider>
            </div>
        </div>

       <div className='category-filter'>
       {
          categoryData.map((cat)=>{
            return <FilterCategory name={cat.name} description={cat.description}/>
          })
        }
       </div>
    </div>
  )
}

export default ServiceCategory


