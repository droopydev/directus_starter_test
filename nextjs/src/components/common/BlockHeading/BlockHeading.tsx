import { BlockHeadingProps } from './BlockHeading.types';
import styles from './BlockHeading.module.css';

const BlockHeading = ({ title, sanitizedDescription }: BlockHeadingProps) => {
	return (
		<>
			{title && <h2 className={styles.block_header}>{title}</h2>}
			{sanitizedDescription && (
				<div className={styles.block_desc} dangerouslySetInnerHTML={{ __html: sanitizedDescription }} />
			)}
		</>
	);
};

export default BlockHeading;
