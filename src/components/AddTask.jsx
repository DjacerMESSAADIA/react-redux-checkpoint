import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from '../store/todoSlice';
import { Plus } from 'lucide-react';

const AddTask = () => {
  const [description, setDescription] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (description.trim()) {
      dispatch(addTask(description.trim()));
      setDescription('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="space-y-3">
        <input
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="What needs to be done?"
          className="w-full px-4 py-3 bg-[#F8FAFC] border border-[#E2E8F0] rounded-lg 
                   text-[#1E293B] placeholder-[#94A3B8] focus:outline-none focus:ring-2 
                   focus:ring-[#2563EB] focus:border-[#2563EB]"
        />
        <button
          type="submit"
          className="w-full px-4 py-3 bg-[#2563EB] text-white rounded-lg flex items-center 
                   justify-center gap-2 hover:bg-[#1D4ED8] focus:outline-none focus:ring-2 
                   focus:ring-[#2563EB] focus:ring-offset-2 transition-colors"
        >
          <Plus className="w-5 h-5" />
          Add Task
        </button>
      </div>
    </form>
  );
};

export default AddTask; 