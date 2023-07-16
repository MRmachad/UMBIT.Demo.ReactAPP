import styled from 'styled-components';
import { createGlobalStyle } from 'styled-components';



export const StyledSideBar = styled.div`
  width: fit-content;
  flex-direction: column;
  justify-content: center;
  background-color: red;
`;

export const StyledMainLayout = styled.div`
  flex-direction: column;
  justify-content: center;
  width: 100%;
  min-height: fit-content;
  height: inherit;
  background-color: blue;
`;

export const StyledLayout = styled.div`
  flex: content;
  overflow:auto;
  display: flex;
  min-height: 100%;
  
  max-height: max-content;
  flex-direction: row;
 `;

