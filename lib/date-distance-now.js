import { format, differenceInHours, differenceInMinutes } from 'date-fns';

export default function DateDistance(props) {
  const { date } = props;

  const date1 = Date.parse(date);
  const date2 = new Date();

  var minuteBetween = differenceInMinutes(date2, date1);
  var hourBetween = differenceInHours(date2, date1);

  if (hourBetween < 1 && hourBetween > 0) {
    return `${minuteBetween} phút trước`;
  }
  if (hourBetween <= 24 && hourBetween >= 1) {
    return `${hourBetween} giờ trước`;
  }
  return format(date1, "k:mm | dd/MM/yyyy");
}
