import Home from '../../Components/Home'
import Login from '../../Components/Login'
import ErrorPage from '../../Components/ErrorPage'

const ROUTES = [
    { name: 'login', url: '/login', private: false, component: Login, exact: true },
    { name: 'home', url: '/', private: true, component: Home, exact: true },
    { name: 'error', url: '', private: false, component: ErrorPage, exact: false },
]

export default ROUTES