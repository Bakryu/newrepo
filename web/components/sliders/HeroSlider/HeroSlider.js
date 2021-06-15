import PropTypes from 'prop-types'
import Slick from 'react-slick'

import Arrow from './components/Arrow'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import arrowLeft from '../images/arrow-left.svg'
import arrowRight from '../images/arrow-right.svg'

const HeroSlider = ({children, settings, instance}) => {
  const defaultSettings = {
    prevArrow: <Arrow direction="previous" arrowImage={arrowLeft} />,
    nextArrow: <Arrow direction="next" arrowImage={arrowRight} />,

    customPaging: function customDot(i) {
      return (
        <button>
          <span>{i}</span>
        </button>
      )
    },
    lazyLoad: true,
    ...settings
  }

  return (
    <Slick {...defaultSettings} ref={instance}>
      {children}
    </Slick>
  )
}

HeroSlider.propTypes = {
  children: PropTypes.node.isRequired,
  settings: PropTypes.object,
  instance: PropTypes.any
}

export default HeroSlider

// import React from 'react'
// import PropTypes from 'prop-types'
// import Slick from 'react-slick'

// import styles from './heroSlider.module.scss'
// import 'slick-carousel/slick/slick.css'
// import 'slick-carousel/slick/slick-theme.css'

// import arrowLeft from '../images/arrow-left.svg'
// import arrowLeftWhite from '../images/arrow-left-white.svg'
// import arrowRight from '../images/arrow-right.svg'
// import arrowRightWhite from '../images/arrow-right-white.svg'

// const HeroSlider = ({children, settings, instance}) => {
//   function SampleNextArrow(props) {
//     // const { className, style, onClick } = props;
//     return <div className={styles.next} style={{display: 'block', background: 'red'}} />
//   }

//   const defaultSettings = {
//     nextArrow: (
//       <div>
//         <div className={styles.nextArrow}>
//           <img className={styles.rightArrowBlack} src={arrowRight} />
//           <img className={styles.rightArrowWhite} src={arrowRightWhite} />
//         </div>
//       </div>
//     ),
//     prevArrow: (
//       <div>
//         <div className={styles.prevArrow}>
//           <img className={styles.leftArrowBlack} src={arrowLeft} />
//           <img className={styles.leftArrowWhite} src={arrowLeftWhite} />{' '}
//         </div>
//       </div>
//     ),
//     // dotsClass: styles.dots,
//     // customPaging: function customDot(i) {
//     //   return (
//     //     <button className={styles.button}>
//     //       <span className={styles.title}>{i}</span>
//     //     </button>
//     //   );
//     // },
//     lazyLoad: true,
//     ...settings
//   }

//   return (
//     <Slick {...defaultSettings} ref={instance}>
//       {children}
//     </Slick>
//   )
// }

// // Slider.propTypes = {
// //   children: PropTypes.node.isRequired,
// //   settings: PropTypes.object,
// //   instance: PropTypes.any
// // }

// export default HeroSlider
