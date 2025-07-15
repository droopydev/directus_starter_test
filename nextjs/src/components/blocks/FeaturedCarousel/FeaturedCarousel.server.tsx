// Import Local: Component
import FeaturedCarousel from './FeaturedCarousel';
import BlockHeading from '@/components/common/BlockHeading/BlockHeading';

// Import Local: Types
import { BlockFeaturedCarousel, BlockFeaturedCarouselItem } from '@/types/directus-schema';
import { FeaturedCarouselItemProps } from './FeaturedCarousel.types';

// Import Local: Uitls
import { getDirectusAssetURL } from '@/lib/directus/directus-utils';

const FeaturedCarouselServer = ({ data }: { data: BlockFeaturedCarousel }) => {
	const { image_alignment, items, display_description, display_title } = data;

	const formattedItems: FeaturedCarouselItemProps[] = (items as BlockFeaturedCarouselItem[]).map((item) => {
		const { item_title, item_description, item_image } = item;

		return {
			imgUrl: item_image && typeof item_image === 'object' ? getDirectusAssetURL(item_image.id) : null,
			imgAlt:
				item_image && typeof item_image === 'object' && item_image.description
					? item_image.description
					: `Missing Description for ${item_title}`,
			sanitizedDescription: item_description ?? 'Missing Description',
			imgAlignment: image_alignment,
		};
	});

	return (
		<>
			{(display_description || display_title) && (
				<BlockHeading title={display_title} sanitizedDescription={display_description} />
			)}

			<FeaturedCarousel items={formattedItems} />
		</>
	);
};

export default FeaturedCarouselServer;
