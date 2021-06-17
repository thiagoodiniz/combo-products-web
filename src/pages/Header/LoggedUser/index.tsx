import React, { useState } from 'react';
import { Container, UserButton, BottomArrow } from './styles';
import person from '../../../assets/images/icons/person.svg';
import { Menu, MenuItem } from '@material-ui/core';
import leftArrow from '../../../assets/images/icons/white-arrow-left.svg';
import { useHistory } from 'react-router-dom';
import { ERoutes } from '../../../routes';

const LoggedUser: React.FC = () => {
    const history = useHistory();

    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
  
    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
      setAnchorEl(event.currentTarget);
    };
  
    const handleClose = () => {
      setAnchorEl(null);
    };

    const logout = () => {
        handleClose();
        history.push(ERoutes.LOGIN);
    }

    return (
        <Container>
            <img src={person} alt="User" />
            <div>
                <UserButton onClick={handleClick}>
                    <span>Thiago Geib</span>
                    <BottomArrow src={leftArrow} />
                </UserButton>
                <Menu
                    anchorEl={anchorEl}
                    keepMounted
                    open={open}
                    onClose={handleClose}
                    PaperProps={{
                        style:{ marginLeft: '-0.5rem', marginTop: '2.5rem', width: '6rem' },
                    }}
                >
                    <MenuItem onClick={handleClose}>Perfil</MenuItem>
                    <MenuItem onClick={logout}>Sair</MenuItem>
                </Menu>
            </div>
        </Container>
    );
}

export default LoggedUser;