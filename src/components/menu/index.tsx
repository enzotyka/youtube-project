import { ButtonIcon } from "../header/styles";
import { Container, MenuItem } from "./styles";
import NotificationIcon from '../../assets/sino.png'
const items = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]

interface IProps{
    openMenu: boolean;
}

function Menu({openMenu}: IProps){
    return(
        <Container openMenu={openMenu}>
            {items.map(()=> (
                <MenuItem openMenu={openMenu}>
                    <ButtonIcon alt="" src={NotificationIcon}/>
                    <span>Inicio</span>
                </MenuItem>
            ))}
            
        </Container>
    )
}

export default Menu;