import styles from './MobileProductDetailsView.module.css'
import MobileHeader from '../../../features/Header/MobileHeader.jsx';
import MobileProductDetails from "../../../features/MobileProductDetails/MobileProductDetails.jsx";

export default function MobileProductDetailsView() {
    return (
        <div className={styles.container}>
            <MobileHeader/>
            <MobileProductDetails/>
        </div>
    )
}