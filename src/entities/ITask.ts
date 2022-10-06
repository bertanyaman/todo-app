import * as moment from 'moment';
type RangePickerValue = undefined[] | [moment.Moment] | [undefined, moment.Moment] | [moment.Moment, undefined] | [moment.Moment, moment.Moment];
export interface ITask {
    isToday: boolean,
    description: string,
    isComplete: boolean,
    dateRange: RangePickerValue,
    flag: boolean
}