import Friend from '../friendList/Friend';

export default function FriendList({ items }) {
return (
 <ul> {items.map(item => (   
        <Friend
        id={item.id}
        avatar={item.avatar}
        name={item.name}
        isOnline={item.isOnline}       
        />
 
        ))} 
</ul>
    );
};




