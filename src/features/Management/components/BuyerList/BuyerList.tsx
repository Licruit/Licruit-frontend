import styled from 'styled-components';
import { useLocation, useNavigate } from 'react-router-dom';
import { formatPhoneNumber } from '@/utils/format';
import { Buyer } from '../../models/buyer.model';
import RowButton from './RowButton';

interface Props {
  buyers: Buyer[];
  isEmpty: boolean;
}

function BuyerList({ buyers, isEmpty }: Props) {
  const naviagate = useNavigate();
  const { pathname } = useLocation();

  return (
    <TableWrapper>
      <Table>
        <THead>
          <tr>
            <th>구매자</th>
            <th>연락처</th>
            <th>선택상품</th>
            <th>구매상태</th>
            <th />
          </tr>
        </THead>
        {isEmpty ? (
          <EmptyBox>공동구매 신청자가 존재하지 않습니다.</EmptyBox>
        ) : (
          <TBody>
            {buyers.map((row) => (
              <tr
                key={row.id}
                onClick={() => naviagate(`${pathname}/${row.id}`)}
              >
                <td>
                  <strong>{row.businessName}</strong>
                </td>
                <td>{formatPhoneNumber(String(row.contact))}</td>
                <td>{row.liquorName}</td>
                <td>{row.status}</td>
                <td style={{ width: 200 }}>
                  <RowButton status={row.status} orderId={row.id} />
                </td>
              </tr>
            ))}
          </TBody>
        )}
      </Table>
    </TableWrapper>
  );
}

export default BuyerList;

const TableWrapper = styled.div`
  display: flex;
  width: 100%;
  height: fit-content;
  min-height: 500px;
`;

const Table = styled.table`
  width: 100%;
  height: fit-content;
  border: 1px solid ${({ theme }) => theme.color.neutral[400]};
  border-width: 1px 0;
`;

const THead = styled.thead`
  ${({ theme }) => theme.typo.heading.bold[16]}
  color: ${({ theme }) => theme.color.neutral[900]};

  th {
    padding: 20px 0;
    text-align: start;
  }
`;

const TBody = styled.tbody`
  ${({ theme }) => theme.typo.body.medium[14]}
  color: ${({ theme }) => theme.color.neutral[600]};

  td {
    padding: 20px 0;
    border: 1px solid ${({ theme }) => theme.color.neutral[400]};
    border-width: 1px 0;

    strong {
      color: ${({ theme }) => theme.color.neutral[900]};
    }
  }

  tr {
    cursor: pointer;
  }

  td:last-child {
    padding: 10px 0;
  }

  tr:last-child td {
    border-bottom: none;
  }
`;

const EmptyBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 500px;

  color: ${({ theme }) => theme.color.neutral[600]};
  ${({ theme }) => theme.typo.body.semi_bold[16]}
`;
