import classNames from 'classnames/bind';
import React, { useState, createContext } from 'react';
import { NavLink } from 'react-router-dom';

import { BsPlusSquare } from 'react-icons/bs';
import { createPortal } from 'react-dom';

import styles from '../SearchButton/SearchButton.module.scss';
import CreateModal from '../../Modals/CreateModal/CreateModal';

let cx = classNames.bind(styles);
const CreateContext = createContext();

function CreateButton() {
    let [openCreate, setOpenCreate] = useState(false);
    return (
        <CreateContext.Provider value={setOpenCreate}>
            <NavLink className={cx('item')} onClick={() => setOpenCreate(true)}>
                <div className={cx('icon')}>
                    <BsPlusSquare />
                </div>
                <div className={cx('title')}>Create</div>
            </NavLink>
            {openCreate && createPortal(<CreateModal />, document.body)}
        </CreateContext.Provider>
    );
}

export { CreateContext };
export default CreateButton;
