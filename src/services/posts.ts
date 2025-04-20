import { catalogEndpoint } from '../api';
import { client } from '../utils/client';

export const requestCatalog = async () => {
  const { data } = await client.get(catalogEndpoint);
  return data;
};
