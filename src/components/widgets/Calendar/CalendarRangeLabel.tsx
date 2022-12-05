import { Stack, Typography } from '@mui/material';

interface Props {
    start: Date;
    end: Date;
}

const dateFormat = new Intl.DateTimeFormat('ja-JP', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
});

const CalendarRangeLabel: React.FC<Props> = ({ start, end }) => {
    return (
        <Stack direction="row" spacing={2} alignItems="center">
            <Typography variant="body2">{dateFormat.format(start)}</Typography>
            <Typography variant="body2">〜</Typography>
            <Typography variant="body2">{dateFormat.format(end)}</Typography>
        </Stack>
    );
};

export default CalendarRangeLabel;
