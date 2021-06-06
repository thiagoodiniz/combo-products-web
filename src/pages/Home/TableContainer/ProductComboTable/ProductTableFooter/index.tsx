import React, { useState } from 'react';
import { IconButton } from '@material-ui/core';
import firstPage from '../../../../../assets/images/icons/table-pagination/first-page.svg';
import previousPage from '../../../../../assets/images/icons/table-pagination/previous-page.svg';
import firstPageFilled from '../../../../../assets/images/icons/table-pagination/first-page-filled.svg';
import previousPageFilled from '../../../../../assets/images/icons/table-pagination/previous-page-filled.svg';
import nextPage from '../../../../../assets/images/icons/table-pagination/next-page.svg';
import lastPage from '../../../../../assets/images/icons/table-pagination/last-page.svg';
import nextPageFilled from '../../../../../assets/images/icons/table-pagination/next-page-filled.svg';
import lastPageFilled from '../../../../../assets/images/icons/table-pagination/last-page-filled.svg';
import { Container, TablePagination, PaginationNumberButton } from './styles';

interface IPaginationButtonProps {
    disabled: boolean;
    handleActionClick: Function;
    icon: JSX.Element;
}
const PaginationButton: React.FC<IPaginationButtonProps> = ({ handleActionClick, disabled, icon }) => {
    return (
        <IconButton
            onClick={() => handleActionClick()}
            disabled={disabled}
        >
            <>{icon}</>
        </IconButton>
    );
}

interface IProductTableFooterProps {
    rowsPerPage: number;
    totalRows: number;
    setSelectedPage(page: number): void
}

const ProductTableFooter: React.FC<IProductTableFooterProps> = ({ totalRows, rowsPerPage, setSelectedPage }) => {
    const [pagesCount] = useState((totalRows % rowsPerPage === 0 ? totalRows/rowsPerPage : (Math.floor(totalRows / rowsPerPage) + 1) ));

    return (
        <Container>
            <TablePagination 
                showFirstButton 
                showLastButton
                // style={{ marginLeft: '50%', transform: 'translateX(-50%)' }}
                count={pagesCount}
                renderItem={(params) => {
                    console.log(params);
                    switch(params.type){
                        case 'first':
                            console.log(params.type, params.page, params.selected);
                            return <PaginationButton handleActionClick={(e: any) => { setSelectedPage(params.page); params.onClick(e); }} disabled={params.disabled} icon={<img src={params.disabled ? firstPage : firstPageFilled} alt="first page"/>} />;
                        case 'previous':
                            return <PaginationButton handleActionClick={(e: any) => { setSelectedPage(params.page); params.onClick(e); }} disabled={params.disabled} icon={<img src={params.disabled ? previousPage : previousPageFilled} alt="previous page"/>} />;
                        case 'next':
                            return <PaginationButton handleActionClick={(e: any) => { setSelectedPage(params.page); params.onClick(e); }} disabled={params.disabled} icon={<img src={params.disabled ? nextPage : nextPageFilled } alt="next page"/>} />;
                        case 'last':
                            return <PaginationButton handleActionClick={(e: any) => { setSelectedPage(params.page); params.onClick(e); }} disabled={params.disabled} icon={<img src={params.disabled ? lastPage : lastPageFilled} alt="last page"/>} />;
                        case 'page':
                            return <PaginationNumberButton className={params.selected ? 'selected' : ''} onClick={(e) => { setSelectedPage(params.page); return params.onClick(e); }}><span>{params.page}</span></PaginationNumberButton>;
                        case 'start-ellipsis':
                        case 'end-ellipsis':
                            return <>...</>;
                            
                        default:
                            return <></>;
                    }
                }}
            />
        </Container>
    );
}

export default ProductTableFooter;