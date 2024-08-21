import styled from 'styled-components';
import LiquorUrl from 'public/assets/images/main/mock-image1 38.svg';
import { Badge } from '@/styles/components/Badge';
import { useLiquorStore } from '../store/useLiquorStore';

function Preview() {
  const hoveredLiquor = useLiquorStore((state) => state.hoveredLiquor);

  const badges = [
    { key: 'categoryName', value: hoveredLiquor?.categoryName ?? '탁주' },
    {
      key: 'alcohol',
      value: hoveredLiquor?.alcohol ? `도수 ${hoveredLiquor.alcohol}%` : '도수',
    },
    {
      key: 'volume',
      value: hoveredLiquor?.volume ? `${hoveredLiquor.volume}ML` : '양',
    },
    {
      key: 'price',
      value: hoveredLiquor?.price ? `${hoveredLiquor.price}원` : '가격',
    },
  ];

  return (
    <PreviewWrapper $imageUrl={hoveredLiquor?.img || LiquorUrl}>
      <Content>
        <Title>{hoveredLiquor?.title}</Title>
        <LiquorDescription>{hoveredLiquor?.content}</LiquorDescription>
        <BadgeBox>
          {badges.map((badge) =>
            badge.value ? (
              <Badge $size='lg' $type='white' key={badge.key}>
                {badge.value}
              </Badge>
            ) : null
          )}
        </BadgeBox>
      </Content>
    </PreviewWrapper>
  );
}

export default Preview;

const PreviewWrapper = styled.div<{ $imageUrl: string | undefined }>`
  width: auto;
  max-width: 592px;
  background: url(${({ $imageUrl }) => $imageUrl}) white 50% / contain no-repeat;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  align-items: flex-start;
  justify-content: end;

  width: 100%;
  height: calc(100vh - 76px);
  padding: 20px;

  background: linear-gradient(0deg, #000 0%, rgb(0 0 0 / 0%) 100%);
`;

const Title = styled.div`
  margin-bottom: 14px;
  ${({ theme }) => theme.typo.heading.bold[42]};
  color: ${({ theme }) => theme.color.common[100]};
`;

const BadgeBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
`;

const LiquorDescription = styled.p`
  ${({ theme }) => theme.typo.body.medium[14]};
  color: ${({ theme }) => theme.color.neutral[500]};
  margin-bottom: 20px;
`;
