import {useParams} from 'react-router-dom'
import NewUser from './NewUser';

const UserEdit = () => {
  const {id} = useParams();
  return (
    <NewUser editar={true} id={id}/>
  )
}

export default UserEdit