import PropTypes from 'prop-types';
import { FriendsListStyles } from './FriendsList.styled';
import { FriendsListItem } from '../FriendsListItem/FriendsListItem';

export const FriendsList = ({ friends }) => {
  return (
    <FriendsListStyles>
      {friends.map(({ isOnline, avatar, name, id }) => {
        return (
          <FriendsListItem
            isOnline={isOnline}
            avatar={avatar}
            name={name}
            key={id}
          />
        );
      })}
    </FriendsListStyles>
  );
};

FriendsList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.number.isRequired,
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
    })
  ),
};
