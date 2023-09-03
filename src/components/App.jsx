import { Component } from 'react';
import { nanoid } from 'nanoid';
import { Forms } from './Phonebook/Form';
import { ContactList } from './Phonebook/ContaktList';
import { Filter } from './Phonebook/Filter';
import { GlobalStyle } from 'GlobalStyle';
const initialValues = {
  contacts: [
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ],
  name: '',
  number: '',
  filter: '',
};

export class App extends Component {
  state = { ...initialValues };

  submitForm = (values, { resetForm }) => {
    const newContacts = {
      name: values.name,
      number: values.number,
      id: nanoid(),
    };
    this.setState(prevState => ({
      contacts: [...prevState.contacts, newContacts],
      name: '',
      number: '',
    }));
    resetForm();
  };
  onDeletContacts = id => {
    this.setState(prevStete => ({
      contacts: prevStete.contacts.filter(contacts => contacts.id !== id),
    }));
  };

  filterForm = e => {
    this.setState({ filter: e.currentTarget.value });
  };
  filterContacts = () => {
    const { contacts, filter } = this.state;
    const normalizFilter = filter.toLowerCase();
    return contacts.filter(contacts =>
      contacts.name.toLowerCase().includes(normalizFilter)
    );
  };
  render() {
    const filterContacts = this.filterContacts();
    return (
      <div>
        <h1>Phonebook</h1>
        <Forms initialValues={this.state} submitForm={this.submitForm} />
        <h2>Contacts</h2>
        <Filter filter={this.state.filter} filterForm={this.filterForm} />
        <ContactList
          contacts={filterContacts}
          onDelete={this.onDeletContacts}
        />
        <GlobalStyle />
      </div>
    );
  }
}
