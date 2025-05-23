interface MovieData {
  adult: boolean;
  id: number;
  backdrop_path: string | null;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

interface MovieDetailData extends MovieData {
  origin_country: string[];
  production_companies: { id: number; logo_path: string | null; name: string; origin_country: string }[];
  production_countries: { iso_3166_1: string; name: string }[];
  spoken_languages: { english_name: string; iso_639_1: string; name: string }[];
  imdb_id: string;
  belongs_to_collection: string | null;
  tagline: string;
  genres: { id: number; name: string }[];
  budget: number;
  homepage: string;
  revenue: number;
  runtime: number;
  status: string;
}
interface MovieItemData extends MovieData {
  genre_ids: number[];
}

interface MovieCastData {
  adult: boolean;
  gender: number;
  id: number;
  known_for_department: string;
  name: string;
  original_name: string;
  popularity: number;
  profile_path: string | null;
  cast_id: number;
  character: string;
  credit_id: string;
  order: number;
}

interface MovieCrewData {
  adult: boolean;
  gender: number;
  id: number;
  known_for_department: string;
  name: string;
  original_name: string;
  popularity: number;
  profile_path: string | null;
  credit_id: string;
  department: string;
  job: string;
}

interface MovieCreditsData {
  id: MovieData['id'];
  cast: MovieCastData[];
  crew: MovieCrewData[];
}

interface MovieVideoItem {
  iso_639_1: string;
  iso_3166_1: string;
  name: string;
  key: string;
  site: string;
  size: number;
  type: string;
  official: boolean;
  published_at: string;
  id: string;
}
interface MovieVideoData {
  id: number;
  results: MovieVideoItem[];
}

interface MovieReviewItem {
  author: string;
  author_details: {
    name: string;
    username: string;
    avatar_path: string | null;
    rating: number;
  };
  content: string;
  created_at: string;
  id: string;
  updated_at: string;
  url: string;
}

interface MovieReviewData extends PageQuery {
  id: MovieData['id'];
  results: MovieReviewItem[];
}
