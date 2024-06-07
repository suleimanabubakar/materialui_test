import { Grid,Box } from "@mui/material"

const Loader = () => {
    return (

        <Grid container spacing={2}>
        <Grid item xs={12}>
          <Box
            sx={{
              width: '100%',
              display: 'flex',
              height: '12rem', // 48 * 0.25rem
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <div class="spinner"></div>
            </Box>
        </Grid>
      </Grid>
       
    )
} 

export default Loader