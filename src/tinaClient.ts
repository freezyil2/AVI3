/**
 * Tina client with dynamic URL - uses same origin so edits in Tina appear on the site.
 * When running `tinacms dev`, both the app and GraphQL are on the same port.
 */
import { createClient } from 'tinacms/dist/client';
import { queries } from '../tina/__generated__/types';

const url =
  typeof window !== 'undefined'
    ? `${window.location.origin}/graphql`
    : 'http://localhost:4001/graphql';

export const client = createClient({ url, token: 'null', queries });
export default client;
