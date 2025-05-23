import Hero from '@/components/pages/home/Hero';
import PopularMovie from '@/components/pages/home/PopularMovie';
import RankingMovie from '@/components/pages/home/RankingMovie';
import UpcomingMovie from '@/components/pages/home/UpcomingMovie';

const Home = () => {
  return (
    <>
      <Hero />
      <PopularMovie />
      <RankingMovie />
      <UpcomingMovie />
    </>
  );
};

export default Home;
