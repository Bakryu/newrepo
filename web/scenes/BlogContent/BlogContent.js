import PropTypes from 'prop-types'
// import {useState} from 'react'

import FilterList from './components/FilterList'
import PostsList from './components/PostsList'
import styles from './blogContent.module.scss'

const BlogContent = ({filter, posts}) => {
  // const initialValue = {
  //   type: [{all: true}],
  //   topic: [{all: true}],
  //   industry: [{all: true}]
  // }
  // const [filterList, setFilterList] = useState(initialValue)
  const {type, topic, industry} = filter
  return (
    <section className={styles.commercialFlooring}>
      <h1 className={styles.title}>articles</h1>
      <div className={styles.postsWrapper}>
        <div className={styles.filter}>
          <FilterList list={type} onClick={() => {}} />
          <FilterList list={topic} onClick={() => {}} />
          <FilterList list={industry} onClick={() => {}} />
        </div>
        <PostsList posts={posts} />
      </div>
    </section>
  )
}

BlogContent.propTypes = {
  filter: PropTypes.object,
  posts: PropTypes.array
}
export default BlogContent
