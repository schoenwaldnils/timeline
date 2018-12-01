import React, { PureComponent, Fragment } from 'react';
import PropTypes from 'prop-types';
import cs from 'classnames';
import { MdArrowForward } from 'react-icons/md';

import SidebarContentEvent from './SidebarContentEvent';
import SidebarContentPerson from './SidebarContentPerson';
import SidebarContentTime from './SidebarContentTime';

import './Sidebar.css';


class Sidebar extends PureComponent {
  state = {
    content: undefined,
  }

  componentDidMount() {
    this.fetchData();
  }

  componentDidUpdate(prevProps) {
    if (this.props.contentElement !== prevProps.contentElement) {
      this.fetchData();
    }
  }

  fetchData() {
    const { contentElement: { id, type: contentType } } = this.props;
    let content;

    if (id && contentType) {
      this.props[`${contentType}s`].forEach((element) => {
        if (element.id === id) {
          content = element;
        }
      });
    }

    this.setState({
      content,
    });
  }

  render() {
    const { isActive, changeSidebarContent, contentElement: { type: contentType } } = this.props;
    const { content } = this.state;

    return (
      <aside className={cs('Sidebar', { 'is-active': isActive })}>
        <MdArrowForward className="Sidebar-icon Sidebar-icon--back" onClick={() => changeSidebarContent(undefined)} />
        { content &&
          <Fragment>
            {contentType === 'person' &&
              <SidebarContentPerson {...content} changeSidebarContent={changeSidebarContent} />
            }
            {contentType === 'event' && <SidebarContentEvent {...content} />}
            {contentType === 'time' && <SidebarContentTime {...content} />}
          </Fragment>
        }
      </aside>
    );
  }
}

Sidebar.defaultProps = {
  contentElement: {},
};

Sidebar.propTypes = {
  contentElement: PropTypes.shape({
    id: PropTypes.string,
    type: PropTypes.oneOf([
      'event',
      'person',
      'time',
    ]),
  }),
};

export default Sidebar;
