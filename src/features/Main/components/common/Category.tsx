import styled from 'styled-components';
import Title from './Title';

interface Props {
  title: string;
  description: string;
}

function Category({ title, description }: Props) {
  return (
    <StyledCategory>
      <Title $size='28' $color='neutral900'>
        {title}
      </Title>
      <Description>{description}</Description>
    </StyledCategory>
  );
}

const StyledCategory = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`;

const Description = styled.p`
  ${({ theme }) => theme.typo.body.medium[14]};
  color: ${({ theme }) => theme.color.neutral[600]};
`;

export default Category;
