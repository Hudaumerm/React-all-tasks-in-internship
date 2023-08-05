import React from 'react'
import {
    MDBCarousel,
    MDBCarouselItem,
    MDBCard,
    MDBCardBody,
   // MDBCardTitle,
    MDBCardText,
    MDBCardImage
  } from 'mdb-react-ui-kit'
  
function CarousalCardTask1() {
    const details=[{image:"https://thumbs.dreamstime.com/b/smiling-female-doctor-holding-medical-records-lab-coat-her-office-clipboard-looking-camera-56673035.jpg",desc:"A psychiatrist is a medical doctor (an M.D. or D.O.) who specializes in mental health, including substance use disorders. Psychiatrists are qualified to assess both the mental and physical aspects of psychological problems.",job:"Psychologist"},{image:"https://media.istockphoto.com/id/1390000431/photo/shot-of-a-mature-doctor-using-a-digital-tablet-in-a-modern-hospital.jpg?b=1&s=170667a&w=0&k=20&c=Jxhk_KZSo9oSZ01Nv8TxjCKKEVZQJFVWICZb64AEIMQ=",desc:"A psychiatrist is a medical doctor (an M.D. or D.O.) who specializes in mental health, including substance use disorders. Psychiatrists are qualified to assess both the mental and physical aspects of psychological problems.",job:"Doctor,MBBS,MD"},{image:"https://media.istockphoto.com/id/1189304032/photo/doctor-holding-digital-tablet-at-meeting-room.jpg?s=612x612&w=0&k=20&c=RtQn8w_vhzGYbflSa1B5ea9Ji70O8wHpSgGBSh0anUg=",desc:"A psychiatrist is a medical doctor (an M.D. or D.O.) who specializes in mental health, including substance use disorders. Psychiatrists are qualified to assess both the mental and physical aspects of psychological problems.",job:"Gynocologist"}]
  return (
    <div>
        <MDBCarousel showControls showIndicators>
            {details.map((data)=>
            {
              return(
            <MDBCarouselItem>
            <MDBCard>
            <MDBCardImage src={data.image} position='top' alt='...' />
            <MDBCardBody>
              <MDBCardText>
                <p>{data.desc}</p>
                <p>{data.job}</p>
                </MDBCardText>
            </MDBCardBody>
          </MDBCard>
          </MDBCarouselItem>
            )})}
      
    </MDBCarousel>


    </div>
  )
}

export default CarousalCardTask1