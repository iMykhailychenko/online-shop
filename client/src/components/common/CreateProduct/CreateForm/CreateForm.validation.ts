import { IProduct } from '../../../../interface';

interface Callback<T> {
    (value: T): void;
}
export interface IError {
    [key: string]: string;
}

const validation = (value: Omit<IProduct, 'id'>, onError: Callback<IError>): boolean => {
    if (!value.title.trim()) {
        onError({ title: 'Required field' });
        return true;
    }

    if (!value.description.trim()) {
        onError({ description: 'Required field' });
        return true;
    }

    if (!value.price || value.price < 0) {
        onError({ price: 'Required field' });
        return true;
    }

    const sizesName = value.sizes.map<string>(item => item.size.trim().toUpperCase());
    if (sizesName.some(item => !item)) {
        onError({ sizes: 'Fill size name for all fields' });
    }

    const duplicates: string[] = [];
    for (const name of sizesName) {
        if (duplicates.includes(name)) {
            onError({ sizes: `Size "${name}" repeats. Do not duplicate size value` });
            return true;
        }
        duplicates.push(name);
    }

    return false;
};

export default validation;
