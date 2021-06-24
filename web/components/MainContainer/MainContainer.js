import Head from 'next/head'
import client from '../../client'
import Footer from '../Footer'
import ConnectForm from '../forms/ConnectForm'
import data from '../Footer/plug/data' // remove this

const MainContainer = (props) => {
  const {children, title, config} = props
  const {mainNavigation, footerNavigation, footerText, logo, url, connectWithUsForm,buttons} = config

  return (
    <>
      <Head>
        <link
          rel="stylesheet"
          type="text/css"
          charset="UTF-8"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
        />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;700&display=swap"
          rel="stylesheet"
        />
        <title>{title}</title>
      </Head>
      {children}
      <ConnectForm connectWithUsForm={connectWithUsForm} buttons={buttons }/>
      <Footer data={data} />
    </>
  )
}

export default MainContainer
