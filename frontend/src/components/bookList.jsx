import { Box, Container, ListItem,List, TextField, Popover } from "@mui/material"
import { useState,useEffect, useRef } from "react"

import BookItem from "./bookItem"
import NotFoundTile from "./NotFoundTile"
const BookList  = ({addedBooks,setAddedBooks,books,updateList}) => {

    const [show,setShow] = useState(false)
    const [searchText,setSearchText] = useState('');
    const [filteredBooks, setFilteredBooks] = useState([]);
    const anchorRef = useRef(null);

   
    // filtering search text
    useEffect(() => {
        const filtered = books.filter((book) => book.title.toLowerCase().includes(searchText.toLowerCase()));
        setFilteredBooks(filtered);
      }, [searchText, books]);
    

  
      const handleClose = () => {
        setShow(false);
      };


    return (
        <div>

       
        
        <TextField style={{marginTop:40}}
        ref={anchorRef}
                value={searchText}
                onChange={(e)=>setSearchText(e.target.value)}
        placeholder="Search Book" fullWidth onClick={()=>setShow(!show)} />

        {show &&  filteredBooks && 

        <Popover 
        open={show}
        anchorEl={anchorRef.current}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        disableAutoFocus
        disableEnforceFocus
        PaperProps={{
          style: { width: anchorRef.current ? anchorRef.current.clientWidth : undefined }
        }}
        
        > 

    

        <Box fullWidth  sx={{ boxShadow: 3 , maxHeight: '400px', overflowY: 'scroll'}}  >
            <Container>
                <List>
                    {
                        filteredBooks.length > 0 ? filteredBooks.map(book=><BookItem book={book} updateList={updateList} added={addedBooks.find(abook=>abook.title === book.title && abook.author === book.author )} />)
                        :
                        <NotFoundTile text={'Book Title Not Available'} />
                    }
                </List>
               
            </Container>
        </Box>

        </Popover>
}
    </div>
    )
}

export default BookList;
