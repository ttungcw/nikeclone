import React, { useState, createContext } from 'react';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import { createPortal } from 'react-dom';

import { FiSearch } from 'react-icons/fi';

import styles from './SearchButton.module.scss';
import SearchModal from '../../Modals/SearchModal/SearchModal';

let cx = classNames.bind(styles);
const SearchContext = createContext();

function SearchButton() {
    const [openSearch, setOpenSearch] = useState(false);
    return (
        <SearchContext.Provider value={setOpenSearch}>
            <Link
                className={cx('item')}
                onClick={() => setOpenSearch(!openSearch)}
            >
                <div className={cx('icon')}>
                    <FiSearch />
                </div>
                <div className={cx('title')}>Search</div>
            </Link>
            {openSearch && createPortal(<SearchModal />, document.body)}
        </SearchContext.Provider>
    );
}

export { SearchContext };
export default SearchButton;
