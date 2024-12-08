import { ListTodo, LayoutDashboard } from 'lucide-react';
import AddTask from './components/AddTask';
import ListTask from './components/ListTask';
import { useSelector } from 'react-redux';

const App = () => {
  const tasks = useSelector(state => state.todos.tasks);
  const completedTasks = tasks.filter(task => task.isDone).length;
  const pendingTasks = tasks.length - completedTasks;

  return (
    <div className="min-h-screen bg-[#F8FAFC] py-8 px-4">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="mb-8 text-center">
          <div className="flex items-center justify-center gap-3 mb-2">
            <ListTodo className="w-10 h-10 text-[#2563EB]" />
            <h1 className="text-4xl font-bold text-[#1E293B]">
              Task Master
            </h1>
          </div>
          <p className="text-[#64748B]">Organize • Track • Accomplish</p>
        </div>

        <div className="grid md:grid-cols-[350px,1fr] gap-6">
          {/* Left Sidebar */}
          <div className="space-y-6">
            {/* Add Task Card */}
            <div className="bg-white rounded-xl p-6 shadow-sm border border-[#E2E8F0]">
              <h2 className="text-xl font-semibold text-[#1E293B] mb-4 flex items-center gap-2">
                <LayoutDashboard className="w-5 h-5 text-[#2563EB]" />
                New Task
              </h2>
              <AddTask />
            </div>

            {/* Statistics Card */}
            <div className="bg-white rounded-xl p-6 shadow-sm border border-[#E2E8F0]">
              <h2 className="text-xl font-semibold text-[#1E293B] mb-4">Statistics</h2>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-[#64748B]">Total Tasks</span>
                  <span className="text-[#1E293B] font-semibold text-lg">{tasks.length}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-[#64748B]">Completed</span>
                  <span className="text-[#059669] font-semibold text-lg">{completedTasks}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-[#64748B]">Pending</span>
                  <span className="text-[#DC2626] font-semibold text-lg">{pendingTasks}</span>
                </div>
                {tasks.length > 0 && (
                  <div className="mt-4 pt-4 border-t border-[#E2E8F0]">
                    <div className="w-full bg-[#F1F5F9] rounded-full h-2.5">
                      <div
                        className="bg-[#2563EB] h-2.5 rounded-full transition-all"
                        style={{ width: `${(completedTasks / tasks.length) * 100}%` }}
                      ></div>
                    </div>
                    <p className="text-[#64748B] text-sm mt-2 text-center">
                      {Math.round((completedTasks / tasks.length) * 100)}% Complete
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Main Content - Task List */}
          <div className="bg-white rounded-xl p-6 shadow-sm border border-[#E2E8F0]">
            <ListTask />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
