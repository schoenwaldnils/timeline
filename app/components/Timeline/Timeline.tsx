import React from 'react'
import styled from '@emotion/styled'

import { Event } from '../Event'
import { Timespan } from '../Timespan'

import { getTimelineWidth } from './getTimelineWidth'
import { time } from '../../js/constants'
import colors from '../../js/colors'

const Wrapper = styled.div`
  position: relative;
  width: ${(p: { width: number }) => `${p.width}px`};
  min-height: 100vh;
  font-size: 10px;
  background: url('data:image/svg+xml;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAAACCAYAAAAdK5NMAAAABGdBTUEAALGPC/xhBQAAACpJREFUOBFj3Ldr638GIFDX1AVRo2A0BEZDACkEmJDYo8zREBgNAbQQAADubQOtULVrKQAAAABJRU5ErkJggg==');
  background-size: 100px 1px;
  background-repeat: repeat;

  &::before,
  &::after {
    content: '';
    position: absolute;
    top: 0;
    height: 100%;
    background-size: 100px;
  }

  &::before {
    left: 0;
    width: ${time.YEARS_BEFORE_ZERO}px;
    background-image: linear-gradient(
      to left,
      transparent calc(100% - 1px),
      ${colors.cb3} calc(100% - 1px)
    );
    background-position-x: right;
  }

  &::after {
    left: ${time.YEARS_BEFORE_ZERO}px;
    width: ${time.YEARS_AFTER_ZERO + 1}px;
    background-image: linear-gradient(
      to right,
      ${colors.cb3} 1px,
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

const ScaleNumber = styled.div`
  width: ${({ scale }) => `${scale * 100}px`};
  padding-left: 0;
  font-family: monospace;
  font-size: 10px;
  color: ${colors.cb3};

  [data-type='positive'] > &:first-of-type {
    width: ${({ scale }) => `${scale * 99}px`};
  }
`

const Content = styled.div`
  position: relative;
  margin-top: 1rem;
`

interface Props {
  scale?: number
  events?: Array<Object>
  timespans?: Array<Object>
}

export const Timeline: React.FC<Props> = ({ scale, events, timespans }) => {
  const width = getTimelineWidth(scale)

  console.log({ events, timespans })

  const scaleNumberNegativ = []
  for (let i = 0; i <= 44; i += 1) {
    scaleNumberNegativ.push(
      <ScaleNumber scale={scale} key={i}>
        {i * -100}
      </ScaleNumber>,
    )
  }

  const scaleNumberPositive = []
  for (let i = 1; i <= 22; i += 1) {
    scaleNumberPositive.push(
      <ScaleNumber scale={scale} key={i}>
        {i * 100}
      </ScaleNumber>,
    )
  }

  return (
    <Wrapper width={width}>
      <Numbers>
        <NumbersBlock>{scaleNumberNegativ.reverse()}</NumbersBlock>
        <NumbersBlock data-type="positive">{scaleNumberPositive}</NumbersBlock>
      </Numbers>
      <Content>
        <div>
          {events.map(({ id, name, year }) => (
            <Event id={id} name={name} year={year} key={id}></Event>
          ))}
        </div>
        <div>
          {timespans.map(timespan => (
            <Timespan {...timespan} key={timespan.id} />
          ))}
        </div>
      </Content>
    </Wrapper>
  )
}

Timeline.defaultProps = {
  scale: 1,
  events: [],
  timespans: [],
}
