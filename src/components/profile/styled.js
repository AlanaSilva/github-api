import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  align-items: flex-start;
`;

export const WrapperInfoUser = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  margin-left: 8px;
  height: 200px;
  background-color: ${props => props.theme.body};
  color: ${props => props.theme.text};

  h1 {
    font-size: 32px;
    font-weight: bold;
    color: ${props => props.theme.text};
  }

  h3 {
    font-size: 18px;
    font-weight: bold;
    color: ${props => props.theme.text};
  }

  h4 {
    font-size: 16px;
    font-weight: bold;
    color: ${props => props.theme.text};
  }
`;

export const WrapperStatusCount = styled.div`
  display: flex;
  align-items: center;
  div {
    margin: 8px;
    text-align: center;
    color: ${props => props.theme.text};
  }
`;

export const WrapperUserGeneric = styled.div`
  display: flex;
  align-items: center;
  margin-top: 8px;
  color: ${props => props.theme.text};

  h3 {
    margin-right: 8px;
    color: ${props => props.theme.text};

  }

  a {
    font-size: 18px;
    color: ${props => props.theme.nameColor};
    font-weight: bold;
  }
`;

export const WrapperImage = styled.img`
  border-radius: 50%;
  width: 200px;
  margin: 8px;
`;
