import styled from 'styled-components';
import { ICONS } from '@/constants/icons';
import { TOS, TOSProps } from '../../constants/tos';

const CheckIcon = styled.img.attrs({ src: ICONS.check, alt: 'check' })`
  width: 20px;
  height: 20px;
  fill: ${({ theme }) => theme.color.neutral[400]};
`;

function TermItem(term: TOSProps) {
  const { id, title } = term;
  const isOptional = id === 3;
  return (
    <Term>
      <Option>
        <Icon>
          <CheckIcon />
        </Icon>
        <Essential>
          <span> {isOptional ? '(선택)' : '(필수)'}</span>
          {title}
        </Essential>
        {id ? <View>보기</View> : ''}
      </Option>
    </Term>
  );
}

const Term = styled.div`
  padding: 10px;
`;
const Icon = styled.div``;

const Essential = styled.div`
  margin-left: 3px;
  color: ${({ theme }) => theme.color.neutral[400]};
  ${({ theme }) => theme.typo.body.medium[14]}
  span {
    margin-right: 3px;
    color: ${({ theme }) => theme.color.neutral[900]};
    ${({ theme }) => theme.typo.body.semi_bold[14]}
  }
`;

const Option = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const View = styled.span`
  ${({ theme }) => theme.typo.body.semi_bold[14]};
  color: ${({ theme }) => theme.color.neutral[600]};
  border-bottom: 2px solid ${({ theme }) => theme.color.neutral[600]};
  margin-left: 6px;
`;

function ConsentForm() {
  return (
    <Container>
      <AllAgree>
        <Icon>
          <CheckIcon />
        </Icon>
        모두 동의
      </AllAgree>
      <ul>
        {TOS.map((term) => {
          return (
            <li>
              <TermItem key={term.id} {...term} />
            </li>
          );
        })}
      </ul>
    </Container>
  );
}

export default ConsentForm;

const Container = styled.div`
  ul {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
`;
const AllAgree = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
  color: ${({ theme }) => theme.color.neutral[400]};
  ${({ theme }) => theme.typo.body.medium[14]}
  padding: 18.5px 24px;
  border: 0.8px solid ${({ theme }) => theme.color.neutral[400]};
  margin-bottom: 20px;
`;
