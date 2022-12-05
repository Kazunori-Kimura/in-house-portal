import { Route, Routes } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Enquete from './pages/Enquete';
import Information from './pages/Information';
import Suggestion from './pages/Suggestion';
import Task from './pages/Task';
import Transfer from './pages/Transfer';

const App: React.FC = () => {
    return (
        <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/info" element={<Information />} />
            <Route path="/enquete" element={<Enquete />} />
            <Route path="/suggestion" element={<Suggestion />} />
            <Route path="/task" element={<Task />} />
            <Route path="/transfer" element={<Transfer />} />
        </Routes>
    );
};

export default App;
