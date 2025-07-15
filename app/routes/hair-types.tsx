import { generateMetaTags, seoData } from '../utils/seo';
import HairTypes from '../components/HairTypes';

export const meta = () => {
  return generateMetaTags(seoData.hairTypes);
};

export default function HairTypesRoute() {
  return <HairTypes />;
}