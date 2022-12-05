import { createTheme, ThemeProvider } from '@mui/material';
import { red } from '@mui/material/colors';
import { ReactNode } from 'react';
import { HashRouter } from 'react-router-dom';

interface Props {
    children: ReactNode;
}

const theme = createTheme({
    palette: {
        primary: red,
    },
});

const AppProvider: React.FC<Props> = ({ children }) => {
    return (
        <HashRouter>
            <ThemeProvider theme={theme}>{children}</ThemeProvider>
        </HashRouter>
    );
};

export default AppProvider;
