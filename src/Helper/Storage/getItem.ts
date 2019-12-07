/**
 * @param {string} key
 * @param byDefault
 * @return {any[] | any}
 */
const getItem = (key: string, byDefault: any) => {
    const item = localStorage.getItem(key);
    if (!item) return byDefault;

    return JSON.parse(item);
};

export default getItem;
