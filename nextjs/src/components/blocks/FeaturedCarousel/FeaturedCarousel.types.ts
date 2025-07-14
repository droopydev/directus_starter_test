export interface FeaturedCarouselProps {
    items: FeaturedCarouselItemProps[]
}

export interface FeaturedCarouselItemProps {
    imgUrl: string | null;
    imgAlt: string;
    sanitizedDescription: string
    imgAlignment: 'left' | 'right';
}