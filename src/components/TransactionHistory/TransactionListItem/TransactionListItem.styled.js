import styled from 'styled-components';

export const TableValue = styled.td`
  padding-top: 10px;
  padding-bottom: 10px;
  width: 100%;
  border: 1px solid lightgray;
  border-radius: 2px;
`;

export const TableBody = styled.tbody`
  font-size: 16px;
  &:nth-of-type(even) {
    background-color: white;
  }
  &:nth-of-type(odd) {
    background-color: whitesmoke;
  }
`;
