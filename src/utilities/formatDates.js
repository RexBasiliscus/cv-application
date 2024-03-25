import { startOfToday, formatISO9075 } from "date-fns";

export const todaysDate = formatISO9075(new Date(startOfToday()), {
  representation: "date",
});
console.log(todaysDate);
