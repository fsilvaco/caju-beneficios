export default class Service {

    static formatToBRL = (number) => {
        let value = new Intl.NumberFormat("pt-BR", {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
        }).format(number);

        return value;
    };
}