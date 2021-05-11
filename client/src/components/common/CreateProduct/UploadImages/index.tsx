import { observer } from 'mobx-react-lite';
import React, { ChangeEvent, ReactElement, useRef } from 'react';

import useStore from '../../../../hooks/store.hook';
import { IUploads } from '../../../../store/uploads/uploads.types';
import CloseButton from '../../CloseButton';
import css from './index.module.css';

interface IProps {
    file: File;
    uploads: IUploads;
}
const ImageItem = ({ file, uploads }: IProps): ReactElement => {
    const click = (): void => {
        uploads.delete(file.name);
    };

    return (
        <div className={css.wrp}>
            <CloseButton className={css.delete} onClick={click} />
            <img className={css.img} src={file ? window.URL.createObjectURL(file) : ''} alt="" />
        </div>
    );
};

const UploadImages = (): ReactElement => {
    const ref = useRef<HTMLInputElement>(null);
    const uploads = useStore<IUploads>(state => state.uploads);

    const click = (): void => {
        if (ref.current) {
            ref.current.form?.reset();
            ref.current.click();
        }
    };

    const change = (event: ChangeEvent<HTMLInputElement>): void => {
        if (event.target.files?.length) {
            for (let i = 0; i < event.target.files?.length; i++) {
                uploads.push(event.target.files[i]);
            }
        }
    };

    return (
        <div className={css.root}>
            {uploads.files.length ? (
                <div className={css.flex}>
                    {uploads.files.map<ReactElement>(file => (
                        <ImageItem key={file.name} file={file} uploads={uploads} />
                    ))}
                </div>
            ) : (
                <p className={css.empty}>No photos</p>
            )}

            <form className={css.form} action="#" method="post">
                <label className={css.label}>
                    <h2 className={css.title}>Upload product images:</h2>
                    <input
                        ref={ref}
                        onChange={change}
                        className={css.input}
                        type="file"
                        multiple
                        accept=".jpg, .jpeg, .png"
                    />
                    <button className={css.btn} onClick={click} type="button">
                        Click to upload
                    </button>
                </label>
            </form>
        </div>
    );
};

export default observer(UploadImages);
