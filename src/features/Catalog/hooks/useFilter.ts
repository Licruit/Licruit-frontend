import PATH from '@/constants/path';
import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

export const useFilter = () => {
  const [selectedAlcohol, setSelectedAlcohol] = useState<string | null>(null);
  const [selectedRating, setSelectedRating] = useState<string | null>(null);

  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const navigate = useNavigate();

  const updateUrlParams = (key: string, value: string | null) => {
    if (value) {
      searchParams.set(key, value);
    } else {
      searchParams.delete(key);
    }
    navigate(`/catalog?${searchParams.toString()}`);
  };

  const selectAlcohol = (filter: string) => {
    searchParams.delete('page');
    const [min, max] = filter.match(/\d+/g)?.map(Number) || [];
    const isSelected = selectedAlcohol === filter;
    setSelectedAlcohol(isSelected ? null : filter);
    updateUrlParams('minAlcohol', isSelected ? null : min.toString());
    updateUrlParams('maxAlcohol', isSelected ? null : max.toString());
  };

  const selectRating = (filter: string) => {
    const isSelected = selectedRating === filter;
    setSelectedRating(isSelected ? null : filter);
    updateUrlParams(
      'sort',
      isSelected ? null : filter === '높은순' ? '0' : '1'
    );
  };

  const clearFilter = () => {
    const searchQuery = searchParams.get('search');

    searchParams.delete('minAlcohol');
    searchParams.delete('maxAlcohol');
    searchParams.delete('sort');
    searchParams.delete('page');

    if (searchQuery) {
      navigate(`${PATH.catalog}?search=${searchQuery}`);
    } else {
      navigate(PATH.catalog);
    }

    setSelectedRating(null);
    setSelectedAlcohol(null);
  };

  return {
    selectedRating,
    selectedAlcohol,
    selectAlcohol,
    setSelectedRating,
    setSelectedAlcohol,
    selectRating,
    clearFilter,
  };
};
