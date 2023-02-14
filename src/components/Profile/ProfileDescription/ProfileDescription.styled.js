import styled from 'styled-components';

export const Description = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-color: gray;
`;

export const Avatar = styled.img`
  margin-top: 50px;
  width: 200px;
  border-radius: 50%;
  box-shadow: 0 0 3px #555;
`;

export const Name = styled.p`
  margin-top: 15px;
  margin-bottom: 0;
  font-size: 24px;
  font-weight: 700;
`;

export const Tag = styled.p`
  margin-top: 15px;
  margin-bottom: 0;
  font-weight: 600;
  color: gray;
`;

export const Location = Tag;
