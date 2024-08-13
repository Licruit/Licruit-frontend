import { Divider } from '@/styles/components/Divider';
import styled from 'styled-components';

function WholesalerInfo() {
  return (
    <Container>
      <ProfileWrapper>
        <h5>도매업체 소개</h5>
        <Profile>
          <img
            src=''
            alt='임시'
            width={88}
            height={88}
            style={{ backgroundColor: 'lightgray' }}
          />
          <div className='intro-wrapper'>
            <h4>도매업체명</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit,Lorem
              ipsum dolor sit amet, consectetur adipiscin
            </p>
          </div>
        </Profile>
      </ProfileWrapper>
      <Divider />
      <ExtraInfo>
        <span>
          홈페이지 : <a href='https://www.naver.com'>https://www.naver.com</a>
        </span>
        <span>누적 판매수 : 12,000병</span>
      </ExtraInfo>
    </Container>
  );
}

export default WholesalerInfo;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: fit-content;
  border: 1px solid ${({ theme }) => theme.color.neutral[400]};
  background-color: ${({ theme }) => theme.color.common[100]};
  color: ${({ theme }) => theme.color.common[0]};
`;

const ProfileWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 20px;
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
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 2px;

    h4 {
      ${({ theme }) => theme.typo.heading.bold[20]}
    }

    p {
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
    text-decoration: underline;
    color: ${({ theme }) => theme.color.primary[500]};
  }
`;
