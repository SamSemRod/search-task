import { User } from '../SearchResults/SearchContext';

import "./style.css";

export default function UserCard({user} : {user: User}) {
  return (
    <div key={1} className="userCard" >
      <img className="userPic" src={user.image} />
      <div className="userInfo">
        <div>{`${user.firstName} ${user.lastName}`}</div>
        <div>{user.address.city}</div>
      </div>
    </div>
  );
}
