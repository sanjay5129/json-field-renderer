import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';

export default function ListComponent({ li, bulletList }) {
  let style = {};
  if (bulletList) {
    style = {
      list: { listStyleType: 'disc', pl: 4 },
      listItem: { display: 'list-item' },
    }
  }
  return (
    <List sx={style.list}>
      {li.map(item => (
        <ListItem sx={style.listItem} key={li.id || li}>
          <ListItemText primary={item} />
        </ListItem>
      ))}
    </List>
  )
}