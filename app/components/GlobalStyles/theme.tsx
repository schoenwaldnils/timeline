import { css } from '@emotion/core'
import Color from 'color'

import { colors, shades } from '../../js/colors'

/**
 * 1. setting transparent to rgba value due to a safari bug
 *    https://css-tricks.com/thing-know-gradients-transparent-black/
 */

const c = color => `${Color(color).alpha(0)}`

export const themeLight = css`
  :root {
    --body-backgroundColor: ${shades.cb7};
    --body-textColor: ${shades.cb0};

    --Header-backgroundColor: #fff;
    --Header-color: ${shades.cb3};

    --TimelineNumbers-color: ${shades.cb2};

    --Timespan-color: ${shades.cb0};
    --Timespan-backgroundColor--person: ${colors.green};
    --Timespan-backgroundColor--personT: ${c(colors.green)}; /* 1 */
    --Timespan-backgroundColor--time: ${colors.yellow};
    --Timespan-backgroundColor--timeT: ${c(colors.yellow)}; /* 1 */

    --Event-color: #fff;
    --Event-backgroundColor: ${shades.cb2};

    --TimelineCursor-color: ${shades.cb0};

    --LangSwitch-color: ${colors.greenDarker};
  }
`

export const themeDark = css`
  :root {
    --body-backgroundColor: ${shades.cb2};
    --body-textColor: ${shades.cb7};

    --Header-backgroundColor: ${shades.cb0};
    --Header-color: ${shades.cb7};

    --TimelineNumbers-color: #000;

    --Timespan-color: ${shades.cb7};
    --Timespan-backgroundColor--person: ${colors.greenDarker};
    --Timespan-backgroundColor--personT: ${c(colors.greenDarker)}; /* 1 */
    --Timespan-backgroundColor--time: ${colors.yellowDarker};
    --Timespan-backgroundColor--timeT: ${c(colors.yellowDarker)}; /* 1 */

    --Event-color: ${shades.cb2};
    --Event-backgroundColor: ${shades.cb7};

    --TimelineCursor-color: ${shades.cb7};

    --LangSwitch-color: ${colors.green};
  }
`
