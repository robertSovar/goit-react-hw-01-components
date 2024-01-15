import PropTypes from 'prop-types';
import user from '../user.json';
import styles from '../profile/Profile.module.css';

const Profile = ({
  userName,
  userAvatar,
  userTag,
  userLocation,
  followers,
  views,
  likes,
}) => {
  const statsData = [
    { label: 'Followers', quantity: followers },
    { label: 'Views', quantity: views },
    { label: 'Likes', quantity: likes },
  ];

  return (
    <div className={styles.profile}>
      <div className={styles.container}>
        <div className={styles.description}>
          <img src={userAvatar} alt="User avatar" className={styles.avatar} />
          <p className={styles.name}>{userName}</p>
          <p className={styles.tag}>{userTag}</p>
          <p className={styles.location}>{userLocation}</p>
        </div>

        <ul className={styles.stats}>
          {statsData.map((stat, index) => (
            <li key={index}>
              <span className={styles.label}>{`${stat.label}: `}</span>
              <span className={styles.quantity}>{stat.quantity}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

Profile.propTypes = {
  userName: PropTypes.string,
  userAvatar: PropTypes.string,
  userTag: PropTypes.string,
  userLocation: PropTypes.string,
  followers: PropTypes.number,
  views: PropTypes.number,
  likes: PropTypes.number,
};

Profile.defaultProps = {
  userName: user.username,
  userAvatar: user.avatar,
  userTag: user.tag,
  userLocation: user.location,
  followers: user.stats.followers,
  views: user.stats.views,
  likes: user.stats.likes,
};

export default Profile;
