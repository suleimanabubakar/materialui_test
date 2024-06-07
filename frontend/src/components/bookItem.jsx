import React, { useState } from 'react';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import { ListItemAvatar,Avatar,Typography,Button } from '@mui/material';
import { useTheme } from '@emotion/react';


const BookItem = ({ book, added, updateList }) => {

  const theme= useTheme()
  
  const buttonVariant = !added ? theme.palette.primary.main : theme.palette.custom.orangeRed


  return (
    <ListItem
    
    
    secondaryAction={
        <Button variant="outlined" sx={{borderColor:buttonVariant, color: buttonVariant, '&:hover': {borderColor: buttonVariant} }} size="small" onClick={()=>updateList(book,added)} >
          {added ? 'Remove' : 'Add'}
        </Button>
      } >
        <ListItemAvatar>
            <Avatar style={{ width: '80px', height: '80px' }} variant="rounded" src={book.coverPhotoURL} /> 
        </ListItemAvatar>
      <ListItemText style={{ marginLeft: '8px' }}  className='pl-3' primary={<Typography>
    {book.title}        
      </Typography>} 
      secondary={
        <Typography color={"text.secondary"} variant="outlined" >
          by {book.author}
        </Typography>
      }

      />
    </ListItem>
  );
};

export default BookItem;
