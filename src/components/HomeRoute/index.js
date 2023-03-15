import {Component} from 'react'
import Cookies from 'js-cookie'
import HeaderPage from '../HeaderRoute'

import './index.css'

class HomePage extends Component {
  state = {
    YouTube: [],
  }

  componentDidMount() {
    this.getYouTubeList()
  }

  getYouTubeList = async () => {
    const jwtToken = Cookies.get('jwt_token')
    const ApiUrl = 'https://apis.ccbp.in/videos/all'
    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }
    const response = await fetch(ApiUrl, options)
    const data = await response.json()
    console.log(data)
    if (response.ok === true) {
      const UpdatedData = data.videos.map(eachVideo => ({
        title: eachVideo.title,
        thumbnailUrl: eachVideo.thumbnail_url,
        viewCount: eachVideo.view_count,
        publishedAt: eachVideo.published_at,
      }))
      this.setState({
        YouTube: UpdatedData,
      })
    }
  }

  render() {
    const {YouTube} = this.state
    const {title, thumbnailUrl, viewCount, publishedAt} = YouTube

    return (
      <>
        <HeaderPage />
        <div className="HomePage1-container">
          <div className="Homepage2-container">
            <h1>{title}</h1>
            <img src={thumbnailUrl} alt="p" />
            <p>{viewCount}</p>
            <p>{publishedAt}</p>
          </div>
        </div>
      </>
    )
  }
}

export default HomePage
