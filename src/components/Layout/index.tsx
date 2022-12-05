import { AppBar, Avatar, Container, CssBaseline, Stack, Toolbar, Typography } from '@mui/material';
import { indigo } from '@mui/material/colors';
import { ReactNode } from 'react';
import { BsPersonCircle } from 'react-icons/bs';
import { GiCat } from 'react-icons/gi';
import { Link } from 'react-router-dom';
import Sidebar from '../Sidebar';
import Spacer from '../Spacer';

interface Props {
    children: ReactNode;
}

const Layout: React.FC<Props> = ({ children }) => {
    return (
        <>
            <CssBaseline />
            <AppBar position="fixed">
                <Toolbar>
                    <Avatar component={Link} to="/" sx={{ bgcolor: indigo[500] }} variant="rounded">
                        <GiCat />
                    </Avatar>
                    <Typography component="h1" variant="h6" sx={{ ml: 2 }}>
                        社内ポータルサイト
                    </Typography>
                    <Spacer />
                    <Typography
                        variant="body2"
                        component="div"
                        sx={{
                            display: 'flex',
                            alignItems: 'center',
                        }}
                    >
                        <BsPersonCircle
                            style={{
                                width: 20,
                                height: 20,
                                marginRight: 6,
                            }}
                        />
                        山田 太郎 さん
                    </Typography>
                </Toolbar>
            </AppBar>
            <Toolbar />
            <Stack
                direction="row"
                sx={{ mt: 2, height: 'calc(100svh - 84px)' }}
                alignItems="stretch"
            >
                <Sidebar />
                <Container component="main">{children}</Container>
            </Stack>
        </>
    );
};

export default Layout;
