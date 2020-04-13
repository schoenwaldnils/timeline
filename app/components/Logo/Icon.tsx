import React from 'react'

export default props => (
  <svg width="1em" height="1em" viewBox="0 0 260 260" {...props}>
    <g fill="none" fillRule="evenodd">
      <mask id="b" fill="#fff">
        <circle id="a" cx="130" cy="130" r="130" />
      </mask>
      <circle id="a" cx="130" cy="130" r="130" />
      <path
        fill="#777"
        fillRule="nonzero"
        mask="url(#b)"
        d="M100 160v-60h190v60z"
      />
      <mask id="d" fill="#fff">
        <circle id="c" cx="130" cy="130" r="130" />
      </mask>
      <circle stroke="#B5B5B5" strokeWidth="60" cx="130" cy="130" r="100" />
      <path
        fill="#41AD95"
        fillRule="nonzero"
        mask="url(#d)"
        d="M160 160h-60V-30h60z"
      />
      <path fill="#000" mask="url(#d)" d="M100 100h60v60h-60z" />
    </g>
  </svg>
)
