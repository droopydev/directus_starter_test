// Import Local: styles and types
import styles from './FooterBanner.module.css';
import { FooterBannerProps } from './FooterBanner.types';

const FooterBanner = ({ sanitizedContent }: FooterBannerProps) => {
	return (
		<div className={styles.footerbanner}>
			<div className="scb-site-container">
				{sanitizedContent && (
					<div className={styles.footerbanner_content} dangerouslySetInnerHTML={{ __html: sanitizedContent }}></div>
				)}
			</div>
		</div>
	);
};

export default FooterBanner;
