import PropTypes from 'prop-types'
import Slick from 'react-slick'
import useResize from 'use-resizing'

import Arrow from './components/Arrow'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import arrowLeft from '../images/arrow-left.svg'
import arrowRight from '../images/arrow-right.svg'

const HeroSlider = ({items, settings, instance}) => {
  const paddingLeftToSlider = 561
  const widthSliderItem = 288
  const screenSize = useResize()
  const defaultSettings = {
    prevArrow: <Arrow direction="previous" arrowImage={arrowLeft} />,
    nextArrow: <Arrow direction="next" arrowImage={arrowRight} />,
    arrows: true,
    // this is an operation for dynamically calculating the number of displayed slider items
    slidesToShow: (screenSize.width - paddingLeftToSlider) / widthSliderItem,
    lazyLoad: true,
    infinite: false,
    speed: 500,
    slidesToScroll: 1,
    ...settings
  }

  return (
    <Slick {...defaultSettings} ref={instance}>
      {items}
    </Slick>
  )
}

HeroSlider.propTypes = {
  items: PropTypes.node.isRequired,
  settings: PropTypes.object,
  instance: PropTypes.any
}

export default HeroSlider
