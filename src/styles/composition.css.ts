import { recipe } from '@vanilla-extract/recipes';
import { utilities } from './utilities.css';
import { vars } from './vars.css';

const wrapper = recipe({
  base: {
    margin: '0 auto',
    width: `min(100%, ${vars.sizes['2xl']})`,
  },
  variants: {
    height: {
      full: utilities({ height: '100%' }),
    },
    width: {
      content: {
        width: `min(100%, ${vars.sizes.xl})`,
      },
    },
  },
});

const panel = recipe({
  base: utilities({ padding: 'lg' }),
  variants: {
    size: {
      small: utilities({ padding: 'sm' }),
      big: utilities({ padding: { sm: 'xl', md: '2xl' } }),
    },
  },
});

export const composition = {
  wrapper,
  panel,
};
