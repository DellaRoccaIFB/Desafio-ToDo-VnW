import styled from "styled-components";

export const Container = styled.div`
    min-height: 100vh;
  height: fit-content;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const Box = styled.div`
  border: solid 3px white;
  width: 90%;
  min-height: 30%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  row-gap: 1vw;
  padding: 3vw 0 0 0;
`;

export const H2 = styled.h2`
  font-size: 3vw;
`;

export const BoxInputAndButton = styled.div`
  width: 57%;
  height: 2vw;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const Input = styled.input`
    height: 2vw;
    width: 23vw;
  outline: none;
  font-size: 1.2vw;
  padding: 0 0 0 1vw;
  &::placeholder {
  }
`;
export const ButtonAdd = styled.button`
  height: 1.8vw;
  width: 4vw;
  outline: none;
  font-size: 1.2vw;
  font-weight: 700;
  border: solid 1px white;
  color: white;
  background-color: #171321;
  transition: all 0.3s;
  &:hover {
    transform: scale(1.05);
    background-color: white;
    color: #171321;
    cursor: pointer;
  }
`;

export const Ul = styled.ul `
    width: 80%;
`
export const Li = styled.li `
    min-height: 3vw;
    max-width: 100%;
    display: flex;
    padding: 0 2vw;
    justify-content: space-between;
    align-items: center;
    border-bottom: solid 1px #FFF;
    border-top: solid 1px #FFF;
    margin: 0 0 1vw 0;
`

export const H4 = styled.h4 `
font-size: 1.5vw;
`
export const Content = styled.p `
font-size: 1.5vw;
max-width: 80%;
`