import React, { useContext } from 'react';
import classNames from 'classnames/bind';

import { BsFillPatchCheckFill } from 'react-icons/bs';
import { GrClose } from 'react-icons/gr';

import styles from './SearchModal.module.scss';
import { SearchContext } from '../../Buttons/SearchButton/SearchButton';

let cx = classNames.bind(styles);
function SearchModal() {
    const closeSearch = useContext(SearchContext);
    return (
        <div className={cx('wrapper')} onClick={() => closeSearch(false)}>
            <div className={cx('container')} onClick={(e) => e.stopPropagation()}>
                <div className={cx('title')}>Search</div>
                <div className={cx('form')}>
                    <input type="search" placeholder="Search"></input>
                </div>

                <div className={cx('bot')}>
                    <div className={cx('sub-title')}>
                        <div className={cx('left')}>Recent</div>
                        <div className={cx('right')}>Close all</div>
                    </div>
                    <div className={cx('result')}>
                        <div className={cx('item')}>
                            <div className={cx('avt')}>
                                <img src="./images/profile.jpg" alt="" />
                            </div>
                            <div className={cx('name')}>
                                <div className={cx('nickname')}>
                                    cristiano
                                    <span className={cx('check')}>
                                        <BsFillPatchCheckFill />
                                    </span>
                                </div>
                                <div className={cx('fullname')}>Cristiano Ronaldo</div>
                            </div>
                            <div className={cx('btn')}>
                                <GrClose />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SearchModal;
