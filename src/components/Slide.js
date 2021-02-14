import React, { useState } from 'react'
import '../styles/Slide.css'

import sliderImage0 from '../images/desktop-image-hero-1.jpg'
import sliderImage1 from '../images/desktop-image-hero-2.jpg'
import sliderImage2 from '../images/desktop-image-hero-3.jpg'
import mobileSliderImage0 from '../images/mobile-image-hero-1.jpg'
import mobileSliderImage1 from '../images/mobile-image-hero-2.jpg'
import mobileSliderImage2 from '../images/mobile-image-hero-3.jpg'
import sliderNavLeft from '../images/icon-angle-left.svg'
import sliderNavRight from '../images/icon-angle-right.svg'
import shopNowArrow from '../images/icon-arrow.svg'


const Slide = (props) => {
  const [activeSlide, setActiveSlide] = useState(0)
  let trackChangeActiveSlide = activeSlide
  const slides =  
  [
    {
      header: "Discover innovative ways to decorate",
      paragraph: `We provide unmatched quality, comfort, and style for property owners across the country. 
      Our experts combine form and function in bringing your vision to life. Create a room in your own style with our collection and make your property a 
      reflection of you and what you love`
    },
    {
      header: 'We are available all across the globe',
      paragraph: `With stores all over the world, it's easy for you to find furniture for your home or place of business. 
      Locally, we’re in most major cities throughout the country. Find the branch nearest you using our
      store locator. Any questions? Don't hesitate to contact us today.`
    },
    {
      header: "Manufactured with the best materials",
      paragraph: `Our modern furniture store provide a high level of quality. Our company has invested in advanced technology 
      to ensure that every product is made as perfect and as consistent as possible. With three decades of 
      experience in this industry, we understand what customers want for their home and office.`
    }
  ]

  const handlePrevSlide = () => {
    if (activeSlide === 0) {
      return setActiveSlide(activeSlide + 2)
    } else {
      return setActiveSlide(activeSlide - 1)
    }
  }
  const handleNextSlide = () => {
    if (activeSlide !== 2) {
      return setActiveSlide(activeSlide + 1)
    } else {
      return setActiveSlide(activeSlide - 2)
    }
  }

  const handleImageMobile = () => {
    if (activeSlide === 0) {
      return mobileSliderImage0
    } 
    if (activeSlide === 1) {
      return mobileSliderImage1
    } 
    if (activeSlide === 2) {
      return mobileSliderImage2
    } 
  }

  const handleImage = () => {
    if (activeSlide === 0) {
      return sliderImage0
    } 
    if (activeSlide === 1) {
      return sliderImage1
    } 
    if (activeSlide === 2) {
      return sliderImage2
    } 
  }
  const [seconds, setSeconds] = useState(0);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setSeconds(seconds => seconds + 1)
    }, 1000);
    return () => clearInterval(interval);
  }, [])

  if (seconds >= 17) {
    setSeconds(seconds - 17)
    if ( seconds === 17 ) {
      setActiveSlide(activeSlide === 2 ? activeSlide - 2 : activeSlide + 1)
    }
  }

  return (
    <div className="slide">
      <img src={handleImage()} alt="img" className='image' />
      <img src={handleImageMobile()} alt="img" className='mobileImage' />

      <div className="content">
          {/* {seconds} seconds have elapsed */}
        <h1>
          {slides[activeSlide].header}
        </h1>
        <p className='paragraph'>
          {slides[activeSlide].paragraph}
        </p>
        <button>
          <span>Shop now</span>
          <img src={shopNowArrow} alt="arrow"/>
        </button>   
        <div className="sliderNav">
          <div className="sliderLeft" onClick={handlePrevSlide} >
            <img src={sliderNavLeft} alt="sliderNav" />
          </div>
          <div className="sliderRight" onClick={handleNextSlide}>
            <img src={sliderNavRight} alt="slider nav" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Slide
