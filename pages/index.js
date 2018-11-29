import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Swipe from 'react-easy-swipe';

import '../app/css/index.css';

// import Header from '../app/components/Header/Header';
import Timeline from '../app/components/Timeline/Timeline';
import Sidebar from '../app/components/Sidebar/Sidebar';
import { formatPerson, formatTime, formatEvent } from '../scripts/formatData';

class Page extends PureComponent {
  state = {
    activeElement: undefined,
  }

  changeSidebarContent = (id, type) => {
    this.setState({
      activeElement: {
        id,
        type,
      },
    });
  }

  render() {
    const { persons, times, events } = this.props;
    const { activeElement } = this.state;
    return (
      <div className="Page">
        {/* <Header /> */}
        <section className="Page-wrapTimeline" role="main">
          <Timeline persons={persons} times={times} events={events} changeSidebarContent={this.changeSidebarContent} />
        </section>
        <Swipe onSwipeRight={() => this.changeSidebarContent(undefined)}>
          <Sidebar
            isActive={activeElement && activeElement.id}
            contentElement={activeElement}
            changeSidebarContent={this.changeSidebarContent} />
        </Swipe>
      </div>
    );
  }
}

Page.getInitialProps = async ({ query: { data } }) => {
  const {
    personCollection: { items: persons },
    timeCollection: { items: times },
    eventCollection: { items: events },
  } = data;

  return {
    persons: persons.map(person => formatPerson(person)),
    times: times.map(time => formatTime(time)),
    events: events.map(event => formatEvent(event)),
  };
};

Page.propTypes = {
  persons: PropTypes.array,
  times: PropTypes.array,
  events: PropTypes.array,
};

Page.defaultProps = {
  persons: null,
  times: null,
  events: null,
};

export default Page;
