import './index.css'

const ThumbnailItem = props => {
  const {imageDetails, isActive, setActiveThumbnailId} = props
  const {thumbnailUrl, thumbnailAltText, id} = imageDetails
  const thumbnailClassName = isActive ? `thumbnail active` : `thumbnail`

  const onClickThumbnail = () => {
    setActiveThumbnailId(id)
  }

  return (
    <li className="thumbnail-list-item">
      <button
        type="button"
        className="thumbnail-button"
        onClick={onClickThumbnail}
      >
        <img
          src={thumbnailUrl}
          alt={thumbnailAltText}
          className={thumbnailClassName}
        />
      </button>
    </li>
  )
}

export default ThumbnailItem

// import './index.css'

// const ThumbnailItem = props => {
//   const {imagesList, onClickChangeImage} = props
//   const {id, thumbnailUrl, thumbnailAltText} = imagesList

//   const changeImage = () => {
//     onClickChangeImage(id)
//   }

//   return (
//     <button type="button" className="button" onClick={changeImage}>
//       <img src={thumbnailUrl} alt={thumbnailAltText} />
//     </button>
//   )
// }

// export default ThumbnailItem
