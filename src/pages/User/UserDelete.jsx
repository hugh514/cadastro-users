import {useParams} from 'react-router-dom'

const UserDelete = () => {
  const {id} = useParams();
  return (
    <div>UserDelete {id}</div>
  )
}

export default UserDelete