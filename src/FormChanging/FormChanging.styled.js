import { styled } from "styled-components";

export const Container = styled.div`
display: flex;
flex-direction: column;
gap: 10px
`



export const List = styled.ul`
  padding: 10px;
  background-color: #e2e3e5;
  width: 100%;
  display: flex;
  gap: 15px;
  flex-direction: column;
  flex-wrap: wrap;
  margin-bottom: 0px;
  border-radius: 5px;
  font-weight: bold;
`;

export const Product = styled.li`
font-weight: 400;
  border-radius: 5px;
  display: flex;
  gap: 15px;
  padding: 5px 5px 5px 5px;
  flex-wrap: nowrap;
  justify-content: space-between;
  background-color: white;
  align-items: center;
`;
export const Name = styled.p`
  margin-bottom: 0;
`;

export const AddButton = styled.button`
  margin-top: 10px;
  width: 100%;
`;
export const Button = styled.button`
  height: 30px;
  display: flex;
  align-items: center;
`;
