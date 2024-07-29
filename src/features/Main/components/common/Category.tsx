import React from 'react';
import styled from 'styled-components';

interface Props {
  title: string;
  description: string;
}

function Category({ title, description }: Props) {
  return (
    <StyledCategory>
      <Title>{title}</Title>
      <Description>{description}</Description>
    </StyledCategory>
  );
}

const StyledCategory = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`;

const Title = styled.div`
  ${({ theme }) => theme.typo.heading.bold[28]}
`;
const Description = styled.p`
  ${({ theme }) => theme.typo.body.medium[14]};
  color: ${({ theme }) => theme.color.neutral[600]};
`;

export default Category;
