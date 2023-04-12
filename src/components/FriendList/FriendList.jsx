import PropTypes from 'prop-types';
import {
  StyledAvatar,
  StyledFriendItem,
  StyledFriendList,
  StyledName,
  StyledStatus,
} from './FriendList.styled';

export function FriendList({ friends }) {
  return (
    <StyledFriendList>
      {friends.map(({ avatar, name, isOnline, id }) => (
        <StyledFriendItem key={id}>
          <StyledStatus type={isOnline.toString()}>{isOnline}</StyledStatus>
          <StyledAvatar src={avatar} alt={name} />
          <StyledName>{name}</StyledName>
        </StyledFriendItem>
      ))}
    </StyledFriendList>
  );
}

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
      id: PropTypes.number.isRequired,
    }).isRequired
  ).isRequired,
};
