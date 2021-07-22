// import {useRouter} from 'next/router'
// import client from '../../client'
// import groq from 'groq'
// import PropTypes from 'prop-types'

// import MainContainer from '@/components/MainContainer'

// const siteConfigQuery = `
//   *[_id == "global-config"] {
//     ...,
//     logo{
//       ...,
//       "linkAlternative":link->link,
//       "slug":link->page->pageSlug

//     },
//     blackNavigation,
//     terms{
//       ...,
//       privacyPolicy{
//         name,
//         "link":link->link,
//         "slug":link->page->pageSlug
//       },
//       termsOfUse{
//         name,
//         "link":link->link,
//         "slug":link->page->pageSlug
//       },

//     },

//     ownGrowTransitionNavigation[]{
//       name,
//       "link":link->link,
//       "slug":link->page->pageSlug
//     },

//     mainNavigation{group[]{
//       name,
//       groupBoxName,
//       groupList[]{
//         name,
//         "link":link->link,
//         "slug":link->page->pageSlug

//     },
//       "link":link->link,
//       "slug":link->page->pageSlug
//   }},
//     footerNavigation{
//       firstColumn{group[]{
//         name,
//         "link":link->link,
//         "slug":link->page->pageSlug
//     }},
//       secondColumn{group[]{
//         name,
//         "link":link->link,
//         "slug":link->page->pageSlug}}
//     }
//   }[0]
//   `

// const siteFormQuery = `
//   *[_type == "formList"][0]
//   `

// const Post = ({config, formQuery}) => {
//   //   const router = useRouter()
//   //   const {post} = router.query
//   console.log(config)

//   return (
//     // <MainContainer config={config} connectWithUsForm={formQuery}>
//     <span>dsvnskljj</span>
//     // </MainContainer>
//   )
// }

// export async function getStaticProps() {
//   const data = await client
//     .fetch(
//       groq`*[_type == "postPage" ][0]
//       `
//       //   && pageSlug == ${post}
//     )
//     .then((res) => {
//       return {...res}
//     })

//   const getConfig = async () => {
//     const config = await client.fetch(siteConfigQuery).then((config) => {
//       return config
//     })
//     const formQuery = await client.fetch(siteFormQuery).then((form) => {
//       return form
//     })

//     pageProps.config = {...config, ...formQuery, name: 'mcmc'}
//     pageProps.formQuery = formQuery.connectWithUsForm

//     return {pageProps}
//   }

//   if (!data) {
//     return {
//       notFound: true
//     }
//   }

//   const globalConfig = getConfig()
//   return {
//     props: {...data, ...globalConfig}
//   }
// }

// export async function getStaticPaths() {
//   const paths = await client.fetch(
//     `*[_type == "postPage" && defined(pageSlug.current)[].pageSlug.current]`
//   )

//   return {
//     paths: paths.map((slug) => ({params: {slug}})),
//     fallback: true
//   }
// }

// Post.propTypes = {
//   PostContent: PropTypes.object
// }

// export default Post
