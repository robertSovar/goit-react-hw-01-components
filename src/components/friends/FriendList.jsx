import PropTypes from 'prop-types';
import friends from '../friends.json';
import styles from '../friends/FriendList.module.css';

const Friends = () => {
  return (
    <ul className={styles.friendList}>
      {friends.map((friend, index) => {
        const condition = friend.isOnline
          ? `${styles.online}`
          : `${styles.offline}`;
        return (
          <li className={styles.item} key={index}>
            <span className={`${styles.status} ${condition}`}></span>

            <img
              className={styles.avatar}
              src={friend.avatar}
              alt="User avatar"
              width="48"
            />
            <p className={styles.name}>{friend.name}</p>
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
