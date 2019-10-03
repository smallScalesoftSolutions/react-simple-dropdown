import React from "react";
import styles from "./Layout.module.css";
import Dropdown from "../src";

const options = [
    {key: 'first', label: 'first'},
    {key: 'second', label: 'secondrytru'},
    {key: 'third', label: 'third'},
    {key: 'fourth', label: 'fourth'},
    {key: 'fifth', label: 'fifth'},
]

const Layout = () => {
    const [selected, setSelected] = React.useState(options[0]);
    return <React.Fragment>
        <div className={styles.header}></div>
        <div className={styles.body}>
            <div className={styles.sidePanel}>
                <button>Success</button>
                    <Dropdown
                        selected={selected}
                        options={options}
                        onSelect={(opt) => setSelected(opt)}
                    />
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