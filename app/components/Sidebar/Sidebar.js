import React, { PureComponent, Fragment } from 'react';
import PropTypes from 'prop-types';
import cs from 'classnames';
import gql from 'graphql-tag';
import { MdArrowForward } from 'react-icons/md';
import getAllData from '../../../scripts/cfGraphql-es6';

import SidebarContentEvent from './SidebarContentEvent';
import SidebarContentPerson from './SidebarContentPerson';
import SidebarContentTime from './SidebarContentTime';

import { formatPerson } from '../../../scripts/formatData';

import './Sidebar.css';

const schemaEvent = id => gql`{
  event(id:"${id}") {
    sys {
      id
    }
    name,
    year,
  },
}`;

const schemaPerson = id => gql`{
  person(id:"${id}") {
    sys {
      id
    }
    name,
    image {
      fileName,
      url
    },
    gender,
    startYear,
    startVagueness,
    endYear,
    endVagueness,
    stillActive,
    father {
      sys {
        id
      }
      name
    },
    mother {
      sys {
        id
      }
      name
    },
    childsCollection {
      items {
        sys {
          id
        }
        name
      }
    }
  },
}`;

const schemaTime = id => gql`{
  time(id:"${id}") {
    sys {
      id
    }
    name,
    startYear,
    endYear,
  },
}`;


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

  async fetchData() {
    const { contentElement: { id, type: contentType } } = this.props;
    if (id && contentType) {
      try {
        let data;
        if (contentType === 'event') {
          data = await getAllData(schemaEvent(id));
        } else if (contentType === 'person') {
          data = await getAllData(schemaPerson(id));
        } else if (contentType === 'time') {
          data = await getAllData(schemaTime(id));
        }

        this.setState({
          content: data[contentType] && formatPerson(data[contentType]),
        });
      } catch (error) {
        console.log(error);
      }
    } else {
      this.setState({
        content: undefined,
      });
    }
  }

  render() {
    const { isActive, changeSidebarContent, contentElement: { type: contentType } } = this.props;
    const { content } = this.state;

    return (
      <aside className={cs('Sidebar', { 'is-active': isActive })}>
        <MdArrowForward className="Sidebar-icon Sidebar-icon--back" onClick={() => changeSidebarContent(undefined)} />
        { content &&
          <Fragment>
            {contentType === 'event' && <SidebarContentEvent {...content} />}
            {contentType === 'person' && <SidebarContentPerson {...content} />}
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
