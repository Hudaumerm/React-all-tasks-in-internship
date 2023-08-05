import React from 'react'
import { Carousel } from 'react-bootstrap'
import './CarousalTask1.css'


function CarousalTask1(){
    const slideimage={Flower1:"https://hips.hearstapps.com/hmg-prod/images/flower-meanings-pink-tulips-1671510494.jpg",Flower2:"https://cdn.firstcry.com/education/2022/12/12101916/Flower-Names-In-English-For-Kids.jpg",Flower3:"https://www.gardeners.com/globalassets/articles/gardening/2023content/8078-chive-flowers-edible.jpg"}

    return(
        <div className='carosel-items'>
            <Carousel  style={{marginLeft:'250px',marginTop:'70px',width:'1000px',height:'300px'}} >
      <Carousel.Item  style={{boxShadow:'10px 10px'}}>
        <img style={{width:'1000px',height:'568px'}}
          className="d-block w-100"
          src={slideimage.Flower1}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3 className='headings'>Red Tulips</h3>
          <p className='para'>This is beautiful red tulips</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img style={{width:'1000px',height:'568px'}}
          className="d-block w-100"
          src={slideimage.Flower2}
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3 className='headings'>Roses</h3>
          <p className='para'>Beautiful multicolour roses are here</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img style={{width:'1000px',height:'568px'}}
          className="d-block w-100"
          src={slideimage.Flower3}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3 className='headings'>Lavender flowers</h3>
          <p className='para'>Beauty meets lavenders</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
        </div>

    )
}

export default CarousalTask1