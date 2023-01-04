// Write your code here
import './index.css'

const Logout = props => {
  const {action} = props
  const letsTrigger = () => {
    action()
  }

  return (
    <button type="button" onClick={letsTrigger}>
      Logout
    </button>
  )
}

export default Logout
