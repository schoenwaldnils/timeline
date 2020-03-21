import React from 'react'
import styled from '@emotion/styled'
import useMousePosition from '@react-hook/mouse-position'

import { Event, EventProps } from '../Event'
import { Timespan, TimespanProps } from '../Timespan'

import { getTimelineWidth } from './getTimelineWidth'
import { time, zIndexes } from '../../data/constants'
import { shades } from '../../js/colors'
import { Sidebar } from '../Sidebar'
import { LangSwitch } from '../LangSwitch'
import { TimelineCursor } from '../TimelineCursor'
import { scroller } from '../../js/scroller'

interface WrapperProps {
  width: number
  scale: number
}

const Wrapper = styled.div<WrapperProps>`
  position: relative;
  width: ${({ width }) => `${width}px`};
  min-height: 100vh;
  font-size: 10px;
  background: url('data:image/svg+xml;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAAACCAYAAAAdK5NMAAAABGdBTUEAALGPC/xhBQAAACpJREFUOBFj3Ldr638GIFDX1AVRo2A0BEZDACkEmJDYo8zREBgNAbQQAADubQOtULVrKQAAAABJRU5ErkJggg==');
  background-repeat: repeat;
  background-size: 100px 1px;

  &::before,
  &::after {
    content: '';
    position: absolute;
    top: 0;
    height: 100%;
    background-size: ${({ scale }) => `${scale * 100}px`};
  }

  &::before {
    left: 0;
    width: ${({ scale }) => `${scale * time.YEARS_BEFORE_ZERO}px`};
    background-image: linear-gradient(
      to left,
      transparent calc(100% - 1px),
      ${shades.cb3} calc(100% - 1px)
    );
    background-position-x: right;
  }

  &::after {
    left: ${({ scale }) => `${scale * time.YEARS_BEFORE_ZERO}px`};
    width: ${({ scale }) => `${scale * time.YEARS_AFTER_ZERO + 1}px`};
    background-image: linear-gradient(
      to right,
      ${shades.cb3} 1px,
      transparent 1px
    );
    background-position-x: 0;
  }
`

const Numbers = styled.div`
  position: sticky;
  top: 0.25em;
  display: flex;
  padding-right: 17px;
  padding-left: 5px;
`

const NumbersBlock = styled.div`
  display: flex;
`

interface ScaleNumberProps {
  scale?: number
}

const ScaleNumber = styled.div<ScaleNumberProps>`
  width: ${({ scale }) => `${scale * 100}px`};
  padding-left: 0;
  font-family: monospace;
  font-size: 10px;
  color: ${shades.cb3};

  [data-type='positive'] > &:first-of-type {
    width: ${({ scale }) => `${scale * 100 - 1}px`};
  }
`

const Content = styled.div`
  position: relative;
  z-index: ${zIndexes.timelineContent};
  display: grid;
  grid-template-areas:
    'times'
    'events';
  grid-gap: 0.5rem;
  margin-top: 1.5rem;
`

const StyledLangSwitch = styled(LangSwitch)`
  position: fixed;
  bottom: 0;
  left: 0;
  z-index: ${zIndexes.langSwitch};
`

interface TimelineProps {
  scale?: number
  events?: Array<Object>
  timespans?: Array<Object>
}

export const Timeline: React.FC<TimelineProps> = ({
  scale,
  events,
  timespans,
}) => {
  scroller() // read and set scroll position
  const [mousePosition, ref] = useMousePosition()

  const width = getTimelineWidth(scale)

  const scaleNumberNegativ = []
  for (let i = 0; i <= time.YEARS_BEFORE_ZERO / 100; i += 1) {
    scaleNumberNegativ.push(
      <ScaleNumber scale={scale} key={`pos${i}`}>
        {i * -100}
      </ScaleNumber>,
    )
  }

  const scaleNumberPositive = []
  for (let i = 1; i <= time.YEARS_AFTER_ZERO / 100; i += 1) {
    scaleNumberPositive.push(
      <ScaleNumber scale={scale} key={`neg${i}`}>
        {i * 100}
      </ScaleNumber>,
    )
  }

  return (
    <Wrapper ref={ref} width={width} scale={scale}>
      <Numbers>
        <NumbersBlock>{scaleNumberNegativ.reverse()}</NumbersBlock>
        <NumbersBlock data-type="positive">{scaleNumberPositive}</NumbersBlock>
      </Numbers>
      <Content>
        {timespans.map((timespan: TimespanProps) => (
          <Timespan {...timespan} key={timespan.id} />
        ))}
        {events.map((event: EventProps) => (
          <Event {...event} key={event.id} />
        ))}
      </Content>
      <Sidebar />
      <StyledLangSwitch />
      <TimelineCursor
        pixelYear={mousePosition.x}
        year={mousePosition.clientX}
      />
    </Wrapper>
  )
}

Timeline.defaultProps = {
  scale: 1,
  events: [],
  timespans: [],
}
