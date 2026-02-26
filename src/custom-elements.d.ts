import React from 'react';

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'ody-search-form': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement> & { 'search-form-settings'?: string }, HTMLElement>;
    }
  }
}
