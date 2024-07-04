import './index.css'

const ActiveEvent = props => {
  const {status} = props

  const yetToRegister = () => (
    <div className="statusCard">
      <div className="statusImgCard">
        <img
          src="https://assets.ccbp.in/frontend/react-js/events-register-img.png"
          alt="yet to register"
        />
      </div>
      <p className="statusPara">
        A live performance brings so much to your relationship with dance
      </p>
      <button type="button">Register Here</button>
    </div>
  )

  const registered = () => (
    <div className="statusCard">
      <div className="statusImgCard tickImg">
        <img
          src="https://assets.ccbp.in/frontend/react-js/events-regestered-img.png"
          alt="registered"
        />
      </div>
      <h1 className="statusHeading">
        You have already registered for the event
      </h1>
    </div>
  )

  const registrationClosed = () => (
    <div className="statusCard">
      <div className="statusImgCard">
        <img
          src="https://assets.ccbp.in/frontend/react-js/events-registrations-closed-img.png"
          alt="registrations closed"
        />
      </div>
      <h1 className="statusHeading">Registrations Are Closed Now!</h1>
      <p className="statusPara">Stay tuned. We will reopen</p>
    </div>
  )

  const para = () => <p>Click on an event, to view its registration details</p>

  const getRequriedStatus = () => {
    switch (status) {
      case 'YET_TO_REGISTER':
        return yetToRegister()
      case 'REGISTERED':
        return registered()
      case 'REGISTRATIONS_CLOSED':
        return registrationClosed()
      default:
        return para()
    }
  }

  return <div className="registrationDetailsCard">{getRequriedStatus()}</div>
}

export default ActiveEvent
