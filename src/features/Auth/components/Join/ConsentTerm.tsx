import styled from 'styled-components';
import { ICONS } from '@/constants/icons';
import { TOSProps } from '../../constants/tos';

function TermItem(term: TOSProps) {
  const { id, title } = term;
  const isOptional = id === 3;
  return (
    <Term>
      <Option>
        <CheckIcon />
        <Essential>
          <span> {isOptional ? '(선택)' : '(필수)'}</span>
          {title}
        </Essential>
        {id ? <View>보기</View> : ''}
      </Option>
    </Term>
  );
}

export default TermItem;

export const CheckIcon = styled.img.attrs({ src: ICONS.check, alt: 'check' })`
  width: 20px;
  height: 20px;
  fill: ${({ theme }) => theme.color.neutral[400]};
`;

const Term = styled.div`
  padding: 10px;
`;

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
  margin-left: 6px;
  ${({ theme }) => theme.typo.body.semi_bold[14]};
  color: ${({ theme }) => theme.color.neutral[600]};
  border-bottom: 2px solid ${({ theme }) => theme.color.neutral[600]};
`;
