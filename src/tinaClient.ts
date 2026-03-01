/**
 * Tina client - uses Tina Cloud Content API in production, local GraphQL in dev.
 * In production, the site fetches from Tina Cloud (content.tinajs.io).
 * In dev (tinacms dev), Vite proxies /graphql to localhost:4001.
 */
import { createClient } from 'tinacms/dist/client';
import { queries } from '../tina/__generated__/types';

const isBrowser = typeof window !== 'undefined';
const isLocalhost =
  isBrowser &&
  (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1');
const clientId = import.meta.env.VITE_TINA_CLIENT_ID;
const token = import.meta.env.VITE_TINA_TOKEN;
const branch = import.meta.env.VITE_TINA_BRANCH || 'main';

const url = isLocalhost
  ? (isBrowser ? `${window.location.origin}/graphql` : 'http://localhost:4001/graphql')
  : clientId
    ? `https://content.tinajs.io/content/${clientId}/github/${branch}`
    : (isBrowser ? `${window.location.origin}/graphql` : 'http://localhost:4001/graphql');

export const client = createClient({
  url,
  token: token || 'null',
  queries,
});
export default client;
