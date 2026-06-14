import { useTranslations } from 'next-intl'
import { ChangeEvent, forwardRef, MouseEvent, Ref } from 'react'

import { Tooltip } from '@/components/Tooltip'

import css from './Filter.module.css'
import { ReactComponent as FilterIcon } from './filterIcon.svg'

interface FilterViewProps {
  isActive?: boolean
  toggleIsActive: (event: MouseEvent) => void
  handleChange: (event: ChangeEvent<HTMLInputElement>) => void
  filterState: {
    showPersons: boolean
    showTimes: boolean
    showEvents: boolean
  }
}

export const FilterView = forwardRef(
  (
    { isActive = false, toggleIsActive, handleChange, filterState }: FilterViewProps,
    ref: Ref<HTMLDivElement>,
  ) => {
    const t = useTranslations('ui')

    const filterElements = [
      {
        id: 'persons',
        label: t('person', { count: 2 }),
        name: 'showPersons',
        value: filterState.showPersons,
      },
      {
        id: 'times',
        label: t('time', { count: 2 }),
        name: 'showTimes',
        value: filterState.showTimes,
      },
      {
        id: 'events',
        label: t('event', { count: 2 }),
        name: 'showEvents',
        value: filterState.showEvents,
      },
    ]

    return (
      <div className={css.Filter} ref={ref}>
        <button
          className={css.IconButton}
          onClick={toggleIsActive}
          aria-label={t('filter-elements')}
        >
          <FilterIcon
            className={css.Icon}
            aria-hidden="true"
            focusable="false"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentcolor"
          />
        </button>

        {isActive && (
          <Tooltip alignRight>
            {filterElements.map(({ id, name, label, value }) => (
              <label className={css.Label} key={`checkbox_${id}`}>
                <input
                  className={css.Checkbox}
                  id={`checkbox_${id}`}
                  type="checkbox"
                  name={name}
                  onChange={handleChange}
                  checked={value}
                />
                {label}
              </label>
            ))}
          </Tooltip>
        )}
      </div>
    )
  },
)
