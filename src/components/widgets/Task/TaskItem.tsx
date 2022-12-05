import { Divider, ListItemButton, ListItemIcon, ListItemText, Typography } from '@mui/material';
import { green, grey, pink } from '@mui/material/colors';
import { useCallback, useEffect, useState } from 'react';
import { MdCheckCircle, MdPriorityHigh, MdRadioButtonUnchecked } from 'react-icons/md';

export interface TaskItemProps {
    task: string;
    done?: boolean;
    highPriority?: boolean;
}

const TaskItem: React.FC<TaskItemProps> = ({ task, done = false, highPriority = false }) => {
    const [checked, setChecked] = useState(false);

    const handleClick = useCallback(() => {
        setChecked((state) => !state);
    }, []);

    useEffect(() => {
        setChecked(done);
    }, [done]);
    return (
        <>
            <ListItemButton onClick={handleClick}>
                <ListItemIcon>
                    {checked ? (
                        <MdCheckCircle style={{ width: 24, height: 24, color: green[400] }} />
                    ) : (
                        <MdRadioButtonUnchecked
                            style={{ width: 24, height: 24, color: grey[400] }}
                        />
                    )}
                </ListItemIcon>
                <ListItemText
                    primary={
                        <Typography sx={{ textDecoration: checked ? 'line-through' : 'none' }}>
                            {task}
                        </Typography>
                    }
                />
                {highPriority && (
                    <MdPriorityHigh style={{ width: 24, height: 24, color: pink[500] }} />
                )}
            </ListItemButton>
            <Divider />
        </>
    );
};

export default TaskItem;
