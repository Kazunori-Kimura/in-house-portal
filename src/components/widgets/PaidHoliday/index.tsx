import { Box, Card, CardContent, Stack, SxProps, Theme, Typography } from '@mui/material';

interface Props {
    sx?: SxProps<Theme>;
}

const PaidHoliday: React.FC<Props> = ({ sx = {} }) => {
    return (
        <Card variant="outlined" sx={sx}>
            <CardContent>
                <Stack direction="column">
                    <Typography component="h3" variant="h6">
                        今年度の有給休暇取得日数
                    </Typography>
                    <Box
                        sx={{
                            width: '100%',
                            textAlign: 'right',
                        }}
                    >
                        <Typography variant="body1" sx={{ fontSize: '2rem' }}>
                            5 日
                        </Typography>
                    </Box>
                    <Typography component="h3" variant="h6">
                        今年度の有給休暇残日数
                    </Typography>
                    <Box
                        sx={{
                            width: '100%',
                            textAlign: 'right',
                        }}
                    >
                        <Typography variant="body1" sx={{ fontSize: '2rem' }}>
                            8 日
                        </Typography>
                    </Box>
                </Stack>
            </CardContent>
        </Card>
    );
};

export default PaidHoliday;
