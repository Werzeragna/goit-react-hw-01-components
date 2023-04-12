import styled from 'styled-components';
import { getRandomColor } from './Statistics';

export const StyledStatistics = styled.section`
  width: 300px;
  margin: 20px auto;
  margin-bottom: 30px;
  border-radius: 8px;
  padding-top: 15px;
  background-color: lightgray;
  box-shadow: 2px 2px 2px 2px gray;
`;

export const StyledTitle = styled.h2`
  margin-bottom: 15px;
  text-align: center;
  transition: transform 500ms cubic-bezier(0.075, 0.82, 0.165, 1);
  &:hover {
    transform: scale(1.1);
  }
`;

export const StyledStatsList = styled.ul`
  display: flex;
`;

export const StyledListItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  background-color: ${getRandomColor};
  border-top: 1px solid black;
  width: 60px;
  padding-bottom: 5px;
  &:first-child {
    border-bottom-left-radius: 8px;
  }
  &:last-child {
    border-bottom-right-radius: 8px;
  }
  &:not(:last-child) {
    border-right: 1px solid black;
  }
`;

export const StyledLabel = styled.span`
  margin-top: 10px;
  font-size: 20px;
  font-weight: 600;
`;

export const StyledPercentage = styled.span`
  font-size: 18px;
  font-weight: 600;
`;
