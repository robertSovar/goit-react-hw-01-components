import user from '../user.json';
import PropTypes from 'prop-types';

const Profile = () => {
  const userName = user.username;
  const userAvatar = user.avatar;
  const userTag = user.tag;
  const userLocation = user.location;

  return (
    <div className="profile">
      <div className="description">
        <img src={userAvatar} alt="User avatar" className="avatar" />
        <p className="name">{userName}</p>
        <p className="tag">{userTag}</p>
        <p className="location">{userLocation}</p>
      </div>

      <ul className="stats">
        <li>
          <span className="label">Followers</span>
          <span className="quantity">1000</span>
        </li>
        <li>
          <span className="label">Views</span>
          <span className="quantity">2000</span>
        </li>
        <li>
          <span className="label">Likes</span>
          <span className="quantity">3000</span>
        </li>
      </ul>
    </div>
  );
};

Profile.propTypes = {
  userName: PropTypes.string,
  userAvatar: PropTypes.string,
  userTag: PropTypes.string,
  userLocation: PropTypes.string,
};

export default Profile;
