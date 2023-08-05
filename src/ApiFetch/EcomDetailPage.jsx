import React, { useContext, useEffect, useState } from 'react'
import { Card, Carousel, Col, Container, Row } from 'react-bootstrap'
import { newContext } from './EcomApp'
import {useParams} from 'react-router-dom'
import { BsStar, BsStarFill } from 'react-icons/bs'

function EcomDetailPage() {
  const [value]=useContext(newContext)
  console.log("value:"+value)
  let {id}=useParams();
  console.log("id:"+id)
    
    // console.log(value)
    // const [details, setDetails] = useState([])
    // const product=value.find((item)=>item.id === id)
    // console.log("product:"+product)

    const product=value.filter((data)=>data.id == id)
    console.log("p:"+product)
  return (
    <section className="product-details">
        <Container>
        <Carousel>
        {product.map((i,index)=>{
    return(
      <Carousel.Item key={index} style={{display:'flex'}}>
        

          <Card >
        <Card.Img variant="top" src={i.images[0]}/>
       </Card>
       <Card >
        <Card.Img variant="top" src={i.images[1]}/>
       </Card>
       <Card >
        <Card.Img variant="top" src={i.images[2]}/>
       </Card><Card >
        <Card.Img variant="top" src={i.images[3]}/>
       </Card>
       <Card >
        <Card.Img variant="top" src={i.images[4]}/>
       </Card>
       
       

        </Carousel.Item>
        )

      }
      )}
        </Carousel>
        
            <Col md={12}>
            {product&&product.map((i)=>{
                return(
                    <Col md={12} className='description'>
                        <p className="h4">{i.title}</p>
                        <p className="lead">{i.description}</p>
                        <p className="h6"> ₹{i.price}  <span className='offer'>{i.discountPercentage}% off</span>
                        <span className='rating-span'>Rating:{i.rating} <BsStarFill/></span>
                        <span className="stock-span">Stock:{i.stock}</span>
                        </p> <br/>
                        <p className="h6">Details</p>
                        <span >Brand:   {i.brand}</span><br/>
                        <span>Category: {i.category}</span><br/>


                        <div className="btn-div">
                        <button className="buy-now">Buy Now</button>
                        <button className="add-to-cart">Add to Cart</button>
                        </div>

                        

                        


                

            </Col>
 )
            })} 
            </Col>
            
   
        </Container>
    </section>
  )
}

export default EcomDetailPage