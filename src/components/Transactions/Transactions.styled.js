import styled from 'styled-components';

export const StyledTransactions = styled.table`
  border-radius: 12px;
  background-color: lightgray;
  padding: 15px;
  margin: 0 auto;
  box-shadow: 2px 2px 2px 2px gray;
  margin-bottom: 20px;
`;

export const StyledTableHead = styled.thead``;

export const StyledHeadRow = styled.tr``;

export const StyledHeadTitle = styled.th`
  outline: 1px solid black;
  padding: 8px;
  background-color: darkgray;
  &:first-child {
    border-top-left-radius: 8px;
  }
  &:last-child {
    border-top-right-radius: 8px;
  }
`;

export const StyledTableBody = styled.tbody`
  width: 100%;
`;

export const StyledBodyRow = styled.tr`
  outline: 1px solid black;
  font-weight: 700;
`;

export const StyledBodyEl = styled.td`
  outline: 1px solid black;
  padding: 8px;
  font-weight: 400;
  cursor: pointer;
  &:first-child {
    color: #182024;
    font-weight: 900;
  }
  &:hover:not(:first-child) {
    background-color: darkgray;
    font-weight: 700;
  }
`;
