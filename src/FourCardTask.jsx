import React from 'react'
import {Card, Col, Row} from 'react-bootstrap'

function FourCardTask() {
    const freemovietitle=[{image:"https://wallpapercave.com/dwp1x/wp2751453.jpg",caption:"MOVIES",color:'red'},
    {image:"https://hips.hearstapps.com/hmg-prod/images/bridgerton-108-unit-02383r-1614635578.jpg?crop=0.536xw:1.00xh;0.340xw,0&resize=980:*",caption:"TV"},
    {image:"https://i.ytimg.com/vi/WvTBdV1E_iE/maxresdefault.jpg",caption:"COMEDY"},
    {image:"https://blogassets.airtel.in/wp-content/uploads/2023/02/4-5.jpg",caption:"HORROR"},
    {image:"https://pic-bstarstatic.akamaized.net/ugc/9392afb206fdb1b64bb3b08479752ed48b8bcafd.jpg@720w_405h_1e_1c_90q",caption:"ACTION"},
    {image:"https://netstorage-tuko.akamaized.net/images/62986d234ef17429.jpg?imwidth=720",caption:"ADVENTURE"},
    {image:"https://imgnew.outlookindia.com/uploadimage/library/16_9/16_9_5/IMAGE_1678688849.webp",caption:"ANIME"},
    {image:"https://cdn.vox-cdn.com/thumbor/mJteQ7EdwDLqJE7ewoSZVTPRgNc=/0x0:5122x4094/920x613/filters:focal(2403x1625:3221x2443):format(webp)/cdn.vox-cdn.com/uploads/chorus_image/image/51416197/GettyImages-162725081.0.jpg",caption:"CLASSIC"},
    //{image:"https://static.toiimg.com/thumb/msid-30555556,imgsize-51119,width-400,resizemode-4/30555556.jpg",caption:"ROMANTIC"},
   ]; 
  return (
    <div>
        <Row xs={1} md={2} className="g-4">
      {Array.from({ length: 1 }).map((_, idx) => (
        <Col>
        {freemovietitle.map((i)=>
          <Card>
            <Card.Img variant="top" src={i.image} />
            <Card.Body>
              <Card.Title>{i.caption}</Card.Title>
              <Card.Text>
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </Card.Text>
            </Card.Body>
          </Card>
        )}
        </Col>
      ))}
    </Row>


    </div>
  )
}

export default FourCardTask