import React, { useState, useCallback, useEffect } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

import Button from './Button'


const HeroSlider = props => {

    // console.log(props)

    const data = props.data

    // timeout
    const timeOut = props.timeOut ? props.timeOut : 3000

    // slide index
    const  [activeSlide, setActiveSlide] = useState(0)

    // handle next slide
    const nextSlide = useCallback(
        () => {
            const index = activeSlide + 1 === data.length ? 0 : activeSlide + 1
            setActiveSlide(index)
        },
      [activeSlide, data],
    )
    
    // handle prev slide
    const prevSlide = () => {
        const index = activeSlide - 1 < 0  ? data.length - 1 : activeSlide - 1
        setActiveSlide(index)
    }

    // side effect slider
    useEffect(() => {
        // side effect 
        if(props.auto) {
            const slideAuto = setInterval(() => {
                nextSlide()
            }, timeOut)

            return () => {
                clearInterval(slideAuto)
            }
        }

    }, [nextSlide, timeOut, props])


    return (
        <div className="hero-slider">
            {
                data.map((item, index) => (
                    <HeroSliderItem key={index} item={item} active={index === activeSlide}/>
                ))
            }

            {
                props.control ? (
                    <div className='hero-slider__control'>
                        <div className="hero-slider__control__item" onClick={prevSlide}>
                            <i className='bx bx-chevron-left'></i>
                        </div>
                        <div className="hero-slider__control__item">
                            <div className="index">
                                {activeSlide + 1} / {data.length}
                            </div>
                        </div>
                        <div className="hero-slider__control__item" onClick={nextSlide}>
                            <i className='bx bx-chevron-right'></i>
                        </div>
                    </div>
                ) : null
            }
        </div>
    )
}
 

HeroSlider.propTypes = {    
    data: PropTypes.array.isRequired,
    control: PropTypes.bool,
    auto: PropTypes.bool,
    timeOut: PropTypes.number
}

const HeroSliderItem = ({ item, active }) => (
    <div className={`hero-slider__item ${active ? 'active' : ''}`}>
        <div className="hero-slider__item__info">
            <div className={`hero-slider__item__info__title color-${item.color}`}>
                <span>{item.title}</span>
            </div>
            <div className="hero-slider__item__info__description">
                <span>{item.description}</span>
            </div>
            <div className="hero-slider__item__info__btn">
                <Link to={item.path}>
                    <Button
                        backgroundColor={item.color}
                        icon="bx bx-cart"
                        animate={true}
                    >
                        Show detail
                    </Button>
                </Link>
            </div>
        </div>
        <div className="hero-slider__item__image">
            <div className={`shape bg-${item.color}`}></div>
            <img src={item.img}  alt="product img" />
        </div>
    </div>
)

export default HeroSlider