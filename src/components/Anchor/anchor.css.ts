import { style } from '@vanilla-extract/css';
import { recipe, RecipeVariants } from '@vanilla-extract/recipes';
import { utilities } from '../../styles/utilities.css';
import { vars } from '../../styles/vars.css';

const localReset = style({
  textDecoration: 'none',
  textTransform: 'capitalize',
  whiteSpace: 'nowrap',
});

// TODO improve variants
export const anchor = recipe({
  base: [
    localReset,
    utilities({
      all: 'revert',
      display: 'inline-flex',
      alignItems: 'center',
      borderRadius: 'thin',
      color: { default: 'appText', '@hover': 'accentSolidHover' },
      background: { '@hover': 'grayBgHover' },
    }),
  ],
  variants: {
    content: {
      icon: utilities({ padding: 'sp4' }),
      text: utilities({
        paddingInline: 'sp10',
        paddingBlock: 'sp6',
      }),
    },
    fonts: {
      normal: utilities({ fontFamily: 'text' }),
      big: [
        utilities({
          fontFamily: 'title',
        }),
        { fontSize: '3rem' },
      ],
    },
    gap: {
      true: utilities({ gap: 'sp10' }),
    },
  },
});

// TODO handle pseudo elements
export const activeClassName = style([
  utilities({ position: 'relative', color: 'warning' }),
  {
    '::before': {
      content: '',
      position: 'absolute',
      left: '-5px',
      top: '50%',
      height: '10px',
      width: '10px',
      background: vars.color.accentSolid,
      transform: 'translateY(-50%)',
      borderRadius: vars.radius.rounded,
    },
  },
]);

export const textAnchor = style([
  utilities({ display: { sm: 'none', md: 'initial' } }),
]);

export type AnchorVariants = RecipeVariants<typeof anchor>;
