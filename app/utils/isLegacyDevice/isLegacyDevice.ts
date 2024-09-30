import platform from 'platform';

// Определяем устаревший iOS
export const isLegacyDevice =
  platform.os?.family === 'iOS' &&
  Number(platform.os.version?.split('.')[0]) < 15;
