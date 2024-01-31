import styled from "styled-components"
import backgroundImg from "../../assets/background.png"

export const Container = styled.div`
  height: 100vh;

  display: flex;
  align-items: stretch;
`

export const Form = styled.form`
  width: min(64rem, 90%);

  display: grid;
  place-content: center;

  > h1 {
    color: ${({ theme }) => theme.COLORS.PINK};
    font-size: 4.8rem;
    font-weight: 700;
  }

  > p {
    color: ${({ theme }) => theme.COLORS.GRAY_200};
    font-size: 1.4rem;
  }

  > h2 {
    padding: 4.8rem 0;

    color: ${({ theme }) => theme.COLORS.WHITE_200};
    font-size: 2.4rem;
    font-weight: 500;
  }

  > div:nth-child(4),
  > div:nth-child(5) {
    margin-bottom: 0.8rem;
  }

  > button {
    margin-top: 2.4rem;
  }

  > a {
    margin-top: 4.2rem;

    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.8rem;

    color: ${({ theme }) => theme.COLORS.PINK};
  }
`

export const Background = styled.div`
  flex: 1;
  background: url(${backgroundImg}) no-repeat center center;
  background-size: cover;
`
