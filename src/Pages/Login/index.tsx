import React, { useState } from 'react';
import { Container, LoginForm } from './styles';
import gerdauBrand from '../../assets/images/gerdau_brand.png';
import userIcon from '../../assets/images/icons/user.svg';
import unlockIcon from '../../assets/images/icons/unlock.svg';
import CustomInput from '../../ Components/CustomInput';

const Login: React.FC = () => {
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');

    return (
        <Container>
            <div className="img-content">
                <img className="brand" src={gerdauBrand} alt="Banner Gerdau" />                
                <h1>COMBO DE <text>PRODUTOS</text></h1>
            </div>

            <div className="form-content">
                <LoginForm>
                    <CustomInput 
                        icon={<img src={userIcon} alt="user"/>}
                        value={login}
                        onChange={setLogin}
                        placeholder="Insira seu login"
                    />

                    <CustomInput 
                        icon={<img src={unlockIcon} alt="user"/>}
                        value={password}
                        onChange={setPassword}
                        type="password"
                        placeholder="Insira sua senha"
                    />
                        
                </LoginForm>
            </div>
        </Container>
    );
}

export default Login;