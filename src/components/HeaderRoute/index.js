import {withRouter} from 'react-router-dom'
import {CgSun} from 'react-icons/cg'
import {FiLogOut} from 'react-icons/fi'
import {AiFillHome, AiFillFire} from 'react-icons/ai'
import {SiYoutubegaming} from 'react-icons/si'
import {MdPlaylistAdd} from 'react-icons/md'
import Cookies from 'js-cookie'

import './index.css'

const HeaderPage = props => {
  const onClickLogOut = () => {
    const {history} = props
    Cookies.remove('jwt_token')
    history.replace('/login')
  }
  return (
    <>
      <div className="HeaderPage-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png"
          className="Header-image"
          alt="nxt watch logo"
        />
        <div className="Header1-Container">
          <CgSun className="Header-cgSun" />
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png"
            className="Header-Profile"
            alt="profile"
          />
          <button
            type="button"
            className="Header-Logout"
            onClick={onClickLogOut}
          >
            Logout
          </button>
          <FiLogOut className="Header-FiLogOut" onClick={onClickLogOut} />
        </div>
      </div>
      <div className="Header-home-container">
        <ul className="Header-un-Ordered">
          <div className="Header-Ai-Fill">
            <AiFillHome className="AiFillHome" />
            <li className="Header-Home">Home</li>
          </div>
          <div className="Header-Ai-Fire">
            <AiFillFire className="AiFillFire" />
            <li className="Header-Trending">Trending</li>
          </div>
          <div className="Header-si-youTube">
            <SiYoutubegaming className="SiYoubebeagaming" />
            <li className="Header-Gaming">Gaming</li>
          </div>
          <div className="Header-md-PalyList">
            <MdPlaylistAdd className="MdPlayerListAdd" />
            <li className="Header-Saved">Saved Videos</li>
          </div>
        </ul>
        <h1 className="Contact-us">Contact Us</h1>
        <div>
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-watch-facebook-logo-img.png"
            className="Header-Facebook-logo"
            alt="facebook logo"
          />
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-watch-twitter-logo-img.png"
            className="Header-Twitter-logo"
            alt="twitter logo"
          />
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-watch-linked-in-logo-img.png"
            className="Header-Linked-in-logo"
            alt="linked in logo"
          />
          <div>
            <p className="Header-paragraph">
              Enjoy!Now to see your channel and recommendations
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default withRouter(HeaderPage)
