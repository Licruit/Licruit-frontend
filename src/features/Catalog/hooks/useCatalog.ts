import { useQuery } from '@tanstack/react-query';
import { useLocation } from 'react-router-dom';
import { getCatalog } from '../api/catalog.api';
import { CatalogParams } from '../types/CatalogParams';
import { CatalogItem } from '../types/catalog';

export const useCatalog = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);

  const page = searchParams.get('page') || '1';
  const category = searchParams.get('category');
  const search = searchParams.get('search');
  const minAlcohol = searchParams.get('minAlcohol');
  const maxAlcohol = searchParams.get('maxAlcohol');
  const sort = searchParams.get('sort');

  const params: CatalogParams = {
    page: Number(page),
    category: category ? Number(category) : undefined,
    search: search || undefined,
    minAlcohol: minAlcohol ? Number(minAlcohol) : undefined,
    maxAlcohol: maxAlcohol ? Number(maxAlcohol) : undefined,
    sort: sort ? Number(sort) : undefined,
  };
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
