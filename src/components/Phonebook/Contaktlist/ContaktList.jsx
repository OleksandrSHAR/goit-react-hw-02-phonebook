import { ContaktWrap } from './ContactList.style';

export const ContactList = ({ contacts, onDelete }) => {
  return (
    <ContaktWrap>
      <ul>
        {contacts.map(({ id, name, number }) => (
          <li key={id}>
            {name}: <span>{number}</span>
            <button type="button" onClick={() => onDelete(id)}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </ContaktWrap>
  );
};
