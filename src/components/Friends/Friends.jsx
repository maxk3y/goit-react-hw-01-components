import friends from '../../data/friends.json';
import { FriendsList } from './FriendsList/FriendsList';

export const Friends = () => {
  return <FriendsList friends={friends} />;
};
