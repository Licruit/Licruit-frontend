import Tab from '@/components/Header/Tabs';
import styled from 'styled-components';

function CategoryTab() {
  return (
    <CategoryTabWrapper>
      <Tab type='order' queryKey='filter' />
    </CategoryTabWrapper>
  );
}

const CategoryTabWrapper = styled.div`
  display: flex;
  gap: 10px;
`;

export default CategoryTab;
