import React from "react";
import styles from "./Layout.module.css";

const Layout = () => {

    return <React.Fragment>
        <div className={styles.header}></div>
        <div className={styles.body}>
            <div className={styles.sidePanel}>
                <button>Success</button>
            </div>
            <div className={styles.mainBodyWrapper}>
                <div className={styles.mainBody}>
                    <button>Error</button>
                </div>
                <div className={styles.mainBodyFooter}>
                    <button>Notification</button>
                </div>
            </div>
        </div>
    </React.Fragment>
};

export default Layout;