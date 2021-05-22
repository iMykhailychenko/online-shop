export const moneyFormat = (value: string | number = 0): string => {
    const float = String(Math.round(+value * 100) / 100).split('.');
    value = String(float[0])
        .split('')
        .reverse()
        .map((item, index): string => (index % 3 ? item : item + ' '))
        .reverse()
        .join('')
        .trim();

    return float[1] ? value + '.' + float[1] : value + '.00';
};

export const cutString = (value: string, max: number): string =>
    value.length > max ? value.slice(0, max - 1) + '...' : value;
