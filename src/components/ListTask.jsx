import { useSelector, useDispatch } from 'react-redux';
import { selectFilteredTasks, setFilter } from '../store/todoSlice';
import { ListFilter } from 'lucide-react';
import Task from './Task';

const ListTask = () => {
  const dispatch = useDispatch();
  const tasks = useSelector(selectFilteredTasks);
  const filter = useSelector(state => state.todos.filter);

  const filterButtons = [
    { value: 'all', label: 'All Tasks' },
    { value: 'notDone', label: 'Active' },
    { value: 'done', label: 'Completed' }
  ];

  return (
    <div className="space-y-6">
      {/* Filter Header */}
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-semibold text-[#1E293B] flex items-center gap-2">
          <ListFilter className="w-5 h-5 text-[#2563EB]" />
          Task List
        </h2>
        <div className="flex gap-2">
          {filterButtons.map(({ value, label }) => (
            <button
              key={value}
              onClick={() => dispatch(setFilter(value))}
              className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-colors
                ${filter === value
                  ? 'bg-[#2563EB] text-white'
                  : 'text-[#64748B] hover:text-[#1E293B] hover:bg-[#F1F5F9]'
                }`}
            >
              {label}
            </button>
          ))}
        </div>
      </div>

      {/* Task List */}
      <div className="space-y-3">
        {tasks.length === 0 ? (
          <div className="text-center py-8">
            <p className="text-[#64748B]">No tasks found</p>
          </div>
        ) : (
          tasks.map(task => (
            <Task
              key={task.id}
              id={task.id}
              description={task.description}
              isDone={task.isDone}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default ListTask; 