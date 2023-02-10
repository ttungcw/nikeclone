import React from 'react';

import classNames from 'classnames/bind';
import styles from './Content.module.scss';

import { BsHeart } from 'react-icons/bs';
import { BiMessageRounded } from 'react-icons/bi';
import { TbBrandTelegram } from 'react-icons/tb';
import { BsBookmark } from 'react-icons/bs';

let cx = classNames.bind(styles);

function Content() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('container')}>
                <div className={cx('news')}></div>
                <div className={cx('posts')}>
                    <div className={cx('post')}>
                        <div className={cx('top')}>
                            <div className={cx('info')}>
                                <div className={cx('avatar')}>
                                    <img src="./images/profile.jpg" alt="" />
                                </div>
                                <div className={cx('name')}>fabriziorom</div>
                            </div>
                            <div className={cx('menu')}>...</div>
                        </div>
                        <div className={cx('img')}>
                            <img src="./images/post1.jpg" alt="" />
                        </div>
                        <div className={cx('bot')}>
                            <div className={cx('react')}>
                                <div className={cx('love')}>
                                    <BsHeart />
                                </div>
                                <div className={cx('mess')}>
                                    <BiMessageRounded />
                                </div>
                                <div className={cx('tele')}>
                                    <TbBrandTelegram />
                                </div>
                                <div className={cx('save')}>
                                    <BsBookmark />
                                </div>
                            </div>
                            <div className={cx('like')}>111111</div>
                            <div className={cx('comment')}>
                                <input
                                    type="text"
                                    placeholder="Add a comment..."
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Content;
