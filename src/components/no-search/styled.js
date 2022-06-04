import styled from "styled-components";

export const Wrapper = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  background-color: ${props => props.theme.body};
 
  

  h1 {
    font-weight: bold;
    font-size: 32px;
    color: ${props => props.theme.text};
  }
`;
