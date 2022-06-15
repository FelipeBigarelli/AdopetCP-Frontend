import React from 'react';
import ReactDOM from 'react-dom';

import { Overlay, Container, Content, Footer } from './styles';

interface ModalProps {
  isShown: boolean;
  hide: () => void;
  headerText: string;
}

const Modal: React.FC<ModalProps> = ({
  hide,
  isShown,
  children,
  headerText,
}) => {
  const portalDiv = document.getElementById('modal') as HTMLElement;

  return isShown
    ? ReactDOM.createPortal(
        <Overlay>
          <Container>
            <h1>{headerText}</h1>

            <Content>{children}</Content>

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
