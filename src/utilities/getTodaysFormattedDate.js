import { startOfToday, formatISO9075 } from "date-fns";

export const getTodaysFormattedDate = formatISO9075(new Date(startOfToday()), {
  representation: "date",
});
