// CRIAÇÃO DE UMA CLASSE PARA TRATAR OS ERROS DA APLICAÇÃO

interface IErrorProps {
  message: string;
  statusCode?: number;
  code:
    | "generic"
    | "not.found"
}

class AppError {
  public readonly message: string;

  public readonly statusCode: number;

  public readonly code: string;

  constructor({ message, statusCode = 400, code }: IErrorProps) {
    this.message = message;
    this.statusCode = statusCode;
    this.code = code;
  }
}

export { AppError };
