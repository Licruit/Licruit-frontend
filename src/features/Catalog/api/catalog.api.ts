import { httpClient } from '@/api/http';
import { CatalogParams } from '../types/CatalogParams';
import { CatalogItem } from '../types/catalog';

export const getCatalog = async ({
  queryKey,
}: {
  queryKey: [string, CatalogParams];
}): Promise<CatalogItem> => {
  const [, params] = queryKey;
  const { search, category, minAlcohol, maxAlcohol, page } = params;
  const response = await httpClient.get('/liquors', {
    params: { search, category, minAlcohol, maxAlcohol, page },
  });
  console.log(response.data);
  return response.data;
};

export const getCatalogCategory = async () => {
  try {
    const response = await httpClient.get('/liquors/category');
    return response.data;
  } catch (err) {
    return [];
  }
};
