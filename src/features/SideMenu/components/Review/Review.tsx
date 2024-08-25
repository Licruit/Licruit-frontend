import { useMyPageSideMenuStore } from '@/store/mypageSideMenuStore';
import { BackIcon } from 'public/assets/icons';

import MyPageHeader from '../common/MyPageHeader';
import ReviewForm from './ReviewForm';

function Review() {
  const setContent = useMyPageSideMenuStore((state) => state.setContent);

  return (
    <>
      <MyPageHeader
        title='리뷰 작성하기'
        icon={
          <BackIcon
            style={{ cursor: 'pointer' }}
            onClick={() => setContent('my-page')}
          />
        }
      />
      <ReviewForm />
    </>
  );
}

export default Review;
