import PropTypes from 'prop-types';
import { Label, Input } from './Filter.module';
import { createContext } from 'react';
import { isClickableInput } from '@testing-library/user-event/dist/utils';

export const Filter = ({ value, handleChangeFilter }) => {
  return (
    <Label>
      Find contacts by name
      <Input
        type="text"
        name="filter"
        placeholder="Enter contact name"
        value={value}
        onChange={handleChangeFilter}
      />
    </Label>
  );
};

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  handleChangeFilter: PropTypes.func.isRequired,
};
 
export default Filter;


