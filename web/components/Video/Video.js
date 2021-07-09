import {useState, useEffect, useRef} from 'react'
import Image from 'next/image'
import classNames from 'classnames/bind'
import NextImage from '@/components/NextImage'
import buttonImage from '@/public/play-button.svg'
import styles from './video.module.scss'

const Video = ({video}) => {
  const [isOpen, setOpen] = useState(false)

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : 'auto'
  }, [isOpen])

  const {videoUrl, videoPoster} = video
  return (
    <>
      <div className={classNames(styles.previewWrapper, isOpen && styles.invisible)}>
        <div
          className={styles.buttonWrapper}
          onClick={() => {
            setOpen(true)
          }}
        >
          <Image src={buttonImage} width={72} height={72} />
        </div>
        <NextImage link={videoPoster} />
      </div>

      {isOpen && (
        <div className={styles.popUpWrapper}>
          <div className={styles.videoWrapper}>
            <div className={styles.exitButton} onClick={() => setOpen(false)}>
              <span></span>
              <span></span>
            </div>
            <video id="video" className={styles.video} controls autoPlay>
              <source src={videoUrl} type="video/mp4" />
            </video>
          </div>
        </div>
      )}
    </>
  )
}

export default Video
