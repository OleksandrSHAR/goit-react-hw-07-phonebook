import { useDispatch, useSelector } from 'react-redux';
import { ContactWrap, ContactItem, ContactColect } from './ContactList.style';

import { deleteContact } from 'components/redux/operations';
import { filterUser } from 'components/redux/selectors';

export const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(filterUser);
  const onDelete = user => {
    dispatch(deleteContact(user));
  };
  return (
    <ContactWrap>
      <ContactColect>
        {contacts.map(({ id, name, phone }) => (
          <ContactItem key={id}>
            {name}: <span>{phone}</span>
            <button type="button" onClick={() => onDelete(id)}>
              Delete
            </button>
          </ContactItem>
        ))}
      </ContactColect>
    </ContactWrap>
  );
};
