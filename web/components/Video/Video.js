import styles from './video.module.scss'
import getUrl from '../../helpers/getUrl'

const Video = ({video}) => {
  const {videoUrl, videoPoster} = video
  return (
    <video className={styles.video} controls poster={getUrl(videoPoster)}>
      <source src={videoUrl} type="video/mp4" />
    </video>
  )
}

export default Video
