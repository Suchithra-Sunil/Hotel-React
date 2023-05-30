import React, { useEffect, useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import { useParams } from 'react-router-dom'
import Card from 'react-bootstrap/Card';
import Attractions from './Attractions';
import Review from './Review';
import { useSelector } from 'react-redux';



function Singleview() {

  //obj create for useParams
  const params = useParams()
  console.log(params.id);

  const {hotelList}=useSelector(state=>state.reducer1)

  const singlehotel = hotelList.find(i => i.id == params.id);
  console.log(singlehotel);


  return (
    <div>
      {
        singlehotel ?
          (<Row>
            <Col lg={6} md={6}>
              <img className='container p-5' style={{ height: '600px', width: '750px' }}
                src={singlehotel.photograph}
              />
            </Col>
            <Col lg={6} md={6} className=''>

              <Card className='mt-5' style={{ width: '700px' }}>
                <Card.Body >
                  <Card.Title className='text-primary'><strong>{singlehotel.name}</strong></Card.Title>
                  <Card.Text className='mt-2'>
                    {singlehotel.address}
                  </Card.Text>
                  <Card.Text>{singlehotel.phone}
                  </Card.Text>
                  <p>{singlehotel.description}</p>
                </Card.Body>
              </Card>

              <div className='mt-1 ms-3' style={{ width: '650px' }}>
                <h4><strong>AMENITIES</strong></h4>
                <p> *{singlehotel.amenities.first} &nbsp;&nbsp;&nbsp;&nbsp;
                    *{singlehotel.amenities.sec} &nbsp;&nbsp;&nbsp;&nbsp;
                    *{singlehotel.amenities.thi} &nbsp;&nbsp;&nbsp;&nbsp;
                    *{singlehotel.amenities.fou} &nbsp;&nbsp;&nbsp;&nbsp; <br />
                    *{singlehotel.amenities.fiv} &nbsp;&nbsp;&nbsp;&nbsp;
                    *{singlehotel.amenities.six}</p>
              </div>

              <div>
                <Attractions  mainspots={singlehotel.attractions}/>
                {/* <Rooms  rooms={singlehotel.room_types}/> */}
              </div>
              <Review reviewList={singlehotel.reviews}/>

            </Col>
          </Row>) : ""
      }
    </div>
  )
}

export default Singleview