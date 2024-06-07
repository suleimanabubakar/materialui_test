import { ListItem, ListItemText, Typography } from "@mui/material"

const NotFoundTile = ({text}) => {
    return (
        <ListItem>
            <ListItemText>
                <Typography>{text} </Typography>
            </ListItemText>
        </ListItem>
    )
}


export default NotFoundTile