import { Alert, AlertTitle, Box, SxProps, Theme, Typography } from '@mui/material';

interface Props {
    sx?: SxProps<Theme>;
}

const Information: React.FC<Props> = ({ sx = {} }) => {
    return (
        <Box sx={sx}>
            <Alert severity="error">
                <AlertTitle>重要なお知らせ</AlertTitle>
                <Typography>[2022/12/05] 年末調整について</Typography>
            </Alert>
        </Box>
    );
};

export default Information;
