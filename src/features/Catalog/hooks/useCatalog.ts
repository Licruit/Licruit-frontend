import { useQuery } from '@tanstack/react-query';
import { getCatalog, getCategory } from '../api/catalog.api';
import { CatalogParams } from '../types/CatalogParams';
import { CatalogItem } from '../types/catalog';

interface Category {
  id: number;
  name: string;
}

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
export const useCategory = () => {
  const { data: categories } = useQuery<
    Category[],
    Error,
    Category[],
    string[]
  >({
    queryKey: ['category'],
    queryFn: getCategory,
  });

  return { categories };
};
