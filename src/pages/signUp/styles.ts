import styled, { keyframes } from "styled-components";

export const Container = styled.div`
  font-family: "Poppins", sans-serif;

  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: space-between;

  align-items: stretch;
`;

export const Content = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
`;

const appearFromLeft = keyframes`
  from {
    opacity: 0;
    transform: translateX(-50px)
  }
  to {
    opacity: 1;
    transform: translateX(0) ;
  }

`;

export const AnimationContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  animation: ${appearFromLeft} 1s;

  form {
    max-width: 430px;
    width: 100%;
    text-align: center;
    padding: 0 40px;

    h1 {
      font-size: 36px;
      margin-bottom: 24px;
      color: #404040;
      font-weight: bold;
      padding-bottom: 36px;
    }

    /* a {
      color: #f4ede8;
      display: block;
      margin-top: 24px;
      text-decoration: none;
      transition: color 0.2s;

    
    } */
  }
  .link-register-account-mobile {
    margin-top: 24px;
    font-size: 13px;
    font-weight: 500;
    color: #666;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;

    .link {
      color: #666;
      margin-left: 6px;
    }

    @media (min-width: 768px) {
      display: none;
    }
  }

  /* > a {
    color: #ff9000;
    display: block;
    margin-top: 10px;
    text-decoration: none;
    transition: color 0.2s;
    display: flex;
    align-items: center;

    svg {
      margin-right: 16px;
    }
   
  } */
`;

export const Background = styled.div`
  flex: 1;
  background-color: #2e2e2e;
  color: #ffff;
  display: flex;
  justify-content: center;
  align-items: center;

  white-space: nowrap;

  .content {
    display: flex;
    flex-direction: column;
    padding: 16px;
    h2 {
      font-size: 36px;
    }

    .link-register-account {
      margin-top: 40px;
      display: flex;
      justify-content: center;
      align-items: center;
      width: 190px;
      height: 60px;
      font-weight: bold;
      border-radius: 30px;
      border: 1px solid #ffff;
      color: #ffff;
    }
  }

  @media (max-width: 768px) {
    display: none;
  }
`;
