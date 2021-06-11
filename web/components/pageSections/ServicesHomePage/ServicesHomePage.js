import styles from './service.module.css'

const ServicesHomePage = ({title, description, servicesList}) => {
  return (
    <section>
      <div className={styles.descriptionWrapper}>
        <h1 className={styles.title}>{title}</h1>
        <h2 className={styles.description}>{description}</h2>
      </div>
    </section>
  )
}

export default ServicesHomePage
