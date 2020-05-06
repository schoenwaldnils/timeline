import React from 'react'
import Head from 'next/head'
import { getInitialState } from 'graphql-hooks-ssr'
import { ClientContext } from 'graphql-hooks'

import { initGraphql } from './initGraphql'

export const withGraphQLClient = App => {
  const GraphQLHooks = props => {
    const { graphQLState } = props
    const graphQLClient = initGraphql(graphQLState)

    return (
      <ClientContext.Provider value={graphQLClient}>
        <App {...props} />
      </ClientContext.Provider>
    )
  }

  GraphQLHooks.getInitialProps = async ctx => {
    const { AppTree } = ctx

    const appProps = {}

    // Run all GraphQL queries in the component tree
    // and extract the resulting data
    const graphQLClient = initGraphql()
    let graphQLState = {}
    if (typeof window === 'undefined') {
      try {
        // Run all GraphQL queries

        graphQLState = await getInitialState({
          App: <AppTree {...appProps} />,
          client: graphQLClient,
        })
      } catch (error) {
        // Prevent GraphQL hooks client errors from crashing SSR.
        // Handle them in components via the state.error prop:
        // https://github.com/nearform/graphql-hooks#usequery
        console.error('Error while running `getInitialState`', error)
      }

      // getInitialState does not call componentWillUnmount
      // head side effect therefore need to be cleared manually
      Head.rewind()
    }

    return {
      ...appProps,
      graphQLState,
    }
  }

  return GraphQLHooks
}
