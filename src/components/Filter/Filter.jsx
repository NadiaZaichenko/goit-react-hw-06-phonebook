import { useSelector, useDispatch } from 'react-redux';
import { setFilter, getFilterValue } from 'reducer/filtersSlice';
import { StyledLabel, StyledInput } from './Filter.styled';

export const Filter = () => {
const dispatch = useDispatch();
const filterValue = useSelector(getFilterValue);

return (
    <StyledLabel> Find contacts by name
        <StyledInput 
        name="filter"
        type="text"
        onChange={event => dispatch(setFilter(event.currentTarget.value))}
        value ={filterValue}/>
    </StyledLabel>
)
}
