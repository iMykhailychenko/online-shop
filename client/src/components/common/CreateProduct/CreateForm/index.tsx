import React, { ReactElement } from 'react';

import Input from '../../Input';
import css from './index.module.css';

const CreateForm = (): ReactElement => {
    return (
        <form className={css.form} action="#" method="post">
            <Input name="name" type="text" value="ds" onChange={console.log} />
        </form>
    );
};

export default CreateForm;
