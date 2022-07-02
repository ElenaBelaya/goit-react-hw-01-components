import PropTypes from 'prop-types';
import { Image, BoxList, Span } from "./profile.styled";

export default function Profile( { username, tag, location, avatar, stats }) {
    return (
        <div className="profile">
  <div className="description">
   
      <Image     
      src={avatar}
      alt="User avatar"
      className="avatar"   /> 
    
    
    <p className="name">{username}</p>
    <p className="tag">@{tag}</p>
    <p className="location">{location}</p>
  </div>
<BoxList>
    <li>
      <Span>Followers</Span>
      <Span>{stats.followers}</Span>
    </li>
    <li>
       <Span> Views</Span>
       <Span>{stats.views}</Span>
    </li>
    <li>
       <Span>Likes</Span>
       <Span>{stats.likes}</Span>
    </li> 
</BoxList>
 
</div>
    )
}

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,  
  stats: PropTypes.objectOf(PropTypes.number).isRequired,
  
  
}