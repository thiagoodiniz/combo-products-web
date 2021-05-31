import React, { useState } from 'react';
import { Container, LoginForm, LoginButton, RememberMeCheckbox, RememberMeText, ForgotPasswordLink, InvalidUserOrPasswordMessage } from './styles';
import gerdauBrand from '../../assets/images/gerdau_brand.png';
import userIcon from '../../assets/images/icons/user.svg';
import unlockIcon from '../../assets/images/icons/unlock.svg';
import CustomInput from '../../ Components/CustomInput';
import { FormControlLabel } from '@material-ui/core';
import theme from '../../assets/styles/theme/theme';
import { UserService } from '../../services/User';

const Login: React.FC = () => {
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(false);
    const [rememberMe, setRememberMe] = useState(false);

    const doLogin = () => {
        setLoading(true);
        setError(false);

        setTimeout(() => {
            const userSvc = new UserService();
            const isLogged = userSvc.login(login, password);
            
            setLoading(false);
            setError(!isLogged);
        }, 2500);
    }

    return (
        <Container>
            <div className="img-content">
                <img className="brand" src={gerdauBrand} alt="Banner Gerdau" />                
                <h1>COMBO DE <span>PRODUTOS</span></h1>
            </div>

            <div className="form-content">
                <div className="login-title">
                    <h2>FAÇA SEU <b>LOGIN</b></h2>
                    <hr />
                </div>

                <LoginForm>
                    <CustomInput 
                        icon={<img src={userIcon} alt="user"/>}
                        value={login}
                        onChange={setLogin}
                        placeholder="Insira seu login"
                        disabled={loading}
                    />

                    <CustomInput 
                        icon={<img src={unlockIcon} alt="user"/>}
                        value={password}
                        onChange={setPassword}
                        type="password"
                        placeholder="Insira sua senha"
                        disabled={loading}
                    />

                    {   error &&
                        <InvalidUserOrPasswordMessage>
                            Usuário ou senha inválido.
                        </InvalidUserOrPasswordMessage>
                    }

                    <div className="actions">
                        <div>
                            <FormControlLabel 
                                style={{ fontSize: '0.875rem' }}
                                control={
                                    <RememberMeCheckbox
                                        style={{ color: theme.colors.blue }}
                                        checked={rememberMe}
                                        onChange={(e) => setRememberMe(e.target.checked)}
                                    />
                                }
                                label={<RememberMeText>Me lembrar</RememberMeText>} 
                            />

                            <ForgotPasswordLink href="#!">Esqueci minha senha</ForgotPasswordLink>
                        </div>

                        <LoginButton
                            onClick={doLogin}
                            variant="contained"
                            disabled={loading}
                        >
                            Entrar
                        </LoginButton>
                    </div>

                </LoginForm>
            </div>
        </Container>
    );
}

export default Login;