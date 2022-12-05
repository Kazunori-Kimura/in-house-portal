import { IconButton, Stack, SxProps, Theme } from '@mui/material';
import { useCallback, useEffect, useState } from 'react';
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';
import Spacer from '../../Spacer';
import CalendarItem from './CalendarItem';
import CalendarRangeLabel from './CalendarRangeLabel';

interface Props {
    sx?: SxProps<Theme>;
}

const today = new Date();

function equalsToday(date: Date): boolean {
    return date.toDateString() === today.toDateString();
}

function getWeekDays(date: Date): Date[] {
    const d = new Date(date.getTime());
    d.setDate(d.getDate() - d.getDay());

    const days: Date[] = [new Date(d.getTime())];
    for (let i = 1; i < 7; i++) {
        d.setDate(d.getDate() + 1);
        days.push(new Date(d.getTime()));
    }

    return days;
}

const Calendar: React.FC<Props> = ({ sx = {} }) => {
    const [days, setDays] = useState<Date[]>([]);

    const handleClickPrev = useCallback(() => {
        let d: Date;
        if (days.length > 0) {
            d = new Date(days[0].getTime());
        } else {
            d = new Date();
        }

        d.setDate(d.getDate() - 7);
        const newDays = getWeekDays(d);
        setDays(newDays);
    }, [days]);

    const handleClickNext = useCallback(() => {
        let d: Date;
        if (days.length > 0) {
            d = new Date(days[0].getTime());
        } else {
            d = new Date();
        }

        d.setDate(d.getDate() + 7);
        const newDays = getWeekDays(d);
        setDays(newDays);
    }, [days]);

    useEffect(() => {
        const newDays = getWeekDays(today);
        setDays(newDays);
    }, []);

    return (
        <Stack sx={sx} direction="column">
            <Stack
                direction="row"
                sx={{
                    borderStyle: 'solid',
                    borderColor: (theme) => theme.palette.divider,
                    borderWidth: 1,
                }}
            >
                <IconButton onClick={handleClickPrev}>
                    <MdChevronLeft />
                </IconButton>
                <Spacer />
                {days.length > 0 && (
                    <CalendarRangeLabel start={days[0]} end={days[days.length - 1]} />
                )}
                <Spacer />
                <IconButton onClick={handleClickNext}>
                    <MdChevronRight />
                </IconButton>
            </Stack>
            <Stack
                direction="row"
                sx={{
                    height: 120,
                    borderBottomStyle: 'solid',
                    borderBottomColor: (theme) => theme.palette.divider,
                    borderBottomWidth: 1,
                }}
                alignItems="stretch"
            >
                {days.map((day) => (
                    <CalendarItem
                        key={`calendar-item-${day.toJSON()}`}
                        day={day}
                        isToday={equalsToday(day)}
                    />
                ))}
            </Stack>
        </Stack>
    );
};

export default Calendar;
