import { formatNumber, formatPhoneNumber } from '@/utils/format';
import styled from 'styled-components';
import dayjs from 'dayjs';
import { OrderDetail } from '../../hooks/useOrderDetail';

function BuyerTable({ orderDetail }: { orderDetail: OrderDetail }) {
  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th scope='col' colSpan={2}>
              신청 상세내역
              <span>
                {dayjs(orderDetail.createdAt).format('YYYY.MM.DD')} 신청
              </span>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              구매자 <p>{orderDetail.businessName}</p>
            </td>
            <td>
              사업장 주소 <p>{orderDetail.address}</p>
            </td>
          </tr>
          <tr>
            <td>
              대표(개인) 연락처 <p>{formatPhoneNumber(orderDetail.contact)}</p>
            </td>
            <td>
              선택상품
              <p>
                {orderDetail.liquorName} (+
                {formatNumber(orderDetail.pricePerBottle)})
              </p>
            </td>
          </tr>
        </tbody>
        <tfoot>
          <tr>
            <th
              scope='col'
              colSpan={2}
              style={{ textAlign: 'right', fontWeight: 'bold' }}
            >
              <span>총 결제금액</span>
              {formatNumber(orderDetail.totalPrice)}
            </th>
          </tr>
        </tfoot>
      </table>
    </Container>
  );
}

export default BuyerTable;

const Container = styled.div`
  width: 100%;
  margin: 20px 0;
  table {
    width: 100%;
  }
  thead {
    th {
      ${({ theme }) => theme.typo.heading.bold[20]}
    }
    span {
      padding-left: 8px;
      color: ${({ theme }) => theme.color.neutral[600]};
      ${({ theme }) => theme.typo.body.medium[12]}
    }
  }
  tfoot {
    th {
      ${({ theme }) => theme.typo.heading.bold[24]}
    }
    span {
      padding-right: 10px;
      color: ${({ theme }) => theme.color.neutral[600]};
      ${({ theme }) => theme.typo.body.semi_bold[12]}
    }
  }
  th,
  td {
    padding: 20px;
    color: ${({ theme }) => theme.color.neutral[900]};
    border: 1px solid ${({ theme }) => theme.color.neutral[400]};
    ${({ theme }) => theme.typo.heading.bold[16]}
    text-align: left;
    p {
      margin-top: 4px;
      ${({ theme }) => theme.typo.body.medium[14]};
      color: ${({ theme }) => theme.color.neutral[600]};
    }
  }
`;
