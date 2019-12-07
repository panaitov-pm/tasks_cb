/**
 * @param {string} key
 * @param {string} value
 */
const setItem = (key: string, value: string) => {
    if (!key && !value) return;

    localStorage.setItem(key, value);
};

export default setItem;
