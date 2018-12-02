import React, { PureComponent } from 'react';
import Swipe from 'react-easy-swipe';

import cfGraphql from '../scripts/cfGraphql';
import query from '../scripts/gqlSchema';
import { formatPerson, formatTime, formatEvent } from '../scripts/formatData';
import { setUrlHash, getUrlHash } from '../app/js/urlHash';

// import Header from '../app/components/Header/Header';
import Timeline from '../app/components/Timeline/Timeline';
import Sidebar from '../app/components/Sidebar/Sidebar';

import '../app/css/index.css';

class Page extends PureComponent {
  constructor() {
    super();
    this.state = {
      persons: [],
      times: [],
      events: [],
      activeElement: null,
    };
    this.timeline = React.createRef();
  }

  componentWillMount() {
    this.fetchContentfulData();
  }

  componentDidMount() {
    this.setState({ // eslint-disable-line react/no-did-mount-set-state
      activeElement: getUrlHash() || this.state.activeElement,
    });
    this.getScrollPosition();
  }

  getScrollPosition = () => {
    let lastKnownScrollPosition = JSON.parse(window.sessionStorage.getItem('scrollPosition')) || { top: 0, left: 0 };
    let ticking = false;
    const RefTimeline = this.timeline.current;

    setTimeout(() => {
      RefTimeline.scrollTop = lastKnownScrollPosition.top;
      RefTimeline.scrollLeft = lastKnownScrollPosition.left;
    }, 200);

    function saveScrollpositionToSessionStorrage(scrollPos) {
      if (scrollPos) window.sessionStorage.setItem('scrollPosition', JSON.stringify(scrollPos));
    }

    RefTimeline.addEventListener('scroll', () => {
      lastKnownScrollPosition = {
        top: RefTimeline.scrollTop,
        left: RefTimeline.scrollLeft,
      };

      if (!ticking) {
        window.requestAnimationFrame(() => {
          saveScrollpositionToSessionStorrage(lastKnownScrollPosition);
          ticking = false;
        });

        ticking = true;
      }
    });
  }


  async fetchContentfulData() {
    try {
      const data = await cfGraphql(query);

      const {
        personCollection: { items: persons },
        timeCollection: { items: times },
        eventCollection: { items: events },
      } = data;

      persons.map(person => formatPerson(person));
      times.map(time => formatTime(time));
      events.map(event => formatEvent(event));

      const filteredPersons = persons.filter(({ startYear, endYear, stillActive }) => {
        if (startYear && (endYear || stillActive)) return true;
        return false;
      });

      this.setState({
        persons,
        filteredPersons,
        times,
        events,
      });
    } catch (error) {
      console.error(error);
    }
  }

  changeSidebarContent = (id) => {
    setUrlHash(id || null);
    this.setState({
      activeElement: id,
    });
  }

  render() {
    const {
      persons,
      filteredPersons,
      times,
      events,
      activeElement,
    } = this.state;

    return (
      <div className="Page">
        {/* <Header /> */}
        <section className="Page-wrapTimeline" role="main" ref={this.timeline}>
          <Timeline
            persons={filteredPersons}
            times={times}
            events={events}
            changeSidebarContent={this.changeSidebarContent} />
        </section>
        <Swipe onSwipeRight={() => this.changeSidebarContent(undefined)}>
          <Sidebar
            entries={[
              ...persons,
              ...times,
              ...events,
            ]}
            entryId={activeElement}
            changeSidebarContent={this.changeSidebarContent} />
        </Swipe>
      </div>
    );
  }
}

export default Page;
