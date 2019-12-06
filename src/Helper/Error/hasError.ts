/**
 * @param {T} errors
 * @return {boolean}
 */
const hasError = <T>(errors: T): boolean => {
    return Object.values(errors).some(value => value.length === 0)
};

export default hasError;
