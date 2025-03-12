import { Container, MenuItem } from "./styles";

const items = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]

interface IProps{
    openMenu: boolean;
}

function Menu({openMenu}: IProps){
    return(
        <Container openMenu={openMenu}>
            {items.map(()=> (
                <MenuItem>
                inicio
                </MenuItem>
            ))}
            
        </Container>
    )
}

export default Menu;