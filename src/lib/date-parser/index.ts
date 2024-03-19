import {
  formatDistanceToNow,
  format,
  isYesterday,
  isToday,
  isThisWeek,
} from "date-fns";

export default function formatDate(date: Date) {
  if (isToday(date)) {
    return formatDistanceToNow(date, { addSuffix: true });
  } else if (isYesterday(date)) {
    return `Yesterday at ${format(date, "h a")}`;
  } else if (isThisWeek(date)) {
    return `Last ${format(date, "EEEE")} at ${format(date, "h a")}`;
  } else {
    return format(date, "MMMM d, yyyy");
  }
}
