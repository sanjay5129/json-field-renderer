import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';

export default function ListComponent({ li }) {
  return (
    <List>
      {li.map(item => (
        <ListItem key={li.id || li}>
          <ListItemText primary={item} />
        </ListItem>
      ))}
    </List>
  )
}