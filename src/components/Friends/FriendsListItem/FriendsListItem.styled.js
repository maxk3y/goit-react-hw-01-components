import styled from 'styled-components';

export const Item = styled.li`
  list-style: none;
  margin: 0 auto;
  margin-bottom: 10px;
  box-shadow: 0 0 2px #444;
  padding: 0;
  width: 400px;
  height: 75px;
  display: flex;
  justify-content: start;
  align-items: center;
  border: 1px solid gray;
  border-radius: 5px;
`;

export const Stats = styled.span`
  margin-left: 15px;
  width: 20px;
  height: 20px;

  background-color: ${props => {
    switch (props.isOnline) {
      case true:
        return 'green';
      case false:
        return 'red';
      default:
        return 'grey';
    }
  }};

  border-radius: 50%;
`;

export const Avatar = styled.img`
  margin-left: 10px;
  border-radius: 5px;
`;

export const Name = styled.p`
  font-weight: 500;
  margin-left: 10px;
  font-size: 20px;
`;
