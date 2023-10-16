import { filterUser } from 'components/redux/selectors';
import { useDispatch } from 'react-redux';

export const Filter = () => {
  const dispatch = useDispatch();
  const filterForm = ({ target: { value } }) => {
    dispatch(filterUser(value));
  };
  return (
    <div>
      <input type="text" name="filter" onChange={filterForm} />
    </div>
  );
};
