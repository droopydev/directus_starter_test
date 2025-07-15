// Import Local: styles and types
import styles from './GradientHero.module.css';
import {GradientHeroProps} from './GradientHero.types'

const GradientHero = ({ title, description }: GradientHeroProps) => {
	return (
		<div className={styles.gradientHero}>
			<div className="scb-site-container">
				<div className={styles.gradientHero_text}>
					{title && <h1>{title}</h1>}
					{description && <p>{description}</p>}
				</div>
			</div>
		</div>
	);
};

export default GradientHero;
