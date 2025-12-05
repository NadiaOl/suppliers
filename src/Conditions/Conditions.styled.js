import { styled } from "styled-components";

export const Card = styled.div`
display:flex;
gap: 30px;
width: 700px;

`
export const Container = styled.div`
  display: flex;
  gap: 30px;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: center;
  padding: 20px;
`;

export const Th = styled.th `
  border: 1px solid #ddd;
  padding: 8px;
  text-align: center;
    `
export const Th1 = styled.th `
  border: 1px solid #ddd;
  padding: 8px;
  text-align: center;
  backgroundColor: lightgray;


  `
export const Th2 = styled.th `
  border: 1px solid #ddd;
  padding: 8px;
  text-align: left;
  `
export const Td = styled.td `
  border: 1px solid #ddd;
  padding: 8px;
  text-align: center;
`
export const Button = styled.button`
  &:hover {
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  }
`;

export const Div = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
`;
  // display: flex;
  // alien-item: center;
  // justify-content: center