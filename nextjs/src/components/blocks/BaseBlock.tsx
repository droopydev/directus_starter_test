'use client';

import RichText from '@/components/blocks/RichText';
import Hero from '@/components/blocks/Hero';
import Gallery from '@/components/blocks/Gallery';
import Pricing from '@/components/blocks/Pricing';
import Posts from '@/components/blocks/Posts';
import Form from '@/components/blocks/Form';

import FeaturedCarouselServer from '@/components/blocks/FeaturedCarousel/FeaturedCarousel.server';
import FooterBannerServer from '@/components/blocks/FooterBanner/FooterBanner.server';
import GradientHeroServer from '@/components/blocks/GradientHero/GradientHero.server';
import HighlightsTileServer from '@/components/blocks/HighlightsTile/HighlightsTile.server';
import UpcomingCardsClient from '@/components/blocks/UpcomingCards/UpcomingCards.client';

interface BaseBlockProps {
	block: {
		collection: string;
		item: any;
		id: string;
	};
}

const BaseBlock = ({ block }: BaseBlockProps) => {
	const components: Record<string, React.ElementType> = {
		block_hero: Hero,
		block_richtext: RichText,
		block_gallery: Gallery,
		block_pricing: Pricing,
		block_posts: Posts,
		block_form: Form,
		block_featured_carousel: FeaturedCarouselServer,
		block_footer_banner: FooterBannerServer,
		block_gradient_hero: GradientHeroServer,
		block_highlight_tiles: HighlightsTileServer,
		block_upcoming_cards: UpcomingCardsClient,
	};

	const Component = components[block.collection];

	if (!Component) {
		return null;
	}

	const itemId = block.item?.id;

	return <Component data={block.item} blockId={block.id} itemId={itemId} />;
};

export default BaseBlock;
