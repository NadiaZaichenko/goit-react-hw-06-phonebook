import { useSelector} from 'react-redux';
import { getContactItems } from 'reducer/contactsSlice';
import { useMemo } from 'react';
import { getFilterValue } from 'reducer/filtersSlice';
import { List } from './ContactList.styled'
import { ContactItem } from 'components/ContactItem/ContactItem'

export function ContactList () {
  const contacts = useSelector
  (getContactItems);
  const valueFilter = useSelector(getFilterValue);

const getFilteredContacts = useMemo(() => () => {
  const normalizedFilter = valueFilter.toLowerCase().trim();
    return contacts.filter(contact =>
    contact.name.toLowerCase().includes(normalizedFilter)
  );
}, [contacts, valueFilter]);

const filteredContacts = getFilteredContacts();


return (
    <List>
       {filteredContacts.map(({ id, name, number }) => {
        return (
          <ContactItem
            key={id}
            id={id}
            name={name}
            number={number}
          />
        );
      })}
    </List>
)
}
