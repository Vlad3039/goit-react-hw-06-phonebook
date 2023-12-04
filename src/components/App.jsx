import React from 'react';
import { useSelector } from 'react-redux';
import { Box } from './Box/Box';
import { Boxitem } from './ContactsList/ContactList.styled';
import { ContactForm } from './Form/Form';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactsList/ContactList';

const selectContacts = state => state.contacts;

export function App() {
  const filteredContacts = useSelector(selectContacts);

  return (
    <Box
      display="flex"
      flexDirection="column"
      gridGap={10}
      width={[1 / 2]}
      ml={'auto'}
      mr={'auto'}
      p={20}
    >
      <div>
        <h2>Phonebook</h2>
        <ContactForm />
      </div>
      {filteredContacts.length > 0 ? (
        <div>
          <h2>Contacts</h2>
          <Boxitem
            display="inline-flex"
            flexDirection="column"
            border="1px solid black"
          >
            <Filter />
          </Boxitem>
          <ContactList />
        </div>
      ) : (
        <h2>No contacts yet</h2>
      )}
    </Box>
  );
}
