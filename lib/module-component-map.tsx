import Article from '../components/article';
import Decoration from '../components/decoration';
import FullWidthImage from '../components/full-width-image';
import GridGallery from '../components/grid-gallery';
import Hero from '../components/hero';
import Mission from '../components/mission';
import Step from '../components/step';
import TextWithImage from '../components/text-with-image';
import TextWithPattern from '../components/text-with-pattern';
import FAQ from '../components/faq';
import VideoPlayer from '../components/video-player';
import TopicGrid from '../modules/topic-grid';

const pageMap = {
  hero: Hero,
  mission: Mission,
  article: Article,
  decoration: Decoration,
  text_with_image: TextWithImage,
  text_with_pattern: TextWithPattern,
  full_width_image: FullWidthImage,
  question: FAQ,
  step: Step,
  topic_grid: TopicGrid,
  gallery: GridGallery,
  video: VideoPlayer,
};

export default pageMap;
