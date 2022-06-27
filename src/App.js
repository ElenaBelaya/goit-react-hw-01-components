import Profile from './components/profile/Profile';
import user from './user.json';
import styles from './components/profile/profile.css';

export default function App () {
    return (
      <div className="App">
    
        <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
    
    </div>
    )
    
}