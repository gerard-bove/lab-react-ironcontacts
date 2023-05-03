// src/App.js
import "./App.css";
import jasonContacts from './contacts.json'
import { useState } from 'react';

function App() {
  const [contacts, setContacts] = useState(jasonContacts.slice(0, 5));
  
  const addRandomContacts = () => {
    const randomContact = Math.floor(Math.random() * jasonContacts.length);
    const newContact = jasonContacts[randomContact];
    setContacts([newContact,...contacts]);
  }
  const sortByName = () => {
    const contactsNameFilter = [...contacts].sort((a,b) => a.name.localeCompare(b.name));
    setContacts(contactsNameFilter)
  }

  const sortByPopularity = () => {
    const contactsPopularityCopy = [...contacts].sort((a,b) => b.popularity - a.popularity);
    setContacts(contactsPopularityCopy)
  }

  const deleteItem = (id)=>{
    setContacts(contacts.filter(contact => contact.id !== id))
  }

  return (
  <div className="App">
    <h1>IronContacts</h1>
    <button className="button-container" onClick={addRandomContacts}>Add random contact</button>
    <button className="button-container" onClick={sortByName}>Sort by name</button>
    <button className="button-container" onClick={sortByPopularity}>Sort by popularity</button>
    <table className="table-container">
      <thead>
        <tr>
          <th>Picture</th>
          <th>Name</th>
          <th>Popularity</th>
          <th>Won Oscar</th>
          <th>Won Emmy</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {contacts.map(({pictureUrl, name, popularity, id, wonOscar, wonEmmy}, index) => (
          <tr key={`contact-${index}`}>
            <td><img className="image-container" src={pictureUrl} alt={name}/></td>
            <td>{name}</td>
            <td>{popularity}</td>
            {wonOscar ? <td>🏆</td>:<td></td>}
            {wonEmmy ? <td>🏆</td>:<td></td>}
            <td><button onClick={()=>deleteItem(id)}>Delete</button></td>
          </tr>
        ))}
      </tbody>
    </table>      
  </div>
  );
}
export default App;
