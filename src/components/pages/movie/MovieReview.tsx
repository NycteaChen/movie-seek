import { memo } from 'react';
import Loading from '@/components/Loading';
import Empty from '@/components/Empty';
// import { Button } from '@/components/ui/button';
// import { cn } from '@/lib/utils';

interface MovieReviewProps {
  movieId: MovieData['id'];
}

const mockReviews = {
  id: 552524,
  page: 1,
  results: [
    {
      author: 'tmdb98094809',
      author_details: {
        name: '',
        username: 'tmdb98094809',
        avatar_path: null,
        rating: 10.0
      },
      content:
        "Alright, buckle up, because I just saw a movie that completely blew my mind! Seriously, I'm still buzzing. From the very first scene, I was absolutely hooked, and it didn't let go until the credits rolled.\r\n\r\nThe story? Oh my gosh, the story! It was so clever and well-crafted. It had twists and turns I never saw coming, but it all made perfect sense in the end. It was like a puzzle that slowly came together, and every piece was perfectly placed. You know when a movie makes you think? This one definitely did that. It wasn't just mindless action or fluff; it had real substance.\r\n\r\nAnd the characters! They were so real and relatable. I felt like I knew them, like I was right there with them on their journey. They had depth, they had flaws, they had moments that made me laugh, and moments that made me want to cry. I was completely invested in what happened to them. The actors did an amazing job bringing them to life. You could feel their emotions through the screen.\r\n\r\nVisually, it was stunning. The way it was shot, the colors, the sets – everything was just beautiful. It wasn't just pretty to look at, though; it also added to the story and the mood. Some scenes were so powerful, they'll stay with me for a long time. The music was also perfect! It really enhanced the emotions and made everything even more impactful.\r\n\r\nHonestly, I can't think of a single thing I didn't like about this movie. It had everything: a great story, amazing characters, beautiful visuals, and a fantastic soundtrack. It made me feel so many different things, and it left me thinking long after it was over. If you're looking for a movie that will take you on a journey and leave you completely satisfied, this is it. Trust me, you won't be disappointed! It's a 10/10 masterpiece in my book!",
      created_at: '2025-04-07T05:01:36.761Z',
      id: '67f35c30eddec28b03ad856b',
      updated_at: '2025-04-11T22:05:23.212Z',
      url: 'https://www.themoviedb.org/review/67f35c30eddec28b03ad856b'
    },
    {
      author: 'CinemaSerf',
      author_details: {
        name: 'CinemaSerf',
        username: 'Geronimo1967',
        avatar_path: '/yz2HPme8NPLne0mM8tBnZ5ZWJzf.jpg',
        rating: 6.0
      },
      content:
        'Who doesn’t like a white woolly llama? Well that’s probably the highlight of this derivative CGI-fest that finds a quartet of geeks and gamers dragged through a magical portal to a world ruled by the evil “Malgosha”. Now she wants to use this glowing cube to escape from her dark and dingy “Overworld” realm and take over the peaceable and colourful real-world but she hasn’t banked on the tenacity of former gaming champion “Garrett” (Jason Momoa) and the geeky “Henry” (Sebastian Hansen) who reunite with the long trapped “Steve” (Jack Black) to save the day and the world. You don’t really need to know much about the video game to appreciate the simplicity of this, but then again I’m note sure you’d need to be much over 5 to appreciate it either. The visuals are engagingly 1980s with some references that did remind me a bit of “Back to the Future” (1985) meets “Dungeons & Dragons” and a decent soundtrack that allows Black to get straight into his element and prove that it is possible to entertain amidst what was undoubtedly (for him) a sea of green! Momoa isn’t afraid to send himself up both Danielle Brooks and Sebastian Henry seem to be ready to immerse themselves in this once in a lifetime opportunity to be in a big-budget movie without really having any lines to learn, cues to make or long sessions in the make up chair. As ever with these weakly written fantasies, the denouement is never in jeopardy but with so much enthusiasm on the screen for something that was, for many, an integral part of their growing up it’s difficult to be overly critical of something so shamelessly sentimental. What it isn’t, though, is funny and the laughs are few and far between so I think it’s best to just aim low and let the whole tide of your adolescence (if you are old enough) to wash over you before you leave the cinema, completely forget all about this and hope there isn’t a sequel.',
      created_at: '2025-04-14T14:22:18.863Z',
      id: '67fd1a1a61b1c4bb32993342',
      updated_at: '2025-04-14T14:22:18.991Z',
      url: 'https://www.themoviedb.org/review/67fd1a1a61b1c4bb32993342'
    },
    {
      author: 'CinemaSerf',
      author_details: {
        name: 'CinemaSerf',
        username: 'Geronimo1967',
        avatar_path: '/yz2HPme8NPLne0mM8tBnZ5ZWJzf.jpg',
        rating: 6.0
      },
      content:
        'Who doesn’t like a white woolly llama? Well that’s probably the highlight of this derivative CGI-fest that finds a quartet of geeks and gamers dragged through a magical portal to a world ruled by the evil “Malgosha”. Now she wants to use this glowing cube to escape from her dark and dingy “Overworld” realm and take over the peaceable and colourful real-world but she hasn’t banked on the tenacity of former gaming champion “Garrett” (Jason Momoa) and the geeky “Henry” (Sebastian Hansen) who reunite with the long trapped “Steve” (Jack Black) to save the day and the world. You don’t really need to know much about the video game to appreciate the simplicity of this, but then again I’m not sure you’d need to be much over 5 to appreciate that either. The visuals are engagingly 1980s with some references that did remind me a bit of “Back to the Future” (1985) meets “Dungeons & Dragons” whilst a decent soundtrack that allows Black to get straight into his element and prove that it is possible to entertain amidst what was undoubtedly (for him) a sea of green! Momoa isn’t afraid to send himself up and both Danielle Brooks and Sebastian Henry seem to be ready to immerse themselves in this once in a lifetime opportunity to be in a big-budget movie without really having any lines to learn, cues to make or long sessions in the make-up chair. As ever with these weakly written fantasies, the denouement is never in jeopardy but with so much enthusiasm on the screen for something that was, for many, an integral part of their growing up it’s difficult to be overly critical of something so shamelessly sentimental. What it isn’t, though, is funny and the laughs are few and far between so I think it’s best to just aim low and let the whole tide of your adolescence (if you are old enough) to wash over you before you leave the cinema, completely forget all about this and hope there isn’t a sequel.',
      created_at: '2025-04-14T14:22:20.021Z',
      id: '67fd1a1cde5e4dec62ae3f22',
      updated_at: '2025-04-14T14:24:56.356Z',
      url: 'https://www.themoviedb.org/review/67fd1a1cde5e4dec62ae3f22'
    },
    {
      author: 'Jm_15',
      author_details: {
        name: '',
        username: 'Jm_15',
        avatar_path: null,
        rating: null
      },
      content: 'Chickey Jockey is so fun to watch. I love it so much',
      created_at: '2025-05-16T02:23:40.360Z',
      id: '6826a1ac38d830e983768136',
      updated_at: '2025-05-16T22:43:19.121Z',
      url: 'https://www.themoviedb.org/review/6826a1ac38d830e983768136'
    }
  ],
  total_pages: 1,
  total_results: 4
};

