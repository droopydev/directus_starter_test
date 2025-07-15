import { BlockHighlightTile, BlockHighlightTilesItem } from '@/types/directus-schema';
import { HighlightsItemProps } from './HighlightsTile.types';

// Import Local: Components
import HighlightsTile from './HighlightsTile';
import BlockHeading from '@/components/common/BlockHeading/BlockHeading';

import { getDirectusAssetURL } from '@/lib/directus/directus-utils';

const HighlightsTileServer = ({ data }: { data: BlockHighlightTile }) => {
	const { items, display_title, display_description } = data;
	
	if (!items || !Array.isArray(items)) return null;

	const formattedItems: HighlightsItemProps[] = (items as BlockHighlightTilesItem[]).map((item) => {
		const { item_title, item_description, item_image } = item;

		return {
			title: item_title ?? null,
			description: item_description ?? null,
			imgUrl: item_image && typeof item_image === 'object' ? getDirectusAssetURL(item_image.id) : null,
			imgAlt:
				item_image && typeof item_image === 'object' && item_image.description
					? item_image.description
					: 'Missing Description',
		};
	});

	return (
		<>
			<BlockHeading title={display_title} sanitizedDescription={display_description}/>
			<HighlightsTile items={formattedItems} />
		</>
	) 
};

export default HighlightsTileServer;
