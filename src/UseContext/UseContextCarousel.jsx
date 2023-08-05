import React, { useContext } from 'react'
import { Carousel } from 'react-bootstrap'
import { userContext } from './App1'

function UseContextCarousel() {
    const {carouselData}=useContext(userContext);
  return (
    <div style={{width:'100%'}}>
           <Carousel >
            {carouselData.map((data)=>{
                return(
            
            
        <Carousel.Item>
          <img style={{height:"700px"}}
            className="d-block w-100"
            src={data.img}
            alt="First slide"
          />
        </Carousel.Item>
            )})}
      </Carousel>
    </div>
  )
}

export default UseContextCarousel