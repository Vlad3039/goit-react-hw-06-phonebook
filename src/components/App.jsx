// import { useState } from 'react';
// import { useHookLS } from './hooks/hookLS';

// import Notiflix from 'notiflix';
// import { nanoid } from 'nanoid';
import { Box } from './Box/Box';
import { Boxitem } from './ContactsList/ContactList.styled';

import { ContactForm } from './Form/Form';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactsList/ContactList';
import { useSelector } from 'react-redux';

export function App() {
  const filteredContacts = useSelector(state => state.contacts);
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
        <ContactForm
        // onSubmit={addContact}
        />
      </div>
      {/* contacts.length */}
      {filteredContacts.length > 0 ? (
        <div>
          <h2>Contacts</h2>
          <Boxitem
            display="inline-flex"
            flexDirection="column"
            border="1px solid black"
          >
            <Filter />
            {/* value={filter} onChange={handleFilterInput} */}
          </Boxitem>
          <ContactList
          // contacts={contacts}
          // onDeleteContact={deleteContact}
          />
        </div>
      ) : (
        <h2>No contacts yet</h2>
      )}
    </Box>
  );
}
