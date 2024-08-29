import MetaTag from '@/components/MetaTag';
import LoadingSpinner from '@/components/Spinner/Spinner';
import { BuyDetail } from '@/features/Management';
import { Suspense } from 'react';

function ManagementPage() {
  return (
    <>
      <MetaTag
        title='리크루트 구매자 상세'
        description='리크루트 플랫폼에서 구매자 상세 정보를 확인할 수 있는 페이지입니다.'
        keywords='리크루트, 구매자 관리, 리크루트 관리, 구매 관리, 고객 관리, 리크루트 구매, 사이트 관리, 리크루트 플랫폼, 고객 정보, 리크루트 서비스'
        url='https://www.licruit.site/management/:buyingId/:orderId'
      />
      <Suspense fallback={<LoadingSpinner />}>
        <BuyDetail />
      </Suspense>
    </>
  );
}

export default ManagementPage;
