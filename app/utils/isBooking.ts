import { isLegacyDevice } from "./isLegacyDevice/isLegacyDevice";
import { getIsSeasonNow } from "./isSeason/isSeason";

export const isBooking = !isLegacyDevice && getIsSeasonNow()