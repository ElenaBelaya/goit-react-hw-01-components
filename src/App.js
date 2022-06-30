import Profile from './components/profile/Profile';
import user from './user.json';
import Statistics from './components/statistics/Statistics';
import data from './data.json';
import FriendList from './components/friendList/FriendList';
import friends from './friends.json';
import './components/profile/profile.css';

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
        <Statistics 
        id={data.id}           
        label={data.label}
        percentage={data.percentage} /> 

      <FriendList items={friends}/>
    </div>
    )
    
}