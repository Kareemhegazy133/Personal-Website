import { RedLine } from '../../App.styles';
import { HeaderAppBar, NavMenuContainer, NavMenuItem, NavMenuLink, ProfileContainer } from './AppBar.styles';

function AppBar() {

  return (
    <HeaderAppBar>
        <ProfileContainer>
        <RedLine style={{ height: 2, marginLeft: '25px', marginTop: '17.5px', marginRight: '7.5px'}}/>
          KAREEM
        <RedLine style={{ height: 2, marginLeft: '7.5px', marginTop: '17.5px', marginRight: '25px'}}/>
        </ProfileContainer>

        <NavMenuContainer>
          <NavMenuLink color='inherit' href="#home">
            <NavMenuItem color="inherit">
              Home
            </NavMenuItem>
          </NavMenuLink>
          
          <NavMenuLink color='inherit' href="#about-me">
            <NavMenuItem color="inherit">
              About Me
            </NavMenuItem>
          </NavMenuLink>

          <NavMenuLink color='inherit' href="#portfolio">
            <NavMenuItem color="inherit">
              Portfolio
            </NavMenuItem>
          </NavMenuLink>
          
          <NavMenuLink color='inherit' href="#resume">
            <NavMenuItem color="inherit">
              Resume
            </NavMenuItem>
          </NavMenuLink>
        </NavMenuContainer>
        
    </HeaderAppBar>
  );
}

export default AppBar;