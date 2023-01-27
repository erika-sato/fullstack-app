//Componente que mostra mensagens de notificação (de sucesso ou falha) ao usuário.

import { Main, Body } from "./styles";

type Props = {
  message: string;
  close: () => void;
  variant: 'error' | 'success';
}

const ToastComponent = ({ message, close, variant }: Props) => {
  setTimeout(() => {
    close();
  }, 3000);
  return (
    <Main>
      <Body>
        <div className={variant}>
          <p>{message}</p>
        </div>
      </Body>
    </Main>
  );
};

export default ToastComponent;
