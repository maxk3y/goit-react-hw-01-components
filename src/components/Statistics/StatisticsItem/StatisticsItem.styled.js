import styled from 'styled-components';

export const Item = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: lightgray;
  padding: 15px;
  border: 1px solid gray;
  border-radius: 3px;
  margin-bottom: 20px;
`;

export const Label = styled.span`
  color: white;
  margin-bottom: 5px;
`;

export const Percentage = styled.span`
  font-size: 20px;
  font-weight: 600;
`;
