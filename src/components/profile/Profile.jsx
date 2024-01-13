import PropTypes from 'prop-types';
import user from '../user.json';

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
    <div className="profile">
      <div className="description">
        <img src={userAvatar} alt="User avatar" className="avatar" />
        <p className="name">{userName}</p>
        <p className="tag">{userTag}</p>
        <p className="location">{userLocation}</p>
      </div>

      <ul className="stats">
        {statsData.map((stat, index) => (
          <li key={index}>
            <span className="label">{`${stat.label}: `}</span>
            <span className="quantity">{stat.quantity}</span>
          </li>
        ))}
      </ul>
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
