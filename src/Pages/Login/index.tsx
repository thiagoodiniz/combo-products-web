import React from 'react';
import { Container } from './styles';
import banner from '../../assets/images/banner.png';
import gerdauBrand from '../../assets/images/gerdau_brand.png';

const Login: React.FC = () => {
    return (
        <Container>
            <div className="img-content">
                <img className="banner" src={banner} alt="Banner Gerdau" />
                <img className="brand" src={gerdauBrand} alt="Banner Gerdau" />
                
                <h1>COMBO DE <text>PRODUTOS</text></h1>
            </div>

            <div className="login-form">
                formulario
            </div>
        </Container>
    );
}

export default Login;