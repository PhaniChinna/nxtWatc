const HomeRoute = props => {
  const {HomeRouteDetails} = props
  const {
    title,
    thumbnailUrl,
    channel,
    viewCount,
    publishedAt,
  } = HomeRouteDetails
  const {name, profileImageUrl} = channel
  return (
    <li>
      <h1>{title}</h1>
      <img src={thumbnailUrl} alt="title" />
      <p>{channel}</p>
      <p>{viewCount}</p>
      <p>{publishedAt}</p>
      <h1>{name}</h1>
      <img src={profileImageUrl} alt="name" />
    </li>
  )
}

export default HomeRoute
