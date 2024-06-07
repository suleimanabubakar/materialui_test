import { useState } from 'react'

import './App.css'
import { Button, Typography, Container, Grid,  Card, CardMedia, CardContent, IconButton, CardActions} from '@mui/material';

import BookL from './components/books';
import { useQuery, gql } from '@apollo/client';
import Loader from './components/spinner';
import { GET_BOOKS } from './api/books';
import EmptyBookList from "./components/EmptyBookList"

import DeleteIcon from '@mui/icons-material/Delete';






function App() {
  const [count, setCount] = useState(0)

  const [addedBooks,setAddedBooks] = useState([])


  const { loading, error, data } = useQuery(GET_BOOKS);

  const updateList = (book,added) => {
    if(added){
        setAddedBooks((prevBooks)=>prevBooks.filter(abook=>!(abook.title === book.title && abook.author === book.author)))
    }else{
        setAddedBooks([...addedBooks,book])
    }
}

  if (loading) return <Loader />;
  if (error) return <p>Error: {error.message}</p>;



  console.log('books are ', data)

  return (
    <Container>

    <Typography variant="h5" component="h1" color="primary.main">
      Welcome Back, Suleiman.s
    </Typography>

    <BookL updateList={updateList} books={data.books} addedBooks={addedBooks} setAddedBooks={setAddedBooks} />



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
          <Card>
            <CardMedia
              component="img"
              height="150"
              image={book.coverPhotoURL}
              alt={book.title}
            />
            <CardContent>
              <Typography variant="h6" align="left" component="div">
                {book.title}
              </Typography>
              <Typography align="left" variant="body2" color="text.secondary">
                by {book.author}
              </Typography>

            </CardContent>
        <CardActions>
               
        <IconButton
        aria-label="delete"
      
        onClick={()=>updateList(book,true)}
        // style={{ position: 'absolute', bottom: 10, right: 10, color: 'red' }}
      >
        <DeleteIcon />

      </IconButton>

        </CardActions>
          </Card>
        </Grid>
      ))}
     
    </Grid>

  </Container>
  )
}

export default App
