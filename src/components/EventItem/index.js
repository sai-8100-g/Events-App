import './index.css'

const EvenItem = props => {
  const {eventDetails, getregistrationStatus} = props
  const {imageUrl, name, location, registrationStatus} = eventDetails

  const onClickForRegistration = () => {
    getregistrationStatus(registrationStatus)
  }

  return (
    <li className="eventItem">
      <button
        type="button"
        onClick={onClickForRegistration}
        className="itemImgCard "
      >
        <img src={imageUrl} alt="event" />
      </button>
      <p className="name">{name}</p>
      <p className="location">{location}</p>
    </li>
  )
}

export default EvenItem
