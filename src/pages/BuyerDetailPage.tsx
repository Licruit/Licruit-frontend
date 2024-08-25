import BuyDetail from '@/features/Management/components/BuyerDetail/BuyDetail';
import ManagementLayout from '@/layouts/ManagementLayout';

function ManagementPage() {
  return (
    <div>
      <ManagementLayout>
        <BuyDetail />
      </ManagementLayout>
    </div>
  );
}

export default ManagementPage;
