import { recipe } from '@vanilla-extract/recipes';
import { vars } from '../../styles/vars.css';

export const button = recipe({
  base: {
    all: 'revert',
    background: vars.color.grayBg,
    color: vars.color.appText,
    display: 'flex',
    padding: vars.spaces.small,
    border: `1px solid ${vars.color.grayBorder}`,
    borderRadius: '0.5rem',
  },
  variants: {
    discret: {
      true: {
        ':hover': {
          background: vars.color.grayBgHover,
        },
      },
    },
  },
});
