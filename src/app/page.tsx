import Hero from '@/components/pages/home/Hero';
import ListArea from '@/components/pages/home/ListArea';

const mock = {
  adult: false,
  backdrop_path: '/2Nti3gYAX513wvhp8IiLL6ZDyOm.jpg',
  genre_ids: [10751, 35, 12, 14],
  id: 950387,
  original_language: 'en',
  original_title: 'A Minecraft Movie',
  overview:
    "Four misfits find themselves struggling with ordinary problems when they are suddenly pulled through a mysterious portal into the Overworld: a bizarre, cubic wonderland that thrives on imagination. To get back home, they'll have to master this world while embarking on a magical quest with an unexpected, expert crafter, Steve.",
  popularity: 757.1254,
  poster_path: '/yFHHfHcUgGAxziP1C3lLt0q2T4s.jpg',
  release_date: '2025-03-31',
  title: 'A Minecraft Movie',
  video: false,
  vote_average: 6.5,
  vote_count: 1324
};

const mockList = Array(10).fill(mock);

const Home = () => {
  return (
    <>
      <Hero />
      <ListArea
        title="Hot"
        iconName="hot"
        list={mockList}
      />
      <ListArea
        sectionClass="bg-foreground/10"
        title="Ranking"
        iconName="star"
        list={mockList}
      />
      <ListArea
        title="Coming Soon"
        iconName="calendar"
        list={mockList}
      />
    </>
  );
};

export default Home;
