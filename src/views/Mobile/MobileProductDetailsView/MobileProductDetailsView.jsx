import styles from './MobileProductDetailsView.module.css'
import MobileHeader from '../../../features/Header/MobileHeader.jsx';
import MobileProductDetails from "../../../features/MobileProductDetails/MobileProductDetails.jsx";
import MobileProductSimilar from '../../../features/MobileProductSimilar/MobileProductSimilar.jsx';
import Ads from '../../../features/Ads/Ads.jsx'
import MobileNewsletter from '../../../features/MobileNewsletter/MobileNewsletter.jsx'
import MobileFooter from "../../../features/MobileFooter/MobileFooter.jsx";

export default function MobileProductDetailsView() {
    return (
        <div className={styles.container}>
            <MobileHeader/>
            <MobileProductDetails/>
            <MobileProductSimilar/>
            <Ads/>
            <MobileNewsletter/>
            <MobileFooter/>
        </div>
    )
}