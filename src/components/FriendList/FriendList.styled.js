import styled from 'styled-components';

export const StyledFriendList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const StyledFriendItem = styled.li`
  display: flex;
  align-items: center;
  gap: 20px;
  width: 270px;
  border-radius: 8px;
  background-color: lightgray;
  padding: 15px;
  margin-bottom: 10px;
  box-shadow: 2px 2px 2px 2px gray;
`;

export const StyledStatus = styled.span`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${props => {
    switch (props.type) {
      case 'true':
        return 'green';
      default:
        return 'red';
    }
  }};
`;

export const StyledAvatar = styled.img`
  width: 80px;
  border: 1px solid black;
  border-radius: 50%;
  box-shadow: 0px 1px 0px 1px black;
  background-color: white;
  cursor: pointer;
  transition: transform 500ms cubic-bezier(0.075, 0.82, 0.165, 1);

  &:hover {
    transform: scale(1.1);
  }
`;

export const StyledName = styled.p`
  font-size: 32px;
  font-weight: 600;
  cursor: pointer;
`;
