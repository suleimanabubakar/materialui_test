import BookIcon from '@mui/icons-material/Book';
import { Typography, Grid } from '@mui/material';



const EmptyBookList = () => {
    return (
        <>
        <Grid container justifyContent="center" alignItems="center" > 
        <BookIcon  style={{fontSize: 50, marginRight: 10}} />

<Typography color='text.secondary' variant="h5" >
        No Book Added
    </Typography>
        </Grid>
        </>
    )
}

export default EmptyBookList