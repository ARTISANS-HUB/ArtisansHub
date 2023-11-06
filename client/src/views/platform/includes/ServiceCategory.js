import React, {useState} from 'react'
import "../../../css/serviceCategory.css";
import Categories from './Categories';

const ServiceCategory = () => {

    const [filter, setFilter] = useState("all");
  
    const filterImages = (images, filter) => {
      if (filter === "all") {
        return images;
      } else {
        return images.filter((image) => image.category === filter);
      }
    };
  
    const images = [
      { id: 1, category: "landscape" },
      { id: 2, category: "portrait" },
      { id: 3, category: "cityscape" },
    ];
  
    const filteredImages = filterImages(images, filter);
  return (
    <div className='service-container'>
        <h2 className='service-title'>
                service category
        </h2>
        <div className='categories-card'>
            <button className='categories-card-icon left'>left</button>
                <div className='categories-card-icon-slider'>

            {
                [1,2,3,4,5,6,7,8,9,10].map((item,index)=>{
                            return(
                                <div className="slider-card">
                                    <Categories/>
                                </div>
                            )
                        })
                    }

            </div>

     <button className='categories-card-icon right'>right</button>
      </div>

        <div>
         {/* <div>
           <button onClick={() => setFilter("all")}>All</button>
           <button onClick={() => setFilter("landscape")}>Landscape</button>
           <button onClick={() => setFilter("portrait")}>Portrait</button>
           <button onClick={() => setFilter("cityscape")}>Cityscape</button>
         </div>
         <div>
           {filteredImages.map((image) => (
             <img key={image.id} src={image.src} />
           ))}
         </div> */}
       </div>
    </div>
  )
}

export default ServiceCategory



// const ImageFilter = () => {
//     
  
//     return (
//       
//     );
//   };