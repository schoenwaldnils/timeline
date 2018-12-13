import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import cfGraphql from '../../js/cfGraphql';
import query from '../../js/gqlSchema';
import { formatPerson, formatTime, formatEvent } from '../../js/formatData';
import { setUrlHash, getUrlHash } from '../../js/urlHash';
import updateTimeProps from '../../js/updateTimeProps';
import updateEventProps from '../../js/updateEventProps';


import Timeline from '../Timeline/Timeline';
import Sidebar from '../Sidebar/Sidebar';
import LangSwitch from '../LangSwitch/LangSwitch';

import './Page.css';

class Page extends PureComponent {
  constructor() {
    super();
    this.state = {
      persons: [],
      filteredPersons: [],
      times: [],
      events: [],
      activeElement: null,
    };
    this.timeline = React.createRef();
  }

  async componentWillMount() {
    this.fetchContentfulData();
  }

  componentDidMount() {
    this.setState({ // eslint-disable-line react/no-did-mount-set-state
      activeElement: getUrlHash() || this.state.activeElement,
    });
    this.getScrollPosition();
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.language !== this.props.language) {
      this.fetchContentfulData(nextProps.language);
    }
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


  async fetchContentfulData(language = this.props.language) {
    const localData = JSON.parse(window.localStorage.getItem('contentfulData'));
    let data;
    try {
      data = {
        en: await cfGraphql(query('en')),
        de: await cfGraphql(query('de')),
      };

      if (data.en || data.de) {
        window.localStorage.setItem('contentfulData', JSON.stringify(data));
      }
    } catch (error) {
      data = localData;
      console.error(error);
    }

    const {
      personCollection: { items: persons },
      timeCollection: { items: times },
      eventCollection: { items: events },
    } = data && data[language];

    persons.map(person => formatPerson(person));
    times.map(time => formatTime(time));
    events.map(event => formatEvent(event));

    const updatedPersons = persons.map(time => updateTimeProps(time));
    const updatedTimes = times.map(time => updateTimeProps(time));
    const updatedEvents = events.map((event, index) => updateEventProps({ ...event, zIndex: events.length - index }));

    const filteredPersons = updatedPersons.filter(({ startYear, endYear, stillActive }) => {
      if (startYear && (endYear || stillActive)) return true;
      return false;
    });

    this.setState({
      persons: updatedPersons,
      filteredPersons,
      times: updatedTimes,
      events: updatedEvents,
    });
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
        <section className="Page-wrapTimeline" role="main" ref={this.timeline}>
          <Timeline
            timespans={[...filteredPersons, ...times]}
            events={events}
            activeElement={activeElement}
            changeSidebarContent={this.changeSidebarContent} />
        </section>
        <Sidebar
          entries={[
            ...persons,
            ...times,
            ...events,
          ]}
          entryId={activeElement}
          changeSidebarContent={this.changeSidebarContent} />
        <div className="Page-wrapLangSwitch">
          <LangSwitch />
        </div>
      </div>
    );
  }
}

Page.propTypes = {
  language: PropTypes.oneOf([
    'en',
    'de',
  ]).isRequired,
};

export default Page;
