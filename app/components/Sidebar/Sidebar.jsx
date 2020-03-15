import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import cs from 'classnames'
import Resizable from 're-resizable'
import Swipe from 'react-easy-swipe'
import shallowequal from 'shallowequal'
import { MdArrowForward } from 'react-icons/md'

import SidebarContentEvent from './SidebarContentEvent'
import SidebarContentPerson from './SidebarContentPerson'
import SidebarContentTime from './SidebarContentTime'

import t from '../../js/translate'

import './Sidebar.css'

const CONTENTFUL_SPACE_ID = '###'

export class Sidebar extends PureComponent {
  state = {
    content: undefined,
    contentType: undefined,
    sidebarWidth: 320,
  }

  componentDidMount() {
    this.fetchData()

    this.setState(currentState => ({
      // eslint-disable-line react/no-did-mount-set-state
      sidebarWidth:
        window.localStorage.getItem('sidebarWidth') ||
        currentState.sidebarWidth,
    }))
  }

  componentDidUpdate(prevProps) {
    if (!shallowequal(this.props, prevProps)) {
      this.fetchData()
    }
  }

  handleResize = (e, direction, ref) => {
    const sidebarWidth = ref.getClientRects()[0].width
    window.localStorage.setItem('sidebarWidth', JSON.stringify(sidebarWidth))

    this.setState({
      sidebarWidth,
    })
  }

  fetchData() {
    const { entries, entryId } = this.props
    let { contentType } = this.props
    let content

    if (entryId) {
      entries.forEach(entry => {
        if (entry.id === entryId) {
          content = entry
          contentType = entry.typeName || contentType
        }
      })
    }

    this.setState({
      content,
      contentType,
    })
  }

  render() {
    const { entryId, changeSidebarContent } = this.props
    const {
      content: { wolLink, content, ...customContent } = {},
      contentType,
      sidebarWidth,
    } = this.state

    return (
      <Resizable
        size={{
          width: sidebarWidth,
        }}
        enable={{ left: true }}
        onResizeStop={this.handleResize}
        minWidth={320}
        maxWidth={600}
        className={cs('Sidebar', { 'is-active': !!entryId })}
      >
        <Swipe
          className="Sidebar-swipe"
          onSwipeRight={() => this.changeSidebarContent(undefined)}
        >
          <div className="Sidebar-content">
            <MdArrowForward
              className="Sidebar-icon Sidebar-icon--back"
              onClick={() => changeSidebarContent(undefined)}
            />

            {customContent && (
              <>
                {contentType === 'Person' && (
                  <SidebarContentPerson
                    {...customContent}
                    changeSidebarContent={changeSidebarContent}
                  />
                )}
                {contentType === 'Event' && (
                  <SidebarContentEvent {...customContent} />
                )}
                {contentType === 'Time' && (
                  <SidebarContentTime {...customContent} />
                )}
              </>
            )}

            <div className="Sidebar-richText u-richText">
              {wolLink && (
                <p>
                  <a href={wolLink} target="_blank" rel="noopener noreferrer">
                    WOL-link
                  </a>
                </p>
              )}

              {content && (
                <div
                  className="u-richText"
                  dangerouslySetInnerHTML={{ __html: content }}
                />
              )}

              {entryId && (
                <p>
                  <a
                    href={`https://app.contentful.com/spaces/${CONTENTFUL_SPACE_ID}/entries/${entryId}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {t('misc.contentfulEdit')}
                  </a>
                </p>
              )}
            </div>
          </div>
        </Swipe>
      </Resizable>
    )
  }
}

Sidebar.defaultProps = {
  entryId: undefined,
  entries: [],
}

Sidebar.propTypes = {
  entryId: PropTypes.string,
  entries: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      typeName: PropTypes.string,
    }),
  ),
  contentType: PropTypes.oneOf(['Person', 'Event', 'Time']).isRequired,
  changeSidebarContent: PropTypes.func.isRequired,
}
