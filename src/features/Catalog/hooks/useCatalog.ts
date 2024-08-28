import { useSuspenseQuery } from '@tanstack/react-query';
import { getCatalog } from '../api/catalog.api';
import { CatalogParams } from '../types/CatalogParams';
import { CatalogItem } from '../types/catalog';
import { useQueryParams } from './useQueryParams';

export const useCatalog = () => {
  const params: CatalogParams = useQueryParams();

  const {
    data: catalogData,
    error,
    isLoading,
  } = useSuspenseQuery<
    CatalogItem,
    Error,
    CatalogItem,
    [string, CatalogParams]
  >({
    queryKey: ['catalog', params],
    queryFn: getCatalog,
  });

  return {
    catalogData,
    error,
    isLoading,
  };
};
