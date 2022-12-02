
import {createRoot} from 'react-dom'
import App from '@/components/App.js'
import  './styles/index.css'
import Botocion from '@/components/material/materialButton.js'
const container = document.getElementById('root')
const root =createRoot(container)

root.render(<Botocion/>)
