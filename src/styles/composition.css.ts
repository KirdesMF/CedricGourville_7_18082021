import { recipe } from '@vanilla-extract/recipes';
import { utilities } from './utilities.css';
import { vars } from './vars.css';

const wrapper = recipe({
  base: {
    margin: '0 auto',
    width: `min(100%, ${vars.widths.xxl})`,
  },
  variants: {
    height: {
      full: utilities({ height: '100%' }),
    },
  },
});

const panel = recipe({
  base: utilities({ padding: 'sp18' }),
  variants: {
    size: {
      small: utilities({ padding: 'sp14' }),
      big: utilities({ padding: 'sp48' }),
    },
  },
});

export const composition = {
  wrapper,
  panel,
};
