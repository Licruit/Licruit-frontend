import { screen } from '@testing-library/react';
import { describe, test } from 'vitest';
import userEvent from '@testing-library/user-event';
import EditProfileForm from '@/features/SideMenu/components/EditProfile/EditProfileForm';
import { render } from './CustomRender';

describe('EditProfile', () => {
  test('모든 인풋에 값이 없다면 버튼이 비활성화 되어야 한다.', async () => {
    const mockUserProfile = {
      businessName: '',
      contact: '',
      img: 'https://image.com',
      companyNumber: '1133338888',
      sectorName: '한식',
    };

    render(<EditProfileForm userProfile={mockUserProfile} image='' />);

    const businessName = screen.getByLabelText('businessName');
    const contact = screen.getByLabelText('contact');

    expect(screen.getByText('적용하기')).toBeDisabled();

    await userEvent.type(businessName, '반갑습니다');
    await userEvent.type(contact, '01011111111');

    expect(screen.getByText('적용하기')).toBeEnabled();
  });

  // test('프로필 적용하기 버튼을 클릭했을때 submit 이벤트가 실행된다.', async () => {
  //   const mockUserProfile = {
  //     businessName: '치킨가게',
  //     contact: '01011111111',
  //     img: 'https://image.com',
  //     companyNumber: '1133338888',
  //     sectorName: '한식',
  //   };

  //   render(<EditProfileForm userProfile={mockUserProfile} image='' />);
  //   const handleOnSubmit = vi.fn();

  //   screen.getByRole('form', { name: 'edit-profile-form' }).onsubmit =
  //     handleOnSubmit;

  //   const button = screen.getByText('적용하기');

  //   await userEvent.click(button);

  //   expect(handleOnSubmit).toHaveBeenCalled();
  // });
});
