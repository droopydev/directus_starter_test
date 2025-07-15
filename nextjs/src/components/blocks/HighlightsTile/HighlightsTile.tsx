// import React and Next
import Image from 'next/image';
import Link from 'next/link';

// import Local: Types and Styles
import { HighlightsItemProps, HighlightsTileProps } from './HighlightsTile.types';
import styles from './HighlightsTile.module.css';

// import External: Icon Library
import { ChevronRight } from 'lucide-react';

const HighlightsItem = ({ imgUrl, imgAlt, title, description, href }: HighlightsItemProps) => {
	const content = (
		<>
			{imgUrl && (
				<div className={styles.card_img_container}>
					<Image
						unoptimized
						src={imgUrl}
						alt={imgAlt!}
						fill={true}
						style={{ objectFit: 'cover' }}
						sizes="413px, (min-width: 768px) 312px, (min-width: 1200px) 454px"
					/>
				</div>
			)}
			<div className={styles.card_overlay}></div>
			{(title || description) && (
				<div className={styles.card_text_container}>
					{title && (
						<p className={styles.card_text_title}>
							{title}
							<span>
								<ChevronRight className={styles.icon} />
							</span>
						</p>
					)}
					{description && <p className={styles.card_text_description}>{description}</p>}
				</div>
			)}
		</>
	);

	if (href) {
		return (
			<Link href={href} className={styles.card}>
				{content}
			</Link>
		);
	} else {
		return <div className={styles.card}>{content}</div>;
	}
};

const HighlightsTile = ({ items }: HighlightsTileProps) => {
	return (
		<div className={styles.highlightsTile}>
			{items && (
				<ul className={styles.highlightsTile_grid}>
					{items.map((item, key) => {
						return (
							<li key={key}>
								<HighlightsItem
									title={item.title}
									imgUrl={item.imgUrl}
									description={item.description}
									imgAlt={item.imgAlt}
								/>
							</li>
						);
					})}
				</ul>
			)}
		</div>
	);
};

export default HighlightsTile;
