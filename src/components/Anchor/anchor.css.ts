import { globalStyle } from '@vanilla-extract/css';
import { recipe, RecipeVariants } from '@vanilla-extract/recipes';
import { vars } from '../../styles/vars.css';
import { makeBreakpoint } from '../../utils/breakpoints.utils';

// TODO improve name variant and org
export const anchor = recipe({
  base: {
    all: 'revert',
    color: vars.color.appText,
    display: 'inline-flex',
    alignItems: 'center',
    textDecoration: 'none',
    textTransform: 'capitalize',
    whiteSpace: 'nowrap',
    borderRadius: vars.radius.thin,

    ':hover': {
      color: vars.color.accentSolidHover,
      background: vars.color.grayBgHover,
    },
  },
  variants: {
    icon: {
      true: {
        padding: vars.spaces.sp4,
      },
    },
    text: {
      true: {
        paddingInline: vars.spaces.sp6,
        paddingBlock: vars.spaces.sp6,
        fontFamily: vars.font.text,
      },
      menu: {
        paddingInline: vars.spaces.sp12,
        paddingBlock: vars.spaces.sp6,
        fontSize: '3rem',
        fontFamily: vars.font.title,
      },
    },
    gap: {
      true: {
        gap: vars.spaces.sp6,
      },
    },
  },
});

// TODO may be change
globalStyle(`${anchor()} > span`, {
  display: 'none',
  '@media': {
    [makeBreakpoint('md')]: {
      display: 'initial',
    },
  },
});

export type AnchorVariants = RecipeVariants<typeof anchor>;
