import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import fetch from 'isomorphic-fetch';

import { setUrlHash, getUrlHash } from '../../js/urlHash';

import Timeline from '../Timeline/Timeline';
import Sidebar from '../Sidebar/Sidebar';
import LangSwitch from '../LangSwitch/LangSwitch';

import './Page.css';

// const getDataUrl = lang => `https://timeline.api.schoen.world/dev/getTimelineData?lang=${lang}`;
const getDataUrl = lang => `https://cdn.schoen.world/dev/getTimelineData?lang=${lang}`;
// const getDataUrl = lang =>
//   `//cdn.schoen.world.s3-website.eu-central-1.amazonaws.com/timelineData/timelineData-${lang}.json`;

class Page extends PureComponent {
  constructor() {
    super();
    this.persons = [];
    this.filteredPersons = [];
    this.times = [];
    this.events = [];
    this.state = {
      activeElement: null,
    };
    this.timeline = React.createRef();
  }

  componentWillMount() {
    this.updateTimelineData();
  }

  componentDidMount() {
    this.setState({ // eslint-disable-line react/no-did-mount-set-state
      activeElement: getUrlHash() || this.state.activeElement,
    });
    this.getScrollPosition();
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.language !== this.props.language) {
      this.updateTimelineData(nextProps.language);
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

  fetchContentfulData = async (language = 'en') => {
    console.log('fetchContentfulData');

    this.setState({ loading: true });

    const url = getDataUrl(language);

    try {
      const response = await fetch(url, {
      // const response = await fetch('//d2bgg7x6s5zwg8.cloudfront.net/timelineData/timelineData-en.json', {
      // const response = await fetch('http://cdn.schoen.world/timelineData/timelineData-en.json', {
      // const response = await fetch('https://timeline.api.schoen.world/dev/getTimelineData', {
        origin: window.location.origin,
      });
      if (!response.ok) {
        throw new Error(response.statusText);
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.warn(error);
      throw error;
    }
  }

  updateTimelineData = async (language = this.props.language) => {
    console.log('updateTimelineData', language);
    const data = await this.fetchContentfulData(language);

    console.log(data);

    this.persons = data.persons || [];
    this.filteredPersons = data.filteredPersons || [];
    this.times = data.times || [];
    this.events = data.events || [];

    this.setState({ loading: false });
  }

  changeSidebarContent = (id) => {
    setUrlHash(id || null);
    this.setState({
      activeElement: id,
    });
  }

  render() {
    return (
      <div className="Page">
        <section className="Page-wrapTimeline" role="main" ref={this.timeline}>
          {!this.state.loading && this.filteredPersons && this.times && (
            <Timeline
              timespans={[...this.filteredPersons, ...this.times]}
              events={this.events}
              activeElement={this.state.activeElement}
              changeSidebarContent={this.changeSidebarContent} />
          )}
        </section>
        {!this.state.loading && (
          <Sidebar
            entries={[
              ...this.persons,
              ...this.times,
              ...this.events,
            ]}
            entryId={this.state.activeElement}
            changeSidebarContent={this.changeSidebarContent} />
        )}
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
