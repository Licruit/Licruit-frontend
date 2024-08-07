import MockImage from 'public/assets/images/main/mock-image1 38.svg';
import Button from '@/components/Button/Button';
import styled from 'styled-components';

function ContentListItem() {
  return (
    <ListItem>
      <Date>2024.07.21</Date>
      <Devider />
      <ItemInfoWrapper>
        <img src={MockImage} alt='liquor' />
        <ItemInfo>
          <StateBadge>
            <div className='icon' />
            신청
          </StateBadge>
          <ItemTitle>우아하고 순수한 첫번째 고래백경 13. 탁주</ItemTitle>
          <ItemDesc>Lorem ipsum dolor sit amet, consectetur wdqdqw...</ItemDesc>
        </ItemInfo>
      </ItemInfoWrapper>
      <Button $style='outlined' $theme='neutral' $size='sm' $width='full'>
        취소하기
      </Button>
    </ListItem>
  );
}

const ListItem = styled.li`
  width: 100%;

  padding: 20px;

  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const Date = styled.p`
  ${({ theme }) => theme.typo.body.semi_bold[14]};
  color: ${({ theme }) => theme.color.neutral[900]};
`;

const Devider = styled.div`
  height: 1px;
  border: 1px solid ${({ theme }) => theme.color.neutral[600]};
`;

const ItemInfoWrapper = styled.div`
  width: 100%;

  display: flex;
  align-items: end;
  gap: 20px;

  img {
    width: 200px;
    height: 200px;
  }
`;

const ItemInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`;

const StateBadge = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;

  color: ${({ theme }) => theme.color.primary[500]};
  ${({ theme }) => theme.typo.heading.bold[14]}

  .icon {
    width: 8px;
    height: 8px;

    background: ${({ theme }) => theme.color.primary[500]};
  }
`;

const ItemTitle = styled.div`
  ${({ theme }) => theme.typo.heading.bold[16]};
  color: ${({ theme }) => theme.color.neutral[900]};
`;

const ItemDesc = styled.p`
  ${({ theme }) => theme.typo.body.medium[14]};
  color: ${({ theme }) => theme.color.neutral[600]};
`;

export default ContentListItem;
