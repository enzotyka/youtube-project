import { Container, MenuItem } from "./styles";

const items = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]

function Menu(){
    return(
        <Container>
            {items.map(()=> (
                <MenuItem>
                inicio
                </MenuItem>
            ))}
            
        </Container>
    )
}

export default Menu;