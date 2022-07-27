import Body from '../Body'
import Header from '../Header'
import Footer from '../Footer'

import './index.css'

const Layout = () => (
  <div className="responsive-container">
    <div className="app-container">
      <Header />
      <Body />
      <Footer />
    </div>
  </div>
)

export default Layout
