import styled from 'styled-components';
import banner from '../../assets/images/banner.png';

export const Container = styled.div`
    display: flex;
    padding: 2rem 2rem 0 2rem;
    height: 100%;
    width: 100%;
    overflow: hidden;

    & > .img-content {
        width: 60%;
        position: relative;
        top: 0.5rem;
        background-image: url(${banner});
        background-position: right;
        background-size: cover;
        border-radius: 1rem 1rem 0 0;

        & > img.brand {
            width: 13rem;
            height: 11rem;
            position: absolute;
            top: 10%;
            left: 50%;
            transform: translateX(-50%);
        }

        & > h1 {
            position: absolute;
            text-align: center;
            font-size: 5vw;
            font-weight: 700;
            color: ${({ theme }) => theme.colors.white};
            top: 55%;
            left: 50%;
            transform: translate(-50%, -55%);
            line-height: 0.95;

            & > text {
                color: transparent;
                -webkit-text-stroke: 1px ${({ theme }) => theme.colors.white};
            }
        }
    }

    & > .login-form {
        width: 40%;
    }
  
`;
