import { Link } from 'react-router-dom';
import { styled } from '../styles/stitches.config';

export const RouterLink = styled(Link, {
  display: 'flex',
  alignItems: 'center',
  gap: '$small',
  outline: 'none',
  textDecorationLine: 'none',
  color: '$highContrast',
});
