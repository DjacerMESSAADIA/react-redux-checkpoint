# Task Master

A modern, minimalist todo application built with React and Redux Toolkit. Features a clean, intuitive interface with real-time task management and progress tracking.

## Features

- ✨ Create and edit tasks
- ✅ Mark tasks as complete/incomplete
- 🔍 Filter tasks by status (All, Active, Completed)
- 📊 Real-time statistics dashboard
- 💫 Smooth animations and transitions
- 📱 Fully responsive design

## Freamworks and tool and packages used

- React 18
- Redux Toolkit for state management
- TailwindCSS for styling
- Lucide React for icons
- Vite for build tooling

## Getting Started

### Installation

1. Clone the repository:

```bash
git clone [repository-url]
cd task-master
```

2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm run dev
```

4. Open your browser and visit `http://localhost:5173`

## Usage

- **Adding Tasks**: Type your task and click "Add Task" or press Enter
- **Completing Tasks**: Click the checkbox next to any task
- **Editing Tasks**: Click the pencil icon, make changes, and click save
- **Filtering Tasks**: Use the filter buttons (All, Active, Completed)
- **Progress Tracking**: View completion statistics in the sidebar

## Project Structure

```
src/
├── components/         # React components
│   ├── AddTask.jsx    # Task creation
│   ├── ListTask.jsx   # Task list with filters
│   └── Task.jsx       # Individual task
├── store/             # Redux store
│   ├── store.js       # Store setup
│   └── todoSlice.js   # Todo reducer
├── App.jsx            # Main component
├── main.jsx          # Entry point
└── index.css         # Global styles
```

## Key Features Explained

### Task Management

- Create tasks with descriptions
- Mark tasks as complete/incomplete
- Edit existing tasks
- Delete tasks when needed

### Filtering System

- View all tasks
- Filter to see only active tasks
- Filter to see only completed tasks

### Statistics Dashboard

- Total tasks counter
- Completed vs pending tasks
- Visual progress bar
- Completion percentage

### User Interface

- Clean, modern design
- Responsive layout
- Intuitive controls
- Real-time updates
