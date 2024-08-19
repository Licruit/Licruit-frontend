import styled from 'styled-components';
import { Badge } from '@/styles/components/Badge';
import { useLiquorStore } from '../store/useLiquorStore';

function Preview() {
  const hoveredLiquor = useLiquorStore((state) => state.hoveredLiquor);

  const badges = [
    { key: 'categoryName', value: hoveredLiquor?.categoryName },
    { key: 'alcohol', value: `도수 ${hoveredLiquor?.alcohol}%` },
    { key: 'volume', value: `${hoveredLiquor?.volume}ML` },
    { key: 'price', value: `${hoveredLiquor?.price}원` },
  ];

  return (
    <PreviewWrapper $imageUrl={hoveredLiquor?.img}>
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
  max-width: 592px;
  width: auto;
  background: url(${({ $imageUrl }) => $imageUrl}) lightgray 50% / cover
    no-repeat;
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
  ${({ theme }) => theme.typo.heading.bold[42]};
  color: ${({ theme }) => theme.color.common[100]};
  margin-bottom: 14px;
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
