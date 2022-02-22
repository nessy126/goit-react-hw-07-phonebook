import "./App.css"
import Form from "./components/Form/Form"
import ContactList from "./components/ContactList/ContactList"
import Filter from "./components/Filter/Filter"
import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { getContacts } from "./redux/phoneBook/phonebookOperations"


const App = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getContacts())
  }, [dispatch]) 

  
    return (
      <div className="App">
        <h1>Phonebook</h1>
        <Form />
        <h2>Contacts</h2>
        <Filter />
        <ContactList />
      </div>
    )
  }

export default App;
