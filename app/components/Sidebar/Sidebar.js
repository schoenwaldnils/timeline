import React, { PureComponent, Fragment } from 'react';
import PropTypes from 'prop-types';
import cs from 'classnames';
import shallowequal from 'shallowequal';
import { MdArrowForward } from 'react-icons/md';

import SidebarContentEvent from './SidebarContentEvent';
import SidebarContentPerson from './SidebarContentPerson';
import SidebarContentTime from './SidebarContentTime';

import './Sidebar.css';


class Sidebar extends PureComponent {
  state = {
    content: undefined,
    contentType: undefined,
  }

  componentDidMount() {
    this.fetchData();
  }

  componentDidUpdate(prevProps) {
    if (!shallowequal(this.props, prevProps)) {
      this.fetchData();
    }
  }

  fetchData() {
    const { entries, entryId } = this.props;
    let { contentType } = this.props;
    let content;

    if (entryId) {
      entries.forEach((entry) => {
        if (entry.id === entryId) {
          content = entry;
          contentType = entry.__typename || contentType;
        }
      });
    }

    this.setState({
      content,
      contentType,
    });
  }

  render() {
    const { entryId, changeSidebarContent } = this.props;
    const { content, contentType } = this.state;

    return (
      <aside className={cs('Sidebar', { 'is-active': !!entryId })}>
        <MdArrowForward className="Sidebar-icon Sidebar-icon--back" onClick={() => changeSidebarContent(undefined)} />
        { content &&
          <Fragment>
            {contentType === 'Person' &&
              <SidebarContentPerson {...content} changeSidebarContent={changeSidebarContent} />
            }
            {contentType === 'Event' && <SidebarContentEvent {...content} />}
            {contentType === 'Time' && <SidebarContentTime {...content} />}
          </Fragment>
        }
      </aside>
    );
  }
}

Sidebar.defaultProps = {
  entryId: undefined,
};

Sidebar.propTypes = {
  entryId: PropTypes.string,
};

export default Sidebar;
