import user from '../user.json';
import PropTypes from 'prop-types';

const Profile = () => {
  const userName = user.username;
  const userAvatar = user.avatar;
  const userTag = user.tag;
  const userLocation = user.location;
  const followers = user.stats.followers;
  const views = user.stats.views;
  const likes = user.stats.likes;

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
          <span className="label">Followers: </span>
          <span className="quantity">{followers}</span>
        </li>
        <li>
          <span className="label">Views: </span>
          <span className="quantity">{views}</span>
        </li>
        <li>
          <span className="label">Likes: </span>
          <span className="quantity">{likes}</span>
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
  followers: PropTypes.number,
  views: PropTypes.number,
  likes: PropTypes.number,
};

export default Profile;
