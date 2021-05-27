import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    padding: 2rem;
    height: 100%;
    width: 100%;

    & > .img-content {
        width: 60%;
        position: relative;

        & > img.banner {
            width: 100%;
            height: 100%;
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
            font-size: 5rem;
            font-weight: 700;
            color: ${({ theme }) => theme.colors.white};
            top: 55%;
            left: 50%;
            transform: translate(-50%, -55%);

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
