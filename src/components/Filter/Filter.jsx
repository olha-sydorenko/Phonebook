import { FilterText, Input, FilterWrapper } from './Filter.styled';
import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from '../../redux/Filter/filterSlice';
import { selectFilter } from '../../redux/Filter/filterSelector';

export const Filter = () => {
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();
  const handleFilter = event => {
    dispatch(setFilter(event.target.value));
  };

  return (
    <FilterWrapper>
      <FilterText>Find contacts by name</FilterText>
      <Input type="text" name="filter" value={filter} onChange={handleFilter} />
    </FilterWrapper>
  );
};
