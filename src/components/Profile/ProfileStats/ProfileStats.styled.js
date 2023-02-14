import styled from 'styled-components';

export const StatsWrap = styled.div`
  margin-top: 40px;
  width: 100%;
  border-top: 1px solid lightgray;
`;

export const Stats = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0;
  padding: 0;
  list-style: none;
  width: 100%;
  background-color: #f7f7f7;
  border-radius: 5px;
`;

export const StatsInfo = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  border-right: 1px solid lightgray;
  border-left: 1px solid lightgray;
  &:nth-last-of-type(1) {
    border-right: none;
  }
  &:nth-last-of-type(2) {
    border-right: none;
    border-left: none;
  }
  &:nth-last-of-type(3) {
    border-left: none;
  }
`;

export const Label = styled.p`
  padding-top: 15px;
  margin: 0;
  color: gray;
`;

export const Quantity = styled.p`
  margin: 0;
  padding-top: 15px;
  padding-bottom: 15px;
  font-weight: 600;
  color: #0e2533;
`;
