import { Navigate } from 'react-router-dom';

const privateRoute = ( { element: Element}) => {
    const token = localStorage.getItem('token');
    return token ? Element : <Navigate to="/login" />;
}

export default privateRoute;