// import React and Next
import Image from 'next/image';
import { useId } from 'react';

// import Local
import styles from './FeaturedCarousel.module.css';
import { FeaturedCarouselItemProps, FeaturedCarouselProps } from './FeaturedCarousel.types';

// Import External: Swiper Libary
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

// Import External: Icon library
import { ChevronLeft, ChevronRight } from 'lucide-react';

// These class names are used by Swiper for DOM targeting (e.g. navigation, pagination).
// They must be static strings (not styles from CSS Modules), because Swiper uses querySelector to find them.
const PAGINATION_CLASSNAME = 'fc-pagination';
const NAVIGATION_CLASSNAME = 'fc-navigation';
const NEXT_BTN_CLASSNAME = 'button-next';
const PREV_BTN_CLASSNAME = 'button-prev';
const DISABLED_BTN_CLASSNAME = 'button-disabled';

const FeaturedCarouselItem = ({ item }: { item: FeaturedCarouselItemProps }) => {
	const { imgUrl, imgAlt, sanitizedDescription, imgAlignment } = item;
	const imgAlignmentClassname = imgAlignment === 'right' ? 'img-reverse' : '';

	return (
		<div className={`${styles.fc_item} ${imgAlignmentClassname}`}>
			{imgUrl && (
				<div className={styles.fc_item_img_container}>
					<Image unoptimized src={imgUrl} alt={imgAlt} width={576} height={432} />
				</div>
			)}
			<div className={styles.fc_item_desc_container}>
				<div className="scb-content" dangerouslySetInnerHTML={{ __html: sanitizedDescription }}></div>
			</div>
		</div>
	);
};

const CustomNavigation = () => {
	return (
		<div className={NAVIGATION_CLASSNAME}>
			<button title="Previous Slide" aria-label="Previous Slide" className={PREV_BTN_CLASSNAME}>
				<ChevronLeft strokeWidth={1.5} size={20} />
			</button>
			<button title="Next Slide" aria-label="Next Slide" className={NEXT_BTN_CLASSNAME}>
				<ChevronRight strokeWidth={1.5} size={20} />
			</button>
		</div>
	);
};

const CustomPagination = () => {
	return <div className={PAGINATION_CLASSNAME}></div>;
};

const FeaturedCarouselSlider = ({ items }: { items: FeaturedCarouselItemProps[] }) => {
	const baseId = useId();
	const SWIPER_ID = `logotile-${baseId}`;

	return (
		<div id={SWIPER_ID}>
			<div className={styles.fc_swiper_container}>
				<Swiper
					modules={[Pagination, Autoplay, Navigation]}
					spaceBetween={10}
					pagination={{
						clickable: true,
						el: `#${SWIPER_ID} .${PAGINATION_CLASSNAME}`,
					}}
					navigation={{
						enabled: true,
						disabledClass: `${DISABLED_BTN_CLASSNAME}`,
						nextEl: `#${SWIPER_ID} .${NEXT_BTN_CLASSNAME}`,
						prevEl: `#${SWIPER_ID} .${PREV_BTN_CLASSNAME}`,
					}}
				>
					{items.map((item, id) => (
						<SwiperSlide key={id}>
							<FeaturedCarouselItem item={item} />
						</SwiperSlide>
					))}
				</Swiper>
				<CustomNavigation />
			</div>
			<CustomPagination />
		</div>
	);
};

const FeaturedCarousel = ({ items }: FeaturedCarouselProps) => {
	const content =
		items.length > 1 ? <FeaturedCarouselSlider items={items} /> : <FeaturedCarouselItem item={items[0]} />;

	return <div className={styles.fc}>{content}</div>;
};

export default FeaturedCarousel;
