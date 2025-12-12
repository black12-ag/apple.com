import { MacContainer } from './Mac.styles';
import { ProductPageLayout } from '../../components/ProductPageLayout';
import { ChapterNav } from '../../components/ChapterNav';
import { MacExploreLineup } from './components/MacExploreLineup';
import { MacFeatures } from './components/MacFeatures';

// The Mac overview page follows Apple's structure:
// 1. Global Nav (from ProductPageLayout)
// 2. Chapter Nav (icon bar - MacBook Air, Pro, iMac, etc.)
// 3. "Mac" title + "Explore the lineup" tabs + product grid
// 4. Feature sections
// NO dark fullbleed hero on the overview page.

export const MacPage = () => {
  return (
    <ProductPageLayout>
      <ChapterNav />
      <MacContainer>
        <MacExploreLineup />
        <MacFeatures />
      </MacContainer>
    </ProductPageLayout>
  );
};
