import { useQuery } from '@tanstack/react-query';

interface Category {
  id: number;
  name: string;
}

export const useCategory = (getCategory: () => Promise<Category[]>) => {
  const { data: categories } = useQuery<Category[], Error>({
    queryKey: ['category'],
    queryFn: getCategory,
  });

  return { categories };
};
