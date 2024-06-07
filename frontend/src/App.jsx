import { useState } from 'react'

import './App.css'
import {Typography, Container, Grid} from '@mui/material';

import { useQuery } from '@apollo/client';
import Loader from './components/spinner';
import { GET_BOOKS } from './api/books';
import EmptyBookList from "./components/EmptyBookList"

import Ello from './components/logo';
import BookList from './components/bookList';
import BookCard from './components/bookCard';



function App() {

  const [addedBooks,setAddedBooks] = useState([])


  // fetching for the books
  const { loading, error, data } = useQuery(GET_BOOKS);

  // updating added books
  const updateList = (book,added) => {
    if(added){
        setAddedBooks((prevBooks)=>prevBooks.filter(abook=>!(abook.title === book.title && abook.author === book.author)))
    }else{
        setAddedBooks([...addedBooks,book])
    }
}

  if (loading) return <Loader />;
  if (error) return <p>Error: {error.message}</p>;



  return (
    <Container>

    <Ello />


    <BookList updateList={updateList} books={data.books} addedBooks={addedBooks} setAddedBooks={setAddedBooks} />



    <Typography variant="h5" align='left' marginTop={2} component="h1" color="primary.main">
     Teacher's Reading List
    </Typography>


    <Grid container spacing={2}  style={{marginTop: '30px'}} >
    {
    addedBooks.length < 1 ?
    <EmptyBookList />
    
    :

    addedBooks.map((book, index) => (
        <Grid item xs={12} md={3} key={index}>
            <BookCard  book={book} updateList={updateList} />
        </Grid>
      ))}
     
    </Grid>

  </Container>
  )
}

export default App
