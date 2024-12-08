import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { toggleTask, editTask } from '../store/todoSlice';
import { Pencil, Check, X } from 'lucide-react';
import PropTypes from 'prop-types';

const Task = ({ id, description, isDone }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedDescription, setEditedDescription] = useState(description);
  const dispatch = useDispatch();

  const handleEdit = () => {
    if (isEditing && editedDescription.trim() !== description) {
      dispatch(editTask({ id, description: editedDescription.trim() }));
    }
    setIsEditing(!isEditing);
  };

  const handleCancel = () => {
    setEditedDescription(description);
    setIsEditing(false);
  };

  return (
    <div className={`group flex items-center gap-3 p-4 rounded-lg border transition-all
      ${isDone 
        ? 'bg-[#F8FAFC] border-[#E2E8F0]' 
        : 'bg-white border-[#E2E8F0]'
      }`}>
      <input
        type="checkbox"
        checked={isDone}
        onChange={() => dispatch(toggleTask(id))}
        className="w-5 h-5 rounded border-[#CBD5E1] bg-white checked:bg-[#2563EB] 
                 checked:border-[#2563EB] focus:ring-[#2563EB] focus:ring-offset-0
                 cursor-pointer transition-colors"
      />
      {isEditing ? (
        <input
          type="text"
          value={editedDescription}
          onChange={(e) => setEditedDescription(e.target.value)}
          className="flex-1 px-3 py-1.5 bg-white border border-[#E2E8F0] rounded-lg
                   text-[#1E293B] focus:outline-none focus:ring-2 focus:ring-[#2563EB]
                   focus:border-[#2563EB]"
          autoFocus
        />
      ) : (
        <span className={`flex-1 text-[#1E293B] ${isDone ? 'line-through text-[#94A3B8]' : ''}`}>
          {description}
        </span>
      )}
      <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
        {isEditing ? (
          <>
            <button
              onClick={handleEdit}
              className="p-1.5 text-[#059669] hover:bg-[#F1F5F9] rounded-lg transition-colors"
            >
              <Check className="w-4 h-4" />
            </button>
            <button
              onClick={handleCancel}
              className="p-1.5 text-[#DC2626] hover:bg-[#F1F5F9] rounded-lg transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          </>
        ) : (
          <button
            onClick={handleEdit}
            className="p-1.5 text-[#64748B] hover:text-[#1E293B] hover:bg-[#F1F5F9] 
                     rounded-lg transition-colors"
          >
            <Pencil className="w-4 h-4" />
          </button>
        )}
      </div>
    </div>
  );
};

Task.propTypes = {
  id: PropTypes.number.isRequired,
  description: PropTypes.string.isRequired,
  isDone: PropTypes.bool.isRequired
};

export default Task; 