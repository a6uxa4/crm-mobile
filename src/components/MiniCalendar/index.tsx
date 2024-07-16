import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {
  differenceInDays,
  endOfMonth,
  startOfMonth,
  isWithinInterval,
  isSameDay,
} from 'date-fns';
import { useState } from 'react';

const typeMonth = [
  'Январь',
  'Февраль',
  'Март',
  'Апрель',
  'Май',
  'Июнь',
  'Июль',
  'Август',
  'Сентябрь',
  'Октябрь',
  'Ноябрь',
  'Декабрь',
];
const typeWeek = ['ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ', 'ВС'];

export const MiniCalendar = ({value, onChange}) => {
  const {startPeriod, endPeriod} = value;
  const [currentDate, setCurrentDate] = useState(new Date());

  function nextMonth() {
    const nextMonthDate = new Date(currentDate);
    nextMonthDate.setMonth(currentDate.getMonth() + 1);
    setCurrentDate(nextMonthDate);
  }

  function prevMonth() {
    const prevMonthDate = new Date(currentDate);
    prevMonthDate.setMonth(currentDate.getMonth() - 1);
    setCurrentDate(prevMonthDate);
  }

  const startOfDay = startOfMonth(currentDate);
  const endOfDay = endOfMonth(currentDate);
  const numDays = differenceInDays(endOfDay, startOfDay) + 1;

  const prefixDays = (startOfDay.getDay() + 6) % 7;
  const sufixDays = (6 - endOfDay.getDay() + 1) % 7;

  function handleDatePress(date) {
    if (!startPeriod || (startPeriod && endPeriod)) {
      onChange({startPeriod: date, endPeriod: null});
    } else {
      if (date < startPeriod) {
        onChange({startPeriod: date, endPeriod: startPeriod});
      } else {
        onChange({startPeriod, endPeriod: date});
      }
    }
  }

  function isInRange(date) {
    return (
      startPeriod &&
      endPeriod &&
      isWithinInterval(date, {start: startPeriod, end: endPeriod})
    );
  }

  function isDayStyle(date) {
    if (isSameDay(date, startPeriod) && isSameDay(date, endPeriod)) {
      return styles.singleDay;
    } else if (isSameDay(date, startPeriod)) {
      return styles.startDay;
    } else if (isSameDay(date, endPeriod)) {
      return styles.endDay;
    } else if (isInRange(date)) {
      return styles.rangeDay;
    }
    return styles.dayButton;
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={prevMonth} style={styles.navButton}>
          <Text style={styles.navButtonText}>{'<'}</Text>
        </TouchableOpacity>
        <View style={styles.monthYearContainer}>
          <Text style={styles.monthText}>
            {typeMonth[currentDate.getMonth()]}
          </Text>
          <Text style={styles.yearText}>{currentDate.getFullYear()}</Text>
        </View>
        <TouchableOpacity onPress={nextMonth} style={styles.navButton}>
          <Text style={styles.navButtonText}>{'>'}</Text>
        </TouchableOpacity>
      </View>
      <View>
        <View style={styles.weekDaysContainer}>
          {typeWeek.map(item => (
            <Text key={item} style={styles.weekDayText}>
              {item}
            </Text>
          ))}
        </View>
        <View style={styles.daysGrid}>
          {Array.from({length: prefixDays}).map((_, index) => (
            <View key={`prefix-${index}`} style={styles.emptyDay} />
          ))}
          {Array.from({length: numDays}).map((_, index) => {
            const day = index + 1;
            const date = new Date(
              currentDate.getFullYear(),
              currentDate.getMonth(),
              day,
            );
            return (
              <TouchableOpacity
                key={day}
                style={[styles.dayButton, isDayStyle(date)]}
                onPress={() => handleDatePress(date)}>
                <Text
                  style={[
                    styles.dayText,
                    (isSameDay(date, startPeriod) ||
                      isSameDay(date, endPeriod)) &&
                      styles.selectedDayText,
                  ]}>
                  {day}
                </Text>
              </TouchableOpacity>
            );
          })}
          {Array.from({length: sufixDays}).map((_, index) => (
            <View key={`sufix-${index}`} style={styles.emptyDay} />
          ))}
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    minWidth: 235,
    paddingHorizontal: 20,
    backgroundColor: 'white',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  monthYearContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  monthText: {
    fontSize: 18,
    fontWeight: '500',
    color: 'black',
  },
  yearText: {
    fontSize: 18,
    fontWeight: '400',
    color: '#666',
    marginLeft: 4,
  },
  navButton: {
    padding: 8,
  },
  navButtonText: {
    fontSize: 18,
    color: '#3B82F6',
  },
  weekDaysContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  weekDayText: {
    fontSize: 12,
    fontWeight: '600',
    color: '#71717A',
    textAlign: 'center',
    width: '14.28%',
  },
  daysGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  emptyDay: {
    width: '14.28%',
    aspectRatio: 1,
  },
  dayButton: {
    width: '14.28%',
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  dayText: {
    fontSize: 14,
    fontWeight: '400',
    color: 'black',
  },
  startDay: {
    backgroundColor: '#3B82F6',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderTopLeftRadius: 100,
    borderBottomLeftRadius: 100,
  },
  endDay: {
    backgroundColor: '#3B82F6',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderTopRightRadius: 100,
    borderBottomRightRadius: 100,
  },
  singleDay: {
    backgroundColor: '#3B82F6',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 100,
  },
  selectedDayText: {
    color: 'white',
    fontWeight: '600',
  },
  rangeDay: {
    backgroundColor: '#93C5FD',
  },
});
