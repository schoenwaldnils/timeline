import styled from '@emotion/styled'
import { useTranslation } from 'next-i18next'
import { ChangeEvent, FC, forwardRef, MouseEvent, Ref } from 'react'

import { Tooltip } from '../Tooltip'
import { ReactComponent as FilterIcon } from './filterIcon.svg'

const Wrapper = styled.div`
  position: relative;
  flex-shrink: 0;
`

const IconButton = styled.button`
  display: flex;
  align-items: center;
  padding: 0;
  color: inherit;
  background: none;
  border: 0;
  /* stylelint-disable-next-line property-no-vendor-prefix */
  -webkit-appearance: none;
`

const Icon = styled(FilterIcon)`
  display: block;
  width: 1em;
  height: 1em;
  font-size: 1.25rem;

  > path {
    fill: currentColor;
  }
`

const Label = styled.label`
  padding: 0.5em 0.7em;
  font-family: inherit;
  font-size: 0.75rem;
  font-weight: 300;
  line-height: 1;
`

const InputEl = styled.div`
  display: flex;
  width: max-content;

  > ${Label} {
    flex-shrink: 0;
  }
`

const Checkbox = styled.input`
  margin: 0 0.75em 0 0;
`

interface FilterViewProps {
  isActive?: boolean
  toggleIsActive: (event: MouseEvent) => void
  handleChange: (event: ChangeEvent) => void
  filterState: {
    personsAreActive: boolean
    timesAreActive: boolean
    eventsAreActive: boolean
  }
  ref?: Ref<HTMLDivElement>
}

export const FilterView: FC<FilterViewProps> = forwardRef(
  ({ isActive = false, toggleIsActive, handleChange, filterState }, ref) => {
    const { t } = useTranslation('ui')

    const filterElements = [
      {
        id: 'persons',
        label: t('persons'),
        name: 'personsAreActive',
        value: filterState.personsAreActive,
      },
      {
        id: 'times',
        label: t('times'),
        name: 'timesAreActive',
        value: filterState.timesAreActive,
      },
      {
        id: 'events',
        label: t('events'),
        name: 'eventsAreActive',
        value: filterState.eventsAreActive,
      },
    ]

    return (
      <Wrapper ref={ref}>
        <IconButton onClick={toggleIsActive} aria-label={t('filter-elements')}>
          <Icon
            aria-hidden="true"
            focusable="false"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentcolor"
          />
        </IconButton>

        {isActive && (
          <Tooltip alignRight>
            {filterElements.map(({ id, name, label, value }) => (
              <InputEl key={`checkbox_${id}`}>
                <Label htmlFor={`checkbox_${id}`}>
                  <Checkbox
                    id={`checkbox_${id}`}
                    type="checkbox"
                    name={name}
                    onChange={handleChange}
                    checked={value}
                  />
                  {label}
                </Label>
              </InputEl>
            ))}
          </Tooltip>
        )}
      </Wrapper>
    )
  },
)
