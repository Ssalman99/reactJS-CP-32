// Write your code here

import './index.css'

const EventItem = props => {
  const {details, updateId} = props
  const {imageUrl, name, location, registrationStatus} = details
  const imgClicked = () => {
    updateId(registrationStatus)
  }

  return (
    <li className="list-item">
      <button type="button" className="button" onClick={imgClicked}>
        <img src={imageUrl} alt="event" className="img" />
      </button>
      <p className="item-name">{name}</p>
      <p className="item-location">{location}</p>
    </li>
  )
}

export default EventItem
