import { PageBlock } from '@/types/directus-schema';
import BaseBlock from '@/components/blocks/BaseBlock';
import Container from '@/components/ui/container';

interface PageBuilderProps {
	sections: PageBlock[];
}

const FULL_WIDTH_BLOCKS = ['block_footer_banner', 'block_gradient_hero']

const PageBuilder = ({ sections }: PageBuilderProps) => {
	const validBlocks = sections.filter(
		(block): block is PageBlock & { collection: string; item: object } =>
			typeof block.collection === 'string' && !!block.item && typeof block.item === 'object',
	);

	return (
		<>
			{validBlocks.map((block) => {
				if (FULL_WIDTH_BLOCKS.includes(block.collection)) {
					return (
						<section data-component={block.collection} key={block.id} data-background={block.background}>
							<BaseBlock
								block={{
									collection: block.collection,
									item: block.item,
									id: block.id,
								}}
							/>
						</section>
					);
				} else {
				}
				return (
					<section data-component={block.collection} key={block.id} data-background={block.background} className="py-16">
						<Container>
							<BaseBlock
								block={{
									collection: block.collection,
									item: block.item,
									id: block.id,
								}}
							/>
						</Container>
					</section>
				);
			})}
		</>
	);
};

export default PageBuilder;
