import user from '../../data/user.json';
import { ProfileDescription } from '../Profile/ProfileDescription/ProfileDescription';
import { ProfileStats } from './ProfileStats/ProfileStats';
import { ProfileWrapper } from './ProfileWrapper.styled';

export const Profile = () => {
  const {
    avatar,
    username,
    tag,
    location,
    stats: { followers, views, likes },
  } = user;
  return (
    <ProfileWrapper>
      <ProfileDescription
        userName={username}
        userAvatar={avatar}
        userTag={tag}
        userLocation={location}
      />
      <ProfileStats followers={followers} views={views} likes={likes} />
    </ProfileWrapper>
  );
};
