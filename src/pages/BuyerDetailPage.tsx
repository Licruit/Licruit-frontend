import { BuyDetail } from '@/features/Management';
import { Suspense } from 'react';

function ManagementPage() {
  return (
    <Suspense fallback={<></>}>
      <BuyDetail />
    </Suspense>
  );
}

export default ManagementPage;
