import PropTypes from 'prop-types';
import friends from '../friends.json';

const Friends = () => {
  return (
    <ul className="friend-list">
      {friends.map((friend, index) => {
        return (
          <li className="item" key={index}>
            <span
              className={`status ${friend.isOnline ? 'online' : 'offline'}`}
            ></span>
            <img
              className="avatar"
              src={friend.avatar}
              alt="User avatar"
              width="48"
            />
            <p className="name">{friend.name}</p>
          </li>
        );
      })}
    </ul>
  );
};

friends.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string,
  isOnline: PropTypes.bool,
};

export default Friends;
