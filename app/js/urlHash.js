import shallowequal from 'shallowequal';

export function setUrlHash(hash, pushState = false) {
  if (typeof window !== 'undefined' && window.location) {
    const currentState = window.location.hash.replace(/^#/, '');

    let path = window.location.pathname;

    if (hash && !shallowequal(currentState, hash)) {
      path = window.location.pathname + '#' + hash;
    }

    if (pushState) {
      window.history.pushState(null, null, path);
      // const evt = document.createEvent('HTMLEvents');
      // evt.initEvent('popstate', false, true);
      // window.dispatchEvent(evt);
    } else {
      window.history.replaceState(null, null, path);
    }

    return hash;
  }

  return false;
}

export function getUrlHash() {
  if (typeof window !== 'undefined' && window.location) {
    const currentState = window.location.hash.replace(/^#/, '');
    return currentState;
  }

  return false;
}
