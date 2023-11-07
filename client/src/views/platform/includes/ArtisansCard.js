import React from 'react'
import ArtisanCard from './ArtisanCard'
import "../../../css/artisansCard.css";
import { artisanData } from './utils';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const ArtisansCard = () => {

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
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
    <>
      <h2 className='artisans-card-header'>
            Artisans
        </h2>
    <div className='artisans-card-container'>
    {/* <h2 className='artisans-card-header'>
            Artisans
        </h2> */}
        <div className='artisans-card-bottom'>

       <div className='artisans-card-list'>
                {/* <Slider {...settings}> */}

                        {
                                artisanData.map((artisan) => 
                                        <ArtisanCard
                                            key={artisan.name}
                                            name={artisan.name}
                                            description={artisan.description}
                                            link={artisan.link}
                                            img={artisan.img}
                                        />
                                    )
                                
                            }
                {/* </Slider> */}
       </div>
        </div>

    </div>
    </>
  )
}

export default ArtisansCard