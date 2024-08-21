import { Divider } from '@/styles/components/Divider';
import styled from 'styled-components';
import { formatNumber } from '@/utils/format';
import { useWholesalerInfo } from '../hooks/useWholesalerInfo';

function WholesalerInfo() {
  const { wholesalerInfo } = useWholesalerInfo();

  if (!wholesalerInfo) return null;

  const { img, businessName, introduce, homepage, totalSales } = wholesalerInfo;

  return (
    <Container>
      <ProfileWrapper>
        <h5>도매업체 소개</h5>
        <Profile>
          <img src={img} alt='도매업자 프로필 이미지' width={88} height={88} />
          <div className='intro-wrapper'>
            <h4>{businessName}</h4>
            <p>{introduce}</p>
          </div>
        </Profile>
      </ProfileWrapper>
      <Divider />
      <ExtraInfo>
        <span>
          홈페이지 : <a href='homepage'>{homepage}</a>
        </span>
        <span>누적 판매수 : {formatNumber(totalSales)}병</span>
      </ExtraInfo>
    </Container>
  );
}

export default WholesalerInfo;

const Container = styled.div`
  display: flex;
  flex-direction: column;

  height: fit-content;

  color: ${({ theme }) => theme.color.common[0]};

  background-color: ${({ theme }) => theme.color.common[100]};
  border: 1px solid ${({ theme }) => theme.color.neutral[400]};
`;

const ProfileWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;

  width: 100%;
  padding: 20px;

  h5 {
    ${({ theme }) => theme.typo.heading.bold[14]}
  }
`;

const Profile = styled.div`
  display: flex;
  gap: 12px;
  align-items: flex-end;

  .intro-wrapper {
    display: flex;
    flex: 1;
    flex-direction: column;
    gap: 2px;

    h4 {
      ${({ theme }) => theme.typo.heading.bold[20]}
    }

    p {
      white-space: pre-wrap;
      ${({ theme }) => theme.typo.body.medium[14]}
      color: ${({ theme }) => theme.color.neutral[400]};
    }
  }
`;

const ExtraInfo = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding: 20px;
  ${({ theme }) => theme.typo.body.medium[14]}
  color: ${({ theme }) => theme.color.neutral[400]};

  a {
    color: ${({ theme }) => theme.color.primary[500]};
    text-decoration: underline;
  }
`;
