import { httpClient } from '@/api/http';
import { CatalogParams } from '../types/CatalogParams';
import { CatalogItem } from '../types/catalog';

export const getCatalog = async ({
  queryKey,
}: {
  queryKey: [string, CatalogParams];
}): Promise<CatalogItem> => {
  const [, params] = queryKey;
  const { search, category, min_alcohol, max_alcohol, page } = params;
  const response = await httpClient.get('/liquors', {
    params: { search, category, min_alcohol, max_alcohol, page },
  });
  return response.data;
};

export const getCategory = async () => {
  const response = await httpClient.get('/liquors/cateory');
  return response.data;
};
