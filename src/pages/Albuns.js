import React, { useContext } from 'react';
import Footer from '../components/Footer';
import Context from '../context/Context';
import DataTable from 'react-data-table-component';
import { Input } from 'reactstrap';

function Albuns() {
  const { albuns, users, albunsFiltered, setAlbunsFiltered } = useContext(Context);
  const searchUser = (id) => {
    const usersLocal = users || getLsUsers();
    const userFound = usersLocal.filter((user) => user.id === id);
    if(!userFound || userFound.length === 0) return 'Not Found';
    return userFound[0].name;
  }
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
  ];
  const getLsAlbuns = () => {
    const albuns = JSON.parse(localStorage.getItem('albuns'));
    return albuns;
  };
  const getLsUsers = () => {
    const users = JSON.parse(localStorage.getItem('users'));
    return users;
  };
  const handleChange = (e) => {
    const albunsFiltered = albuns.filter((album) => album.title.match(e.target.value));
    console.log(albunsFiltered);
    setAlbunsFiltered(albunsFiltered)
    // console.log(e.target.value);
  };
  return(
    <>
      <h2>ALBUNS</h2>
      <Input
        type="text" 
        onChange={ (e) => handleChange(e) } 
        placeholder='Digite um título para buscar'
        className='input-search'
      />
      <div className="containerTable table-responsive">
        <DataTable 
          columns = { columns }
          data = { albunsFiltered || albuns || getLsAlbuns() }
          pagination
          persistTableHead
        />
      </div>
      <Footer />
    </>
  );
}

export default Albuns;
