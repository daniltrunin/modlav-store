import styles from './ProductsFilter.module.css'
import {useState} from "react";
import dropdown from '../../assets/icons/Dropdown-arrow.svg'

export default function ProductsFilter(props) {
    const [optionsArray] = useState(props.optionsArray)
    const [selected, setSelected] = useState([]);
    const [open, setOpen] = useState(false);

    const toggleParams = (param) => {
        if (selected.includes(param)) {
            setSelected(selected.filter((s) => s !== param));
        } else {
            setSelected([...selected, param]);
        }
    };

    return (
        <div className={styles.container}>
            <div className={styles.label}>{props.filterName}:</div>

            <div
                className={styles.placeholder}
                onClick={() => setOpen(!open)}
            >
                {selected.length === 0 ? props.filterPlaceholder : selected.join(", ")}
                <img className={styles.arrow} src={dropdown}/>
            </div>

            {open && (
                <div className={styles.dropdown}>
                    {optionsArray.map((param) => (
                        <label key={param} className={styles.option}>
                            <input
                                type="checkbox"
                                checked={selected.includes(param)}
                                onChange={() => toggleParams(param)}
                            />
                            {param}
                        </label>
                    ))}
                </div>
            )}
        </div>
    )
}