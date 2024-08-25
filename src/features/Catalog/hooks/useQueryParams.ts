import { useLocation } from 'react-router-dom';

export const useQueryParams = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);

  const page = searchParams.get('page') || '1';
  const category = searchParams.get('category');
  const search = searchParams.get('search');
  const minAlcohol = searchParams.get('minAlcohol');
  const maxAlcohol = searchParams.get('maxAlcohol');
  const sort = searchParams.get('sort');

  return {
    page: Number(page),
    category: category ? Number(category) : undefined,
    search: search || undefined,
    minAlcohol: minAlcohol ? Number(minAlcohol) : undefined,
    maxAlcohol: maxAlcohol ? Number(maxAlcohol) : undefined,
    sort: sort ? Number(sort) : undefined,
  };
};
