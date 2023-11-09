import React, {useEffect, useState} from 'react'
import "../../../css/serviceCategory.css";
import Categories from './Categories';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import Slider from "react-slick";
import { cartCategories, categoryData } from './utils';
import FilterCategory from './FilterCategory';
import myImage from "../../../uploads/bg.jpeg"
import {Link } from 'react-router-dom'; 
import { Api_connect_server } from '../../../APIs/Api_connect_server';

const api_connect = Api_connect_server();

const ServiceCategory = () => {
  const [filteredCards, setFilteredCards] = useState(categoryData);
  const [filter, setFilter] = useState('');
  const [filteredCategory, setFilteredCategory] = useState(cartCategories);
  const [category, setCategory] = useState([])



  useEffect(() => {
    try {
      api_connect.get("/auth/fetch-services-platform-all")
      .then((response) => {
        if (response.status === 200) {
          const categories = response.data.map(item => item.type);
          setCategory(categories);
          console.log(categories);
        } else if (response.data.statusCode === 501) {
          setCategory([])
        }
      }).catch((error) => {
        console.log(error);
      })
    } catch (error) {
      console.log(error);
    }
  }, []);

  console.log(category);

  

  const filterCards = (buttonValue) => {
    console.log(buttonValue);
    const filteredCards = categoryData.filter((card) => card.category === buttonValue);
    setFilteredCards(filteredCards);
  };

  const handleFilterChange = (e) => {
    const buttonValue = e.target.value;
    filterCards(buttonValue);
  };

  const handleShowAll = () => {
    setFilter('');
    setFilteredCards(categoryData);
  };


  // useEffect(() => {
  //   try {
  //     api_connect.get("/auth/fetch-services-platform-all")
  //     .then((response) => {
  //       if (response.status === 200) {
  //         setCategory(response.data)
          
  //       } else if (response.data.statusCode === 501) {
  //         setCategory([])
  //       }
  //     }).catch((error) => {
  //       // alert("not connected to server")
  //       console.log(error) 
  //     })
  //   } catch (error) {
  //     // alert("not connected ")
      
  //   }
  // },[])



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
                {category.map((cat,index) => {
              
                  return <Categories key={index}  icon={cat.icon} title={cat.title} cat={cat} handleFilterChange={handleFilterChange} bgColor={category.bgColor} />
                })
              }
            </Slider>
            </div>
        {/* </div> */}

     <div>
     <div className='featured-category'>
        <div className='featured-category-title'>featured category</div>
        <Link to={"#"} style={{textDecoration:"none"}} onClick={handleShowAll}>See All</Link>
     </div>


     <Link to={"#"}  className='category-filter' style={{textDecoration:"none"}}>
          {
          
              filteredCards.map((cat)=>{
                return <FilterCategory name={cat.category} img={myImage} link={cat.link}/>
              })
            }

    </Link>
     </div>
    </div>
  )
}

export default ServiceCategory


