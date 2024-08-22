import styled from 'styled-components';

function BuyerTable() {
  const mockData = {
    applicationDate: '2024.07.25',
    buyer: 'OOOO 상점',
    businessAddress: '대전광역시 동구 삼성도 00-000',
    contact: '010-0000-0000',
    selectedProduct: '백경 13. 탁주 (+16,000원)',
    totalAmount: '19,000원',
  };

  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th scope='col' colSpan={2}>
              신청 상세내역 <span>{mockData.applicationDate}</span>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              구매자 <p>{mockData.buyer}</p>
            </td>
            <td>
              사업장 주소 <p>{mockData.businessAddress}</p>
            </td>
          </tr>
          <tr>
            <td>
              대표(개인) 연락처 <p>{mockData.contact}</p>
            </td>
            <td>
              선택상품 <p>{mockData.selectedProduct}</p>
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
              {mockData.totalAmount}
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
    border: 1px solid ${({ theme }) => theme.color.neutral[400]};
    ${({ theme }) => theme.typo.heading.bold[16]}
    color: ${({ theme }) => theme.color.neutral[900]};
    text-align: left;
    p {
      margin-top: 4px;
      ${({ theme }) => theme.typo.body.medium[14]};
      color: ${({ theme }) => theme.color.neutral[600]};
    }
  }
`;
