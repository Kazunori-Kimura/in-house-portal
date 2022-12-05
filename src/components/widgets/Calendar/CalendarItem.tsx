import { Stack, SxProps, Theme, Typography } from '@mui/material';
import { blue, grey, indigo, pink } from '@mui/material/colors';
import { useMemo } from 'react';

interface Props {
    day: Date;
    isToday?: boolean;
}

const CalendarItem: React.FC<Props> = ({ day, isToday = false }) => {
    const [color, bgcolor, borders] = useMemo(() => {
        const borderProps: SxProps<Theme> = {
            borderRightStyle: 'solid',
            borderRightColor: (theme) => theme.palette.divider,
            borderRightWidth: 1,
        };

        if (day.getDay() === 0) {
            borderProps.borderLeftStyle = 'solid';
            borderProps.borderLeftColor = (theme) => theme.palette.divider;
            borderProps.borderLeftWidth = 1;
        }

        if (isToday) {
            return [indigo[500], indigo[100], borderProps];
        }
        if (day.getDay() === 0) {
            // 日曜日
            return [pink[500], pink[100], borderProps];
        }
        if (day.getDay() === 6) {
            // 土曜日
            return [blue[500], blue[100], borderProps];
        }
        return [grey[700], grey[50], borderProps];
    }, [day, isToday]);

    return (
        <Stack
            direction="column"
            sx={{
                flex: 1,
                p: 1,
                backgroundColor: bgcolor,
                ...borders,
            }}
        >
            <Typography
                variant="caption"
                sx={{
                    color,
                    fontWeight: 'bold',
                }}
            >
                {day.getDate()}
            </Typography>
        </Stack>
    );
};

export default CalendarItem;
