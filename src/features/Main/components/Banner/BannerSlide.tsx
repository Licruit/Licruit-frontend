import { slide } from '@/constants/slide';
import { Badge } from '@/styles/components/Badge';
import styled from 'styled-components';

interface Props {
  slideNumber: 0 | 1;
}

function BannerSlide({ slideNumber }: Props) {
  const { badge, title, description } = slide[slideNumber];
  return (
    <Container>
      <Badge $size='sm' $type='black'>
        {badge}
      </Badge>
      <h1>{title}</h1>
      <p>{description}</p>
    </Container>
  );
}

export default BannerSlide;

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 12px;

  h1 {
    ${({ theme }) => theme.typo.heading.bold[42]}
    color: ${({ theme }) => theme.color.neutral[900]};
  }

  p {
    ${({ theme }) => theme.typo.body.medium[16]}
    color: ${({ theme }) => theme.color.neutral[600]};
  }
`;
