import { Button, Card, CardContent, List, Stack, SxProps, Theme, Typography } from '@mui/material';
import { MdOutlineAddTask } from 'react-icons/md';
import Spacer from '../../Spacer';
import TaskItem, { TaskItemProps } from './TaskItem';

interface Props {
    sx?: SxProps<Theme>;
}

const tasks: TaskItemProps[] = [
    {
        task: 'タスク1',
        highPriority: true,
    },
    {
        task: 'タスク2',
    },
    {
        task: 'タスク3',
        done: true,
    },
];

const Task: React.FC<Props> = ({ sx = {} }) => {
    return (
        <Card variant="outlined" sx={sx}>
            <CardContent>
                <Stack direction="row" alignItems="center" sx={{ mb: 1 }}>
                    <Typography variant="h6" component="h3">
                        本日の作業予定
                    </Typography>
                    <Spacer />
                    <Button startIcon={<MdOutlineAddTask />}>タスク追加</Button>
                </Stack>
                <List
                    sx={{
                        borderStyle: 'solid',
                        borderColor: (theme) => theme.palette.divider,
                        borderWidth: 1,
                        minHeight: 300,
                    }}
                >
                    {tasks.map((task, index) => (
                        <TaskItem key={`task-item-${index}`} {...task} />
                    ))}
                </List>
            </CardContent>
        </Card>
    );
};

export default Task;
