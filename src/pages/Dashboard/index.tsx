import { Stack } from '@mui/material';
import Layout from '../../components/Layout';
import Attendance from '../../components/widgets/Attendance';
import Calendar from '../../components/widgets/Calendar';
import Information from '../../components/widgets/Information';
import PaidHoliday from '../../components/widgets/PaidHoliday';
import Task from '../../components/widgets/Task';

const Dashboard: React.FC = () => {
    return (
        <Layout>
            <Stack direction="column" spacing={2}>
                {/* 重要なお知らせ */}
                <Information />
                {/* カレンダー */}
                <Calendar />
                <Stack direction="row" spacing={2}>
                    <Stack direction="column" sx={{ flex: 3 }} spacing={2}>
                        {/* 今日の作業内容 */}
                        <Task />
                    </Stack>
                    <Stack direction="column" sx={{ flex: 2 }} spacing={2}>
                        {/* 累積所定時間、残業時間、休日時間 */}
                        <Attendance />
                        {/* 有給残 */}
                        <PaidHoliday />
                    </Stack>
                </Stack>
            </Stack>
        </Layout>
    );
};

export default Dashboard;
