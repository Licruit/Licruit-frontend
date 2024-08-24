import styled from 'styled-components';
import Button from '@/components/Button/Button';

const data = [
  {
    buyer: 'Lorem ipsum dolor sit amet',
    contact: '010-0000-0000',
    product: '백경 13. 탁주 (+16,000원)',
    status: '신청',
  },
  {
    buyer: 'Lorem ipsum dolor sit amet',
    contact: '010-0000-0000',
    product: '백경 13. 탁주 (+16,000원)',
    status: '신청',
  },
  {
    buyer: 'Lorem ipsum dolor sit amet',
    contact: '010-0000-0000',
    product: '백경 13. 탁주 (+16,000원)',
    status: '신청',
  },
];

function BuyerList() {
  return (
    <Table>
      <thead>
        <tr>
          <th>구매자</th>
          <th>연락처</th>
          <th>선택상품</th>
          <th>구매상태</th>
          <th />
        </tr>
      </thead>
      <tbody>
        {data.map((row) => (
          <tr key={row.contact}>
            <td>
              <strong>{row.buyer}</strong>
            </td>
            <td>
              {row.contact.replace(/(\d{3})(\d{3,4})(\d{4})/, '$1-$2-$3')}
            </td>
            <td>{row.product}</td>
            <td>{row.status}</td>
            <td>
              <div className='button-cell'>
                <Button $style='outlined' $size='sm' $theme='neutral'>
                  확정
                </Button>
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
}

export default BuyerList;

const Table = styled.table`
  width: 100%;
  border: 1px solid ${({ theme }) => theme.color.neutral[400]};
  border-width: 1px 0;

  thead {
    ${({ theme }) => theme.typo.heading.bold[16]}
    color: ${({ theme }) => theme.color.neutral[900]};
  }

  th {
    padding: 20px 0;
    text-align: start;
  }

  tbody {
    ${({ theme }) => theme.typo.body.medium[14]}
    color: ${({ theme }) => theme.color.neutral[600]};
  }

  td {
    padding: 20px 0;
    border: 1px solid ${({ theme }) => theme.color.neutral[400]};
    border-width: 1px 0px;

    strong {
      color: ${({ theme }) => theme.color.neutral[900]};
    }
  }

  .button-cell {
    display: flex;
    justify-content: end;
  }

  tr:last-child td {
    border-bottom: none;
  }
`;
