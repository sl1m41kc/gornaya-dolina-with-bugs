import gallery1 from "@/public/images/gallery/1.png";
import gallery2 from "@/public/images/gallery/2.png";
import gallery3 from "@/public/images/gallery/3.png";

import { comfortPageData } from "./comfort-page/data";
import { navigationData } from "./navigation/data";
import { socialMediaData } from "./social-media/data";
import { homesPageData } from "./homes-page/data";
import { listAdvantagesData } from "./list-advantages/data";
import { reviewsData } from "./reviews/data";

export const data = {
  listAdvantages: listAdvantagesData,
  gallery: [gallery1, gallery2, gallery3],
  reviews: reviewsData,
  housesPage: homesPageData,
  socialMedia: socialMediaData,
  navigation: navigationData,
  comfortPage: comfortPageData,
};
