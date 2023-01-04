// Write your code here
import './index.css'

const Login = props => {
  const {action} = props
  const letsTrigger = () => {
    action()
  }

  return (
    <button type="button" onClick={letsTrigger}>
      Login
    </button>
  )
}

export default Login
