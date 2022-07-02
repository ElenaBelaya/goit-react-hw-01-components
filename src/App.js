import Profile from './components/profile/Profile';
import user from './user.json';
import Statistics from './components/statistics/Statistics';
import data from './data.json';
import FriendList from './components/friendList/FriendList';
import friends from './friends.json';
import TransactionHistory from './components/transactionHistory/TransactionHistory';
import transactions from './transactions.json';
import { Container } from 'components/profile/profile.styled';
import { ProfileBox } from './components/profile/profile.styled';


export default function App () {
    return (
      <div className="App"> 
      <Container>
      <ProfileBox>
        <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
        /> 
      </ProfileBox> 
      <FriendList friends={friends}/>               
      </Container> 

        
       
        <Statistics 
        title="Upload stats" 
        stats={data} 
        />
        <Statistics 
        stats={data} />
        
      
      
      <TransactionHistory
      items={transactions}
      />
    </div>
    )
    
}