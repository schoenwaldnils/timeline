import React, { PureComponent } from 'react';

import { pixelToYear } from '../../js/calcTimes';
import { ourTime } from '../../js/utils';

import './TimelineCursor.css';


class TimelineCursor extends PureComponent {
  constructor() {
    super();

    this.state = {
      cursorPositionLeft: -1,
      cursorYear: undefined,
    };
    this.cursor = React.createRef();
  }

  componentDidMount() {
    this.handleCursorMovement();
  }

  componentWillUnmount() {
    document.removeEventListener('mousemove');
  }

  handleCursorMovement = () => {
    let { cursorPositionLeft, cursorYear } = this.state;
    let ticking = false;

    document.addEventListener('mousemove', ({ pageX }) => {
      cursorPositionLeft = pageX;
      const scrollPosition = JSON.parse(window.sessionStorage.getItem('scrollPosition'));
      const left = scrollPosition ? scrollPosition.left : 0;
      cursorYear = pixelToYear(left + pageX);

      if (!ticking) {
        window.requestAnimationFrame(() => {
          this.setState({
            cursorPositionLeft,
            cursorYear,
          });
          ticking = false;
        });
        ticking = true;
      }
    });
  }

  render() {
    const {
      cursorPositionLeft,
      cursorYear,
    } = this.state;

    if (!cursorYear) return null;

    return (
      <div
        className="TimelineCursor"
        style={{
          '--TimelineCursor-left': `${cursorPositionLeft}px`,
          '--TimelineCursor-year': `'${ourTime(cursorYear)}'`,
        }}
        ref={this.cursor} />
    );
  }
}

export default TimelineCursor;
