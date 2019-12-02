import React from 'react';

export const required = value => {
    if (value) {return undefined}
    return 'Поле пустое'
};

export const maxLength = (max) => (value) => {

    if (value.length > max) {return `Слишком много символов, должно быть не болеьше ${max} смволов`}
    return undefined
}

