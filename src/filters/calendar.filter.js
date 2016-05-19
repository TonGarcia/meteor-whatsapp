import Moment from 'moment';
import { Filter } from '../entities';

export default class CalendarFilter extends Filter {
  static $name = 'calendar'

  filter(time) {
    if (!time) return;

    return Moment(time).calendar(null, {
      lastDay : '[Yesterday]',
      sameDay : 'LT',
      lastWeek : 'dddd',
      sameElse : 'DD/MM/YY'
    });
  }
}
