import facebook from './facebook.svg'
import linkedin from './linkedin.svg'
import logo from './logo.svg'

const data = () => {
  const logoData = {logoImage: logo, link: '/'}
  const firstColumn = [
    {name: 'Our story', link: '/'},
    {name: 'Initial Fees', link: '/'},
    {name: 'Buy a franchise', link: '/'},
    {name: 'How do we help?', link: '/'}
  ]
  const secondColumn = [
    {name: 'Available markets', link: '/'},
    {name: 'Recent projects', link: '/'},
    {name: 'FAQ', link: '/'},
    {name: 'Testimonials', link: '/'}
  ]
  const contacts = {
    address: '1110 Bonifant Street, Suite 450, Silver Spring, MD 20910',
    phoneNumber: {placeholder: '202-449-9525', number: '2024499525'},
    email: 'info@koydol.com',
    socials: [
      {image: linkedin, link: '/'},
      {image: facebook, link: '/'}
    ]
  }
  const terms = {
    privacyPolicy: {
      name: 'Privacy Policy',
      link: '/'
    },
    termsOfUse: {
      name: 'Terms of Use',
      link: '/'
    },
    koydolInc: '© Koydol Flooring Inc. 2021',
    allRightReserved: 'All Right Reserved'
  }

  return {logoData, firstColumn, secondColumn, contacts, terms}
}

export default data()
