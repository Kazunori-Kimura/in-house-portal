import { Divider, useTheme } from '@mui/material';

interface Props {
    color?: string;
}

const Separator: React.FC<Props> = ({ color }) => {
    const theme = useTheme();
    return (
        <Divider
            orientation="vertical"
            flexItem
            sx={{ borderColor: color ?? theme.palette.divider }}
        />
    );
};

export default Separator;
