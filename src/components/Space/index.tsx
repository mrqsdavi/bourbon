import styled from 'styled-components/native';

interface ISpace {
  space: number;
}

export default styled.View<ISpace>`
  height: ${({space}) => space}px;
  width: ${({space}) => space}px;
`;
