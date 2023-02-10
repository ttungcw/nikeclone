import classNames from 'classnames/bind';
import React, { useState, createContext } from 'react';
import { NavLink } from 'react-router-dom';
import { createPortal } from 'react-dom';

import { AiOutlineHeart } from 'react-icons/ai';

import NotificationModal from '../../Modals/NotificationModal/NotificationModal';
import styles from '../SearchButton/SearchButton.module.scss';

let cx = classNames.bind(styles);
let NotificationContext = createContext();

function NotificationButton() {
    const [openNotification, setOpenNotification] = useState(false);
    return (
        <NotificationContext.Provider value={setOpenNotification}>
            <NavLink
                className={cx('item')}
                onClick={() => setOpenNotification(!openNotification)}
            >
                <div className={cx('icon')}>
                    <AiOutlineHeart />
                </div>
                <div className={cx('title')}>Notifications</div>
            </NavLink>
            {openNotification &&
                createPortal(<NotificationModal />, document.body)}
        </NotificationContext.Provider>
    );
}

export { NotificationContext };
export default NotificationButton;
