import PropTypes from 'prop-types';
import {
  StyledProfile,
  StyledDescription,
  StyledAvatar,
  StyledUsername,
  StyledTag,
  StyledLocation,
  StyledStats,
  StyledItem,
  StyledLabel,
  StyledQuantity,
} from './Profile.styled';

export function Profile({ username, tag, location, avatar, stats }) {
  return (
    <StyledProfile>
      <StyledDescription>
        <StyledAvatar src={avatar} alt="User avatar" />
        <StyledUsername>{username}</StyledUsername>
        <StyledTag>@{tag}</StyledTag>
        <StyledLocation>{location}</StyledLocation>
      </StyledDescription>

      <StyledStats>
        <StyledItem>
          <StyledLabel>Followers</StyledLabel>
          <StyledQuantity>{stats.followers}</StyledQuantity>
        </StyledItem>
        <StyledItem>
          <StyledLabel>Views</StyledLabel>
          <StyledQuantity>{stats.views}</StyledQuantity>
        </StyledItem>
        <StyledItem>
          <StyledLabel>Likes</StyledLabel>
          <StyledQuantity>{stats.likes}</StyledQuantity>
        </StyledItem>
      </StyledStats>
    </StyledProfile>
  );
}
Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }).isRequired,
};
