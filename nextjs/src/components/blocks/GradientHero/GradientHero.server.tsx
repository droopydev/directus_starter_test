import GradientHero from './GradientHero';

import { BlockGradientHero } from '@/types/directus-schema';

const GradientHeroServer = ({ data }: { data: BlockGradientHero }) => {
	const { title, description } = data;

	return <GradientHero title={title} description={description} />;
};

export default GradientHeroServer;
