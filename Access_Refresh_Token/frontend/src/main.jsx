import { createRoot } from 'react-dom/client'
import './index.css'
import AppRoutes from './routes/appRoutes.jsx'

createRoot(document.getElementById('root')).render(
    <AppRoutes />
)
