import { ContaktWrap, ContactItem, ContactList } from './ContactList.style';

export const ContactColection = ({ contacts, onDelete }) => {
  return (
    <ContaktWrap>
      <ContactList>
        {contacts.map(({ id, name, number }) => (
          <ContactItem key={id}>
            {name}: <span>{number}</span>
            <button type="button" onClick={() => onDelete(id)}>
              Delete
            </button>
          </ContactItem>
        ))}
      </ContactList>
    </ContaktWrap>
  );
};
