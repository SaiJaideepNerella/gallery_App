import './index.css'

const ThumbnailItem = props => {
  const {ImageDetails, isActive, clickThumbnailItem} = props
  const {thumbnailUrl, thumbnailAltText, id} = ImageDetails
  const thumbnailClassName = isActive ? `thumbnail active` : `thumbnail`
  const onClickThumbnanil = () => {
    clickThumbnailItem(id)
  }

  return (
    <li className="Thumbnanil-list">
      <button
        className="thumbnail-button"
        type="button"
        onClick={onClickThumbnanil}
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
