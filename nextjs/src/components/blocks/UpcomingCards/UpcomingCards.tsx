import styles from './UpcomingCards.module.css';

import { Calendar, CalendarClock, ArrowRight} from 'lucide-react';

interface UpcomingCardItemProps {
    imgUrl: string;
    imgAlt: string;
    title: string;
    date: string;
    time: string;
    description: string;
}

const Card = () => {
	return (
		<div className={styles.card}>
			<div className={styles.card_img_container}>
				<p>I am an image</p>
			</div>
			<div className={styles.card_text_container}>
				<div className={styles.card_date_time_container}>
					<p><span><Calendar className={styles.card_date_time_icon} size={18}/></span>27 May - 31 May 2025</p>
					<p><span><CalendarClock className={styles.card_date_time_icon} size={18} /></span>11:00AM - 5:00PM</p>
				</div>
				<p className={styles.card_title}>Science Workshop #1</p>
				<p>An interactive workshop exploring the fascinating world of science through hands-on experiments</p>
                <div className='scb-btn-primary'>View More</div>
			</div>
		</div>
	);
};

const UpcomingCards = () => {
	return (
		<div className={styles.upcomingcards}>
			<div className={styles.upcomingcards_text}>
				<p className={styles.upcomingcards_title}>Upcoming Events</p>
				<p className={styles.upcomingcards_link}>View All Events <ArrowRight size={20}/></p>
			</div>
			<ul className="grid sm:grid-cols-1 md:grid-cols-3 gap-5">
				<li>
					<Card />
				</li>
				<li>
					<Card />
				</li>
				<li>
					<Card />
				</li>
			</ul>
		</div>
	);
};

export default UpcomingCards;
