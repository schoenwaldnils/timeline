import styled from '@emotion/styled'

const headlineFontWeight = 600

export const HSmall = styled.div`
  margin-bottom: 0.5em;
  font-size: 0.75rem;
  line-height: 1.2;
  letter-spacing: 0.1em;
  text-transform: uppercase;
`

export const H1 = styled.h1`
  margin-bottom: 0.5em;
  font-size: 2rem;
  font-weight: ${headlineFontWeight};
  line-height: 1.2;

  :first-of-type {
    margin-top: 0;
  }
`

export const H2 = styled.h2`
  margin-bottom: 0.5em;
  font-size: 1.5rem;
  font-weight: ${headlineFontWeight};
  line-height: 1.2;

  :first-of-type {
    margin-top: 0;
  }
`

export const H3 = styled.h3`
  margin-bottom: 0.5em;
  font-size: 1.25rem;
  font-weight: ${headlineFontWeight};
  line-height: 1.2;

  :first-of-type {
    margin-top: 0;
  }
`
