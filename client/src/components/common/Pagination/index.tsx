import { faChevronLeft } from '@fortawesome/free-solid-svg-icons/faChevronLeft';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons/faChevronRight';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import queryString from 'query-string';
import React, { ReactElement, useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';
import { useHistory } from 'react-router-dom';

import useMedia from '../../../hooks/media.hook';
import css from './index.module.css';

interface IProps {
    loading?: boolean;
    total: number;
    onClick: (page: number) => void;
    onMore: (page: number) => void;
}

const Pagination = ({ total, onClick, onMore, loading = false }: IProps): ReactElement => {
    const media = useMedia(768);

    const history = useHistory();
    const params = queryString.parse(history.location.search);
    const init = +(params.page || 1);

    const [page, setPage] = useState<number>(init < total ? init : total);

    useEffect(() => {
        setPage(+(queryString.parse(history.location.search).page || 1));
    }, [history.location.search]);

    const pushRouter = (page: number) => {
        setPage(page);
        history.push(history.location.pathname + '?' + queryString.stringify({ ...params, page }));
    };

    const handlePagination = ({ selected }: { selected: number }): void => {
        pushRouter(selected + 1);
        onClick(selected + 1);
    };

    const handleMore = (): void => {
        pushRouter(page < total ? page + 1 : total);
        onMore(page < total ? page + 1 : total);
    };

    return (
        <div className={css.root}>
            <ReactPaginate
                previousLabel={media ? <FontAwesomeIcon icon={faChevronLeft} /> : null}
                nextLabel={media ? <FontAwesomeIcon icon={faChevronRight} /> : null}
                breakLabel="..."
                forcePage={page - 1}
                pageCount={total}
                marginPagesDisplayed={1}
                pageRangeDisplayed={1}
                onPageChange={handlePagination}
                containerClassName={css.pagination}
                breakLinkClassName={css.page}
                pageLinkClassName={css.page}
                activeLinkClassName={css.active}
                previousLinkClassName={css.nav}
                nextLinkClassName={css.nav}
                disabledClassName={css.disabled}
            />

            {page < total ? (
                <button className={css.more} onClick={handleMore}>
                    {loading ? <span>Loading ...</span> : <span>Load more</span>}
                </button>
            ) : null}
        </div>
    );
};

export default Pagination;
