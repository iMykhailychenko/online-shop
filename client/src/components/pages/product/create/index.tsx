import React, { ReactElement } from 'react';

import CreateForm from '../../../common/CreateProduct/CreateForm';
import UploadImages from '../../../common/CreateProduct/UploadImages';
import css from './index.module.css';

const CreateProduct = (): ReactElement => {
    return (
        <div className={css.root}>
            <UploadImages />
            <CreateForm />
        </div>
    );
};

export default CreateProduct;
