import PropTypes from 'prop-types';
import { FriendItem } from '../friend/friend.styled';
export default function Friend({ avatar, name, isOnline, id }) {
  return (
    <FriendItem>
 <span className="status">{isOnline}</span>
  <img className="avatar" src={avatar} alt="User avatar" width="48" />
  <p className="name">{name}</p>
    </FriendItem>
 
  )
};

Friend.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
  
}
