import React from "react"

import Carousel from "react-bootstrap/Carousel"
import Slide1 from "../components/slide1"
import Slide2 from "../components/slide2"
import Slide3 from "../components/slide3"

const MainSlider = () => (
  <Carousel>
    <Carousel.Item>
      <Slide1 className="d-block w-100 my-auto" />
      <Carousel.Caption
        style={{
          verticalAlign: `middle`,
          top: `0`,
          margin: `0 auto`,
        }}
      >
        <div
          style={{
            margin: `auto`,
            margin: `0`,
            position: `absolute`,
            top: `50%`,
            left: `30%`,
            MsTransform: `translateY(-50%)`,
            transform: `translateY(-50%)`,
            backgroundColor: `red`,
          }}
        >
          <h3>CREATIVIDAD</h3>
        </div>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <Slide2 className="d-block w-100 my-auto" />
      <Carousel.Caption
        style={{
          verticalAlign: `middle`,
          top: `0`,
          margin: `0 auto`,
        }}
      >
        <div
          style={{
            margin: `auto`,
            margin: `0`,
            position: `absolute`,
            top: `50%`,
            left: `30%`,
            MsTransform: `translateY(-50%)`,
            transform: `translateY(-50%)`,
            backgroundColor: `red`,
          }}
        >
          <h3>TECNOLOGÍA</h3>
        </div>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <Slide3 className="d-block w-100 my-auto" />
      <Carousel.Caption
        style={{
          verticalAlign: `middle`,
          top: `0`,
          margin: `0 auto`,
        }}
      >
        <div
          style={{
            margin: `auto`,
            position: `absolute`,
            top: `50%`,
            left: `30%`,
            MsTransform: `translateY(-50%)`,
            transform: `translateY(-50%)`,
            backgroundColor: `red`,
          }}
        >
          <h3>INVESTIGACIÓN</h3>
        </div>
      </Carousel.Caption>
    </Carousel.Item>
  </Carousel>
)

export default MainSlider
