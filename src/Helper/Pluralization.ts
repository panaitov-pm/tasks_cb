/**
 * @param {number} number
 * @param {string} title
 * @return {string}
 */
const pluralization = (number: number, title: string): string => {
    number = Math.abs(number);

    const titles = title.split('|');
    const cases = [2, 0, 1, 1, 1, 2];
    const needTitle = titles[(number % 100 > 4 && number % 100 < 20) ? 2 : cases[(number % 10 < 5) ? number % 10 : 5]];

    return (!!needTitle) ? needTitle : titles[1];
};

export default pluralization;
