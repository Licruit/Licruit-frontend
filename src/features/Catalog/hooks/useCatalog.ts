import { useQuery } from '@tanstack/react-query';
import { getCatalog } from '../api/catalog.api';
import { CatalogParams } from '../types/CatalogParams';
import { CatalogItem } from '../types/catalog';

export const useCatalog = (params: CatalogParams) => {
  const {
    data: catalogData,
    error,
    isLoading,
  } = useQuery<CatalogItem, Error, CatalogItem, [string, CatalogParams]>({
    queryKey: ['catalog', params],
    queryFn: getCatalog,
  });

  return { catalogData, error, isLoading };
};
