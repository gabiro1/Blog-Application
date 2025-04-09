import { Link } from 'react-router-dom';

const LoggedOut = () => {
  return (
    <div className="text-center mt-5">
      <h2>You have been logged out</h2>
      <Link to="/login" className="text-white text-decoration-none btn btn-success mt-3">
        Login
      </Link>
    </div>
  );
};

export default LoggedOut;
