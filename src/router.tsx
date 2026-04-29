import { createBrowserRouter } from 'react-router-dom';
import { HomePage } from './pages/HomePage';
import { WritingPage } from './pages/WritingPage';

export const router = createBrowserRouter([
  { path: '/', element: <HomePage /> },
  { path: '/writing', element: <WritingPage /> }
]);
