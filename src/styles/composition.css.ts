import { style } from '@vanilla-extract/css';
import { utilities } from './utilities.css';
import { vars } from './vars.css';

const wrapper = style({
  width: `min(100%, ${vars.widths.xxl})`,
  margin: '0 auto',
});

const panel = style([utilities({ padding: 'sp18' })]);

export const composition = {
  wrapper,
  panel,
};
