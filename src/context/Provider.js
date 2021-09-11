import React, { useEffect, useState } from 'react';
import {
  fetchPosts,
  fetchAlbuns,
  fetchTodos,
  fetchUsers,
} from '../services/fetchApi';
import Context from './Context';
import { node } from 'prop-types';

function Provider({ children }) {
  const [posts, setPosts] = useState([]);
  const [albuns, setAlbuns] = useState([]);
  const [todos, setTodos] = useState([]);
  const [users, setUsers] = useState([]);
  const [postsFiltered, setPostsFiltered] = useState([]);
  const [albunsFiltered, setAlbunsFiltered ] = useState([]);
  const [todosFiltered, setTodosFiltered] = useState([]);
  // funções que serão chamadas quando o Provider for renderizado, o Provider encontra-se no App.js.
  // essa funções farão o fetch dos dados da API e setarão nas variáveis de state do Context.
  // então todos os componentes que estão dentro do Contexto terão acesso à esses dados.
  function getPosts() { // esta pega e seta as postagens.
    const fetchApi = async () => {
      const posts = await fetchPosts();
      if(!posts) {
        console.log('Erro ao buscar postagens.\n');
      }
      setPosts(posts); // será setado um array vazio caso o get falhe.
      setPostsFiltered(posts); // setando o filtro para corrigir o fato da tabela ficar vazia na primeira renderização
    }
    fetchApi();
  }

  function getAlbuns() { // esta função pega e seta os albuns.
    const fetchApi = async () => {
      const albuns = await fetchAlbuns();
      if(!albuns) {
        console.log('Erro ao buscar albuns.\n');
      }
      setAlbuns(albuns);
      setAlbunsFiltered(albuns); // setando filtro p/ corrigir problema da tabela ficar vazia na primeira renderização.
    }
    fetchApi();
  }

  function getTodos() { // esta função pega e seta as tarefas.
    const fetchApi = async () => {
      const todos = await fetchTodos();
      if(!todos) {
        console.log('Erro ao buscar pendências.\n');
      }
      setTodos(todos);
      setTodosFiltered(todos);
    }
    fetchApi();
  }

  function getUsers() { // função que pegará e setará usuãrios no contexto.
    const fetchApi = async () => {
      const users = await fetchUsers();
      if(!users) {
        console.log('Erro ao buscar usuários.\n');
      }
      setUsers(users);
    }
    fetchApi();
  }
  useEffect(() => {
    if(posts.length !== 0) {
      window.localStorage.setItem('posts',JSON.stringify(posts));
    }
    if(users.length !== 0) {
      window.localStorage.setItem('users', JSON.stringify(users));
    }
    if(albuns.length !== 0) {
      window.localStorage.setItem('albuns', JSON.stringify(albuns));
    }
    if(todos.length !== 0) {
      window.localStorage.setItem('todos', JSON.stringify(todos));
    }
  }, [posts, users, albuns, todos]);

  useEffect(() => { // useEffect passando um array vazio no segundo parâmetro se assemelha a um componentDidMount.
    getPosts();
    getAlbuns();
    getTodos();
    getUsers();
  }, []);

  const dataValue = { // aqui são os dados que serão acessíveis através do Contexto.
    posts,
    albuns,
    todos,
    users,
    postsFiltered,
    setPostsFiltered,
    albunsFiltered,
    setAlbunsFiltered,
    todosFiltered,
    setTodosFiltered,
  };

  return (
    <Context.Provider value={ dataValue } >
      { children }
    </Context.Provider>
  );
}
Provider.propTypes = {
  children: node,
}.isRequired;
export default Provider;