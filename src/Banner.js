import React from 'react'
import Carousel from 'react-bootstrap/Carousel';

function Banner() {
  return (
    <div>
        {/* <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100" style={{height:'600px'}}
                        src="/banner3.jpg"
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h1 className='text-white' style={{marginBottom:'200px',color:''}}><strong>ENJOY A LUXURY <br></br>  EXPERIENCE</strong></h1>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100" style={{height:'600px'}}
                        src="/banner1.jpg"
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h3 className='text-white' style={{marginBottom:'180px',color:''}}><strong>ENJOY A LUXURY <br></br>  EXPERIENCE</strong></h3>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel> */}

        <div className='bg-white text-black'>
            <h3 className='text-center mt-3'><strong>The Most Luxurious Hotels In Town!</strong></h3>
        </div>    
        </div> 
  )
}

export default Banner