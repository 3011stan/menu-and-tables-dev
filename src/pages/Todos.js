import React, { useContext } from 'react';
import Footer from '../components/Footer';
import Context from '../context/Context';
import DataTable from 'react-data-table-component';
import { Input } from 'reactstrap';

function Todos() {
  const { users, todos, todosFiltered, setTodosFiltered } = useContext(Context);
  const searchUser = (id) => {
    const usersLocal = users || getLsUsers();
    const userFound = usersLocal.filter((user) => user.id === id);
    if(!userFound || userFound.length === 0) return 'Not Found';
    return userFound[0].name;
  }
  const createString = (bool) => {
    if(bool) {
      return 'SIM';
    } else {
      return 'NÃO';
    }
  };

  const columns = [
    {
      name: 'ID',
      selector: row => row.id,
      sortable: true 
    },
    {
      name: 'USUÁRIO',
      selector: row => searchUser(row.userId),
      sortable: true 
    },
    {
      name: 'TÍTULO',
      selector: row => row.title,
      sortable: true 
    },
    {
      name: 'COMPLETO',
      selector: row => createString(row.completed),
      sortable: true
    }
  ];
  const getLsTodos = () => {
    const todos = JSON.parse(localStorage.getItem('todos'));
    return todos;
  }
  const getLsUsers = () => {
    const users = JSON.parse(localStorage.getItem('users'));
    return users;
  };
  const handleChange = (e) => {
    const todosFiltered = todos.filter((todo) => todo.title.match(e.target.value));
    console.log(todosFiltered);
    setTodosFiltered(todosFiltered)
    // console.log(e.target.value);
  };
  return (
    <>
      <h2>TO-DOs</h2>
      <Input
        type="text" 
        onChange={ (e) => handleChange(e) } 
        placeholder='Digite um título para buscar'
        className='input-search'
      />
      <div className="containerTable table-responsive">
        <DataTable 
          columns = { columns }
          data = { todosFiltered || todos || getLsTodos() }
          pagination
          persistTableHead
        />
      </div>
      <Footer />
    </>
  );
}

export default Todos;
