import styled from 'styled-components'

const btn = styled.button`
  font-size: 1.5em;
  color: #222;
  font-style: italic;
  padding: .3rem 1rem;
  border: 1px solid grey;
  width: auto;
  display: block;
  margin: 0 auto;
  cursor: pointer;
  transition: background-color .3s;  
  
  &:hover {
    background-color: #ddd;
  }
`;

export default btn;
