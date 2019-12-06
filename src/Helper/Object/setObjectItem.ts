/**
 * @param {T} odj
 * @param {Partial<T>} odjItem
 * @return {T}
 */
const setObjectItem = <T>(odj: T, odjItem: Partial<T>): T => ({
    ...odj,
    ...odjItem,
});

export default setObjectItem;
