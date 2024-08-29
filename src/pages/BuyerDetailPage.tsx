import LoadingSpinner from '@/components/Spinner/Spinner';
import { BuyDetail } from '@/features/Management';
import { Suspense } from 'react';

function ManagementPage() {
  return (
    <Suspense fallback={<LoadingSpinner />}>
      <BuyDetail />
    </Suspense>
  );
}

export default ManagementPage;
