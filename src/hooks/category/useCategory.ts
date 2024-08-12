import { getCatalogCategory } from '@/features/Catalog/api/catalog.api';
import { useQuery } from '@tanstack/react-query';

interface Category {
  id: number;
  name: string;
}

export const useCategory = () => {
  const { data: categories } = useQuery<Category[], Error>({
    queryKey: ['category'],
    queryFn: getCatalogCategory,
  });

  return { categories };
};
