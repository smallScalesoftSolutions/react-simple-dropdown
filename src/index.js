import React from 'react';
import style from "./main.css";

export default function(props) {
    const [open, setOpen] = React.useState(false);
    return <div className={style.wrapper}>
        <div className={`${style.box} ${open ? style['open-box'] : ''} `} onClick={() => setOpen(!open)}>
            <div className={style["selected-option"]}>{props.selected ? props.selected.label : ''}</div>
            <div className={style.icon}>v</div>
        </div>
        <div className={`${style.list} ${open ? style['open-list'] : ''}`}>
            { open ? props.options.map(
                opt => <div key={opt.key} className={style.option} onClick={() => {
                    props.onSelect(opt);
                    setOpen(false);
                }}>
                    {opt.label}
                </div>
            ) : null}
        </div>
    </div>
}