import React, { useEffect, useState } from 'react'
import { Col, Row } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import './Hotel.css'
import { Link } from 'react-router-dom';
import { getHotel } from './actions/hotelAction';
import { useDispatch, useSelector } from 'react-redux';



function Hotel() {

    const dispatch= useDispatch()

    useEffect(() => {
        dispatch(getHotel)
    }, [])

  const {hotelList}=useSelector(state=>state.reducer1)
  console.log(hotelList);

    return (
       

        <Row className='p-5 container-fluid'>
            {
                hotelList.map(rest => (
                    <Col id="c1" className='p-2' lg={4} md={6}>
                        <Link style={{ textDecoration: 'none', color: 'maroon' }} to={`/singleview/${rest.id}`}>
                            <Card className='ms-5 light' style={{ width: '400px', height: '400px' }}>
                                <Card.Img variant="top" style={{ width: '399px', height: '250px' }} src={rest.photograph} />
                                <Card.Body>
                                    <Card.Title className='text-center'>{rest.name}</Card.Title>
                                    <Card.Text className='text-center'>
                                        {rest.address}
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Link>
                    </Col>
                ))
            }
        </Row>
    )
}

export default Hotel