import React, { useContext } from 'react';
import Footer from '../components/Footer';
import Context from '../context/Context';
import DataTable from 'react-data-table-component';
import { Input } from 'reactstrap';
import PropTypes from 'prop-types';
function Posts() {
  const { posts, users, postsFiltered, setPostsFiltered } = useContext(Context);
  // função que buscará o id do usuário e retornará o nome usuário.
  // tenho ciência que o ideal seria fazer isso no lado do servidor utilizando uma query com Group
  // porém, como não tenho acesso direto ao banco desenvolvi esta função
  // que utiliza como se fosse tabelas diferentes para consultar e atribuir o userId ao name do usuário.
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
  // component que mostra a postagem em si:
  
  const ExpandedComponent = ({ data }) => <pre>{JSON.stringify(data.body, null)}</pre>;
  // as funções getLsPosts e getLsUsers foram criadas porque foi a forma que encontrei de persistir os dados
  // mesmo se déssemos F5 ba na página da tabela, o provider além de alimentar o Context
  // alimenta também o localStorage.
  const getLsPosts = () => {
    const posts = JSON.parse(localStorage.getItem('posts'));
    return posts;
  };
  const getLsUsers = () => {
    const users = JSON.parse(localStorage.getItem('users'));
    return users;
  };
  // função que buscará postagens pelo título
  const handleChange = (e) => {
    const postsFiltered = posts.filter((post) => post.title.match(e.target.value));
    console.log(postsFiltered);
    setPostsFiltered(postsFiltered)
    // console.log(e.target.value);
  };
  return(
    <>
      <h1>Postagens</h1>
      <Input
        type="text" 
        onChange={ (e) => handleChange(e) } 
        placeholder='Digite um título para buscar'
        className='input-search'
      />
      <div className="containerTable table-responsive">
        <DataTable 
          columns = { columns }
          data = { postsFiltered || posts || getLsPosts() }
          expandableRows
          expandableRowsComponent={ExpandedComponent}
          pagination
          persistTableHead
        />
      </div>
      <Footer />
    </>
  )
}

Posts.propTypes = {
  data: PropTypes.object,
  body: PropTypes.string,
};

export default Posts;
