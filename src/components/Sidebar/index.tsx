import { List, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import { MdInfoOutline, MdList, MdMailOutline, MdOutlineHome, MdTaskAlt } from 'react-icons/md';
import { RiOrganizationChart } from 'react-icons/ri';
import { Link } from 'react-router-dom';

const Sidebar: React.FC = () => {
    return (
        <List
            sx={{
                width: 240,
                borderRightStyle: 'solid',
                borderRightColor: (theme) => theme.palette.divider,
                borderRightWidth: 1,
            }}
        >
            <ListItemButton component={Link} to="/">
                <ListItemIcon>
                    <MdOutlineHome style={{ width: 24, height: 24 }} />
                </ListItemIcon>
                <ListItemText primary="トップ" />
            </ListItemButton>
            <ListItemButton component={Link} to="/info">
                <ListItemIcon>
                    <MdInfoOutline style={{ width: 24, height: 24 }} />
                </ListItemIcon>
                <ListItemText primary="お知らせ" />
            </ListItemButton>
            <ListItemButton component={Link} to="/task">
                <ListItemIcon>
                    <MdTaskAlt style={{ width: 24, height: 24 }} />
                </ListItemIcon>
                <ListItemText primary="作業予定/実績" />
            </ListItemButton>
            <ListItemButton component={Link} to="/enquete">
                <ListItemIcon>
                    <MdList style={{ width: 24, height: 24 }} />
                </ListItemIcon>
                <ListItemText primary="アンケート" />
            </ListItemButton>
            <ListItemButton component={Link} to="/suggestion">
                <ListItemIcon>
                    <MdMailOutline style={{ width: 24, height: 24 }} />
                </ListItemIcon>
                <ListItemText primary="目安箱" />
            </ListItemButton>
            <ListItemButton component={Link} to="/transfer">
                <ListItemIcon>
                    <RiOrganizationChart style={{ width: 24, height: 24 }} />
                </ListItemIcon>
                <ListItemText primary="部署異動希望" />
            </ListItemButton>
        </List>
    );
};

export default Sidebar;
