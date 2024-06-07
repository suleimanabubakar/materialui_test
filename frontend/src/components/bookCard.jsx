import {Typography, Container, Grid,  Card, CardMedia, CardContent, IconButton, CardActions} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

const BookCard = ({book,updateList}) => {
    return (
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
 
  >
    <DeleteIcon />

  </IconButton>

    </CardActions>
      </Card>
    )
}

export default BookCard;