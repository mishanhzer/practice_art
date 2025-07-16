import styled, { keyframes } from 'styled-components';
import { fadeIn } from 'react-animations';

export const portalBlock = document.getElementById('modal-root')!;

const fadeInAnimation = keyframes`${fadeIn}`
export const AnimationContainer = styled.div`
  animation: 1.5s ${fadeInAnimation};
`;

export const AnimationSinglePicture = styled.div`
  animation: 0.5s ${fadeInAnimation}
`;