import React from 'react';

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'ody-search-form': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement> & { 'search-form-settings'?: string }, HTMLElement>;
    }
  }
}

declare module "*.png" {
  const value: string;
  export default value;
}
