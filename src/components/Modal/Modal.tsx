import { createPortal } from 'react-dom';
import styled from 'styled-components';

interface Props {
  children: React.ReactNode;
  onClose: () => void;
}

function Modal({ children, onClose }: Props) {
  const closeModal = (event: React.MouseEvent<HTMLDivElement>) => {
    if (event.target === event.currentTarget) {
      onClose();
    }
  };

  return createPortal(
    <ModalOverlay onClick={closeModal}>{children}</ModalOverlay>,
    document.getElementById('root') as HTMLElement
  );
}

const ModalOverlay = styled.div`
  width: 100%;
  height: 100%;

  position: absolute;

  background: rgba(0, 0, 0, 0.4);
`;

export default Modal;
