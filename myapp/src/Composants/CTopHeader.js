import React from 'react'
{/* importation de composant bootstrap */}
import Carousel from 'react-bootstrap/Carousel';
{/* importation de nos images */}
import L1 from '../Images/1.jpg'
import L2 from '../Images/2.webp'
import L3 from '../Images/3.jpg'

{/* Composant CTopHeader */}
const CTopHeader = () => {
  return (
    <div>
      <Carousel>
      <Carousel.Item interval={1000}>
        <img
          className="d-block w-100"
          src={L1}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>go my code</h3>
          <p>hala hlila</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={500}>
        <img
          className="d-block w-100"
          src={L2}
          alt="Second slide"
        />
        <Carousel.Caption>
          <h3>ezzahra sport</h3>
          <p>win</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={L3}
          alt="Third slide"
        />
        <Carousel.Caption>
          <h3>Ahmed sport</h3>
          <p>
            Notre marque de sport.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>

    </div>
  )
}

export default CTopHeader
