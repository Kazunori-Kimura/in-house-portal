import { Box, Card, CardContent, SxProps, Theme, Typography } from '@mui/material';

interface Props {
    sx?: SxProps<Theme>;
}

const numberFormat = new Intl.NumberFormat('ja-JP', {
    maximumFractionDigits: 2,
    minimumFractionDigits: 2,
});

const Attendance: React.FC<Props> = ({ sx = {} }) => {
    return (
        <Card variant="outlined" sx={sx}>
            <CardContent>
                <Typography variant="h6" component="h3">
                    今月の累積所定時間
                </Typography>
                <Box
                    sx={{
                        width: '100%',
                        textAlign: 'right',
                    }}
                >
                    <Typography variant="body1" sx={{ fontSize: '2rem' }}>
                        {numberFormat.format(140)} h
                    </Typography>
                </Box>
                <Typography variant="h6" component="h3">
                    今月の累積残業時間
                </Typography>
                <Box
                    sx={{
                        width: '100%',
                        textAlign: 'right',
                    }}
                >
                    <Typography variant="body1" sx={{ fontSize: '2rem' }}>
                        {numberFormat.format(8.5)} h
                    </Typography>
                </Box>
            </CardContent>
        </Card>
    );
};

export default Attendance;
