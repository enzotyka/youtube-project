import { 
    ButtonContainer,
    ButtonIcon,
    Container,
    LogoContainer, 
    SearchContainer, 
    SearchInputContainer,
    SearchInput,
    SearchButton,
    HeaderButton
} from "./styles";
import HamburguerIcon from "../../assets/hamburger.png";
import Logo from '../../assets/YouTube-Logo.png';
import SearchIcon from "../../assets/search.png";
import MicIcon from "../../assets/microfone-gravador.png";
import VideoIcon from "../../assets/video.png";
import NotificationICon from "../../assets/sino.png";


function Header(){
    return(
        <Container>
            <LogoContainer>
            <ButtonContainer margin='0 10px 0 0'>
                <ButtonIcon alt="" src={HamburguerIcon} />
            </ButtonContainer>
            <img 
            style={{ cursor: 'pointer', width: '100px' }} 
            alt='' 
            src={Logo} 
            />
            </LogoContainer>

            <SearchContainer>
                <SearchInputContainer>
                    <SearchInput placeholder="Pesquisar"/>
                </SearchInputContainer>
                <SearchButton>
                    <ButtonIcon alt="" src={SearchIcon} />
                </SearchButton>
                <ButtonContainer margin='0 0 0 10px'>
                    <ButtonIcon alt="" src={MicIcon}/>
                </ButtonContainer>
            </SearchContainer>

            <HeaderButton>
            <ButtonContainer margin='0 0 0 10px'>
                <ButtonIcon alt="" src={VideoIcon}/>
            </ButtonContainer>
            <ButtonContainer margin='0 0 0 10px'>
                <ButtonIcon alt="" src={NotificationICon}/>
            </ButtonContainer>
            <ButtonContainer margin='0 0 0 10px'>
                E
            </ButtonContainer>
            

            </HeaderButton>
        </Container>
    )
}

export default Header;