import FooterBanner from './FooterBanner';
import { BlockFooterBanner } from '@/types/directus-schema';

const FooterBannerServer = ({ data }: { data: BlockFooterBanner }) => {
	const { content } = data;

	return <FooterBanner sanitizedContent={content} />;
};

export default FooterBannerServer;
