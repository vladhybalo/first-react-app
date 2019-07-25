import styled from 'styled-components';

const btn = styled.button`
  padding: .5rem 1rem;
  font-style: italic;
  border-radius: .3rem;
  border: 1px solid grey;
  width: auto;
  background-color: #fff;
  cursor: pointer;
  transition: background-color .3s;
  font-size: 2rem;
  margin: 2rem auto;
  display: block;
  
  &:hover {
    background-color: #f5f5f5;
  }
`;

export default btn;
