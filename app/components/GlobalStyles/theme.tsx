import { css } from '@emotion/react'
import Color from 'color'

import { colors, shades } from '../../data/colors'

/**
 * 1. setting transparent to rgba value due to a safari bug
 *    https://css-tricks.com/thing-know-gradients-transparent-black/
 */

const c = (color) => `${Color(color).alpha(0)}`

export const themeLight = css`
  :root {
    --body-textColor: ${shades.cb2};
    --body-linkColor: ${colors.greenDarker};
    --body-linkColorHover: ${shades.cb4};
    --body-backgroundColor: ${shades.cb10};

    --Header-color: ${shades.cb3};
    --Header-backgroundColor: #fff;

    --Tooltip-backgroundColor: #fff;

    --LangSwitch-color: ${colors.greenDarker};
    --LangSwitch-buttonDisabled: ${shades.cb6};

    --TimelineNumbers-color: ${shades.cb3};
    --TimelineNumbers-lineColor: ${shades.cb6};

    --Timespan-color: ${shades.cb0};
    --Timespan-backgroundColor--person: ${colors.green};
    --Timespan-backgroundColor--personT: ${c(colors.green)}; /* 1 */
    --Timespan-backgroundColor--time: ${colors.yellow};
    --Timespan-backgroundColor--timeT: ${c(colors.yellow)}; /* 1 */

    --Event-color: #fff;
    --Event-backgroundColor: ${shades.cb2};

    --TimelineCursor-color: ${shades.cb0};

    --Sidebar-color: ${shades.cb0};
    --Sidebar-backgroundColor: #fff;
    --Sidebar-iconColor: #fff;
    --Sidebar-iconBackgroundColor: ${colors.green};

    --Button-color: ${colors.greenDarker};
    --Button-backgroundColor: #fff;
  }
`

export const themeDark = css`
  :root {
    --body-textColor: ${shades.cb7};
    --body-linkColor: ${colors.green};
    --body-linkColorHover: ${shades.cb6};
    --body-backgroundColor: ${shades.cb0};

    --Header-color: ${shades.cb7};
    --Header-backgroundColor: ${shades.cb1};

    --Tooltip-backgroundColor: ${shades.cb1};

    --LangSwitch-color: ${colors.green};
    --LangSwitch-buttonDisabled: ${shades.cb3};

    --TimelineNumbers-color: ${shades.cb4};
    --TimelineNumbers-lineColor: ${shades.cb2};

    --Timespan-color: #fff;
    --Timespan-backgroundColor--person: ${colors.greenDark};
    --Timespan-backgroundColor--personT: ${c(colors.greenDark)}; /* 1 */
    --Timespan-backgroundColor--time: ${colors.brown};
    --Timespan-backgroundColor--timeT: ${c(colors.brown)}; /* 1 */

    --Event-color: ${shades.cb7};
    --Event-backgroundColor: ${shades.cb2};

    --TimelineCursor-color: ${shades.cb7};

    --Sidebar-color: ${shades.cb10};
    --Sidebar-backgroundColor: ${shades.cb1};
    --Sidebar-iconColor: #fff;
    --Sidebar-iconBackgroundColor: ${shades.cb2};

    --Button-color: #fff;
    --Button-backgroundColor: ${shades.cb2};
  }
`
