import React from 'react';
import ReactDOM from 'react-dom';

import { Overlay, Container, Footer } from './styles';

interface ModalProps {
  isShown: boolean;
  hide: () => void;
}

const Modal: React.FC<ModalProps> = ({ hide, isShown, children }) => {
  const portalDiv = document.getElementById('modal') as HTMLElement;

  return isShown
    ? ReactDOM.createPortal(
        <Overlay>
          <Container>
            {children}

            <Footer>
              <button type="button" className="cancel-button" onClick={hide}>
                Cancelar
              </button>
            </Footer>
          </Container>
        </Overlay>,
        portalDiv,
      )
    : null;
};

export default Modal;
