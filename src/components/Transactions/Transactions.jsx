import PropTypes from 'prop-types';
import {
  StyledTransactions,
  StyledTableHead,
  StyledHeadRow,
  StyledHeadTitle,
  StyledTableBody,
  StyledBodyRow,
  StyledBodyEl,
} from './Transactions.styled';

export function Transactions({ items }) {
  return (
    <StyledTransactions>
      <StyledTableHead>
        <StyledHeadRow>
          <StyledHeadTitle>Type</StyledHeadTitle>
          <StyledHeadTitle>Amount</StyledHeadTitle>
          <StyledHeadTitle>Currency</StyledHeadTitle>
        </StyledHeadRow>
      </StyledTableHead>

      <StyledTableBody>
        {items.map(({ id, type, amount, currency }) => {
          return (
            <StyledBodyRow key={id}>
              <StyledBodyEl>{type}</StyledBodyEl>
              <StyledBodyEl>{amount}</StyledBodyEl>
              <StyledBodyEl>{currency}</StyledBodyEl>
            </StyledBodyRow>
          );
        })}
      </StyledTableBody>
    </StyledTransactions>
  );
}

Transactions.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
};
