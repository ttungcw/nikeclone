import React, { useContext } from 'react';
import classNames from 'classnames/bind';

import styles from './NotificationModal.module.scss';
import { NotificationContext } from '../../Buttons/NotificationButton/NotificationButton';

let cx = classNames.bind(styles);

function NotificationModal() {
    let closeNotification = useContext(NotificationContext);

    return (
        <div className={cx('wrapper')} onClick={() => closeNotification(false)}>
            <div className={cx('container')} onClick={(e) => e.stopPropagation()}>
                this is notification
            </div>
        </div>
    );
}

export default NotificationModal;
