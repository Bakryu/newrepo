import styles from './video.module.scss'
import getUrl from '../../helpers/getUrl'

const Video = ({homePageVideo, videoPoster}) => {
  return (
    <div className={styles.videoWrapper}>
      <video className={styles.video} controls poster={getUrl(videoPoster)}>
        <source src={homePageVideo} type="video/mp4" />
      </video>
    </div>
  )
}

export default Video
