import React from 'react';

import {Header} from "../../components/header";
import {Feed} from "../../components/feed/index"
import { views } from "../../constans/views";

import styles from './style.scss';

export const MainPage = () => (
    <div className={styles.mainPage}>
        <Header page={views.MAIN_PAGE}/>
        <Feed/>
    </div>
);
