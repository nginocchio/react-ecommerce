import * as React from 'react';

import { BrowserRouter as Router } from 'react-router-dom';
import { ChakraProvider } from "@chakra-ui/react";
import { ErrorBoundary } from 'react-error-boundary';
import { HelmetProvider } from 'react-helmet-async';
import { Button, Alert, AlertIcon } from '@chakra-ui/react';
import { Spinner } from '@chakra-ui/react';

const ErrorFallback = () => {
  return (
    <Alert status='error'>
      <AlertIcon />
      Ooops, something went wrong :(
      <Button className="mt-4" onClick={() => window.location.assign(window.location.origin)}>
        Refresh
      </Button>
    </Alert>
  );
};

type AppProviderProps = {
  children: React.ReactNode;
};

export const AppProvider = ({ children }: AppProviderProps) => {
  return (
    <React.Suspense
      fallback={
        <div className="flex items-center justify-center w-screen h-screen">
          <Spinner size="xl" />
        </div>
      }
    >
      <ErrorBoundary FallbackComponent={ErrorFallback}>
          <ChakraProvider>
            <HelmetProvider>
                {process.env.NODE_ENV !== 'test'}
                <Router>{children}</Router>
            </HelmetProvider>
          </ChakraProvider>
      </ErrorBoundary>
    </React.Suspense>
  );
};