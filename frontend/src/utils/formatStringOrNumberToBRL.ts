//Função para conversão de valores númericos ou strings para valores em real (R$).

export function formatStringOrNumberToBRL(value: string | number): string {
    const moneyFormatter = new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL'
    });

    return moneyFormatter.format(Number(value));
}