const MovieReview = memo(({ movieId }: MovieReviewProps) => {
  // const [detailList, setDetailList] = useState<MovieReviewItem['id'][]>([]);
  console.log('review movieId:>> ', movieId);

  // const showDetailHandler = (id: MovieReviewItem['id']) => {
  //   const list = [...detailList];
  //   list.push(id);
  //   setDetailList(list);
  // };
  const loading = false;
  if (loading) return <Loading />;
  return (
    <div>
      {mockReviews?.results?.length ? (
        <ul className="flex flex-col gap-4">
          {mockReviews?.results?.map((item) => (
            <li key={item.id}>
              <article className="bg-black shadow-2xl rounded-2xl p-6 md:py-8 md:px-9">
                <h4 className="font-bold text-xl mb-4">{item.author}</h4>
                <p className="whitespace-pre-line">{item.content}</p>
                {/* <p className={cn('whitespace-pre-line', !detailList?.includes(item.id) && 'line-clamp-4')}>{item.content}</p> */}
                {/* {!detailList?.includes(item.id) && (
                  <Button
                    variant="link"
                    className="p-0 mt-3"
                    onClick={() => showDetailHandler(item.id)}
                  >
                    Read the rest
                  </Button>
                )} */}
              </article>
            </li>
          ))}
        </ul>
      ) : (
        <Empty />
      )}
    </div>
  );
});

MovieReview.displayName = 'MovieReview';
export default MovieReview;
