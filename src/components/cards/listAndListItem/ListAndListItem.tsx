import { Delete, Drafts, Send, Star } from "@mui/icons-material"
import  InboxIcon  from "@mui/icons-material/Inbox"
import { List, ListItem, ListItemIcon, ListItemText } from "@mui/material"

const ListAndListItem = () => {
  return (
    <List>
      {/* Item 1 */}
        <ListItem>
            <ListItemIcon>
                <InboxIcon/>
            </ListItemIcon>
            <ListItemText primary="Item da lista" secondary="Descrição"/>
        </ListItem>
         {/* Item 2 */}
      <ListItem>
        <ListItemIcon>
          <Star />
        </ListItemIcon>
        <ListItemText primary="Favoritos" secondary="Itens marcados" />
      </ListItem>

      {/* Item 3 */}
      <ListItem>
        <ListItemIcon>
          <Send />
        </ListItemIcon>
        <ListItemText primary="Enviados" secondary="E-mails enviados" />
      </ListItem>
      {/* Item 4 */}
      <ListItem>
        <ListItemIcon>
          <Drafts />
        </ListItemIcon>
        <ListItemText primary="Rascunhos" secondary="E-mails não enviados" />
      </ListItem>

      {/* Item 5 */}
      <ListItem>
        <ListItemIcon>
          <Delete />
        </ListItemIcon>
        <ListItemText primary="Lixeira" secondary="Itens excluídos" />
      </ListItem>
    </List>
  )
}

export default ListAndListItem