import styled from 'styled-components';
import { Button, Checkbox } from '@material-ui/core';
import banner from '../../assets/images/banner.png';

export const Container = styled.div`
    display: flex;
    padding: 2rem 2rem 0 2rem;
    height: 100vh;
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
        display: none;

        @media(min-width: ${({ theme }) => theme.breakpoints.laptop}) {
            display: unset; 
        }

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

            & > span {
                color: transparent;
                -webkit-text-stroke: 1px ${({ theme }) => theme.colors.white};
            }
        }
    }

    & > .form-content {
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;

        & > h1 {
            text-align: center;
            font-size: 3rem;
            font-weight: 700;
            color: ${({ theme }) => theme.colors.blue};
            line-height: 0.95;
            
            & > span {
                color: transparent;
                display: block;
                -webkit-text-stroke: 1px ${({ theme }) => theme.colors.blue};
            }
        }

        @media(min-width: ${({ theme }) => theme.breakpoints.laptop}) {
            width: 40%;

            & > h1 {
                display: none;
            }
        }

        & > div.login-title {
            opacity: 0.8;
            margin: 5rem 0 12rem 0;
            & > h2 {
                font-size: 1.75rem;
                font-weight: 400;
            }
            & > hr {
                border-bottom: 1px solid ${({ theme }) => theme.colors.gray5};
                width: 42%;
                margin: 0.5rem auto;
            }
        }
    }
`;

export const LoginForm = styled.form`
    width: 20rem;

    & > .actions {
        margin-top: 3rem;
        & > div {
            display: flex;
            align-items: center;
            justify-content: space-between;
            font-size: 0.875rem;
        }
    }
`;

export const RememberMeCheckbox = styled(Checkbox)`
    && {
        color: ${({ theme}) => theme.colors.blue};
        padding-right: 0.25rem;
    }
`;

export const RememberMeText = styled.span`
    font-size: 0.875rem;
    color: ${({ theme}) => theme.colors.gray5};
`;

export const ForgotPasswordLink = styled.a`
    text-decoration: none;
    color: ${({ theme}) => theme.colors.gray5};

    &:hover {
        color: ${({ theme}) => theme.colors.blue};
    }
`;

export const InvalidUserOrPasswordMessage = styled.div`
    font-size: 0.875rem;
    color: ${({ theme }) => theme.colors.red};
    text-align: center;
    margin-top: 1rem;
`;

export const LoginButton = styled(Button)`
    && {
        width: 100%;
        background-color: ${({ theme }) => theme.colors.blue};
        color: ${({ theme }) => theme.colors.white};

        &:hover {
            background-color: ${({ theme }) => theme.colors.blue};
            opacity: 0.9;
        }

        & > span {
            font-weight: 700;
        }
    }
`;
