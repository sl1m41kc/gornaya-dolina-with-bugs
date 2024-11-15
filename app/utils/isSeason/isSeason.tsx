export function getIsSeasonNow() {
  const today = new Date();
  const year = today.getFullYear();

  // Даты начала и конца сезона
  const startOfSeason = new Date(year, 2, 1); // 1 марта (месяцы начинаются с 0)
  const endOfSeason = new Date(year, 9, 10); // 10 октября

  // Проверяем, попадает ли сегодня в сезон
  return today >= startOfSeason && today <= endOfSeason;
}
