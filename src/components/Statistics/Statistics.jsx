import PropTypes from 'prop-types';
import {
  StyledStatistics,
  StyledTitle,
  StyledStatsList,
  StyledListItem,
  StyledLabel,
  StyledPercentage,
} from './Statistics.styled';

export function getRandomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

export function Statistics({ stats }) {
  return (
    <StyledStatistics>
      <StyledTitle>Upload stats</StyledTitle>
      <StyledStatsList>
        {stats.map(item => (
          <StyledListItem key={item.id} background-color={getRandomColor}>
            <StyledLabel> {item.label} </StyledLabel>
            <StyledPercentage> {item.percentage} % </StyledPercentage>
          </StyledListItem>
        ))}
      </StyledStatsList>
    </StyledStatistics>
  );
}

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    }).isRequired
  ).isRequired,
};
