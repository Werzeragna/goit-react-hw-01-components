import styled from 'styled-components';

export const StyledProfileCard = styled.div``;

export const StyledProfile = styled.div`
  margin: 40px auto;
  padding-top: 25px;
  width: 300px;
  background-color: lightgray;
  border-radius: 12px;
  box-shadow: 2px 2px 2px 2px gray;
`;

export const StyledDescription = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;
  margin-bottom: 20px;
`;

export const StyledAvatar = styled.img`
  display: block;
  border-radius: 50%;
  width: 150px;
  /* border: 1px solid black; */
  box-shadow: 0px 2px 0px 2px black;
  margin-bottom: 10px;
  cursor: pointer;
  transition: transform 500ms cubic-bezier(0.075, 0.82, 0.165, 1);
  &:hover {
    transform: scale(1.1);
  }
`;

export const StyledUsername = styled.p`
  font-size: 24px;
  font-weight: 600;
  cursor: pointer;
`;

export const StyledTag = styled.p`
  color: gray;
  cursor: pointer;
`;

export const StyledLocation = styled.p`
  color: gray;
  font-size: 18px;
  font-weight: 600;
  cursor: pointer;
`;

export const StyledStats = styled.ul`
  display: flex;
`;

export const StyledItem = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 5px;
  width: 100px;
  background-color: darkgray;
  border-top: 2px solid black;
  &:first-child {
    border-bottom-left-radius: 12px;
  }
  &:last-child {
    border-bottom-right-radius: 12px;
  }
  &:not(:last-child) {
    border-right: 2px solid black;
  }
`;

export const StyledLabel = styled.span`
  color: black;
  font-weight: 700;
  margin-bottom: 10px;
`;

export const StyledQuantity = styled.span`
  color: black;
  font-weight: 900;
  margin-bottom: 10px;
`;
