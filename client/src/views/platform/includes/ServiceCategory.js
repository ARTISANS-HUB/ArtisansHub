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
  // const [filteredCards, setFilteredCards] = useState(categoryData);
  const [filter, setFilter] = useState('');
  const [filteredCategory, setFilteredCategory] = useState(cartCategories);
  const [category, setCategory] = useState([])




  //fetch all artisans
  const [artisans, setArtisans] = useState([])

  useEffect(() => {
    try {
      api_connect.get("/auth/fetch-artisans")
      .then((response) => {
        if (response.status === 200) {
          setArtisans(response.data)
          console.log(artisans);
     
        } else if (response.data.statusCode === 501) {
          setArtisans([])
        }
      }).catch((error) => {
        // alert("not connected to server")
        console.log(error) 
      })
    } catch (error) {
      // alert("not connected ")
      
    }
  },[])
  // console.log(artisans);


    //fetch all categories type

    // useEffect(() => {
    //   try {
    //     api_connect.get("/auth/fetch-services-category-platform-all")
    //     .then((response) => {
    //       if (response.status === 200) {
    //         setCategory(response.data)
    //         console.log(category + " category");
            
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

    // console.log(category);

    const [filteredCards, setFilteredCards] = useState(artisans);

    const filterCards = (buttonValue) => {
      console.log(buttonValue);
      const filteredCards = artisans.filter((card) => card.type === buttonValue);
      setFilteredCards(filteredCards);
    };
  
    const handleFilterChange = (e) => {
      const buttonValue = e.target.value;
      filterCards(buttonValue);
    };
  
    const handleShowAll = () => {
      setFilter('');
      setFilteredCards(artisans);
    };










  const settings = {
    dots: false,
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
                {cartCategories.map((cat,index) => {
                  return <Categories key={index}  icon={cat.icon} title={cat.title} cat={cat.type} handleFilterChange={handleFilterChange} bgColor={cat.bgColor} />
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
                return <FilterCategory name={cat.type} img={myImage} link={cat.link}/>
              })
            }

    </Link>
       
 
     </div>
    </div>
  )
}

export default ServiceCategory


