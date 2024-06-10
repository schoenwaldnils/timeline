'use client'

import { ApolloNextAppProvider } from '@apollo/experimental-nextjs-app-support'
import { PropsWithChildren } from 'react'

import { makeClient } from '@/lib/makeClient'

export const ApolloWrapper = ({ children }: PropsWithChildren) => {
  return (
    <ApolloNextAppProvider makeClient={makeClient}>
      {children}
    </ApolloNextAppProvider>
  )
}
