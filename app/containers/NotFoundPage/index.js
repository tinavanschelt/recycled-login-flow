/**
 * NotFoundPage
 *
 * This is the page we show when the user visits a url that doesn't have a route
 */

import React from 'react';

import { H1 } from 'components/Heading';

export default function NotFound() {
  return (
    <article>
      <H1>Page Not Found</H1>
    </article>
  );
}
