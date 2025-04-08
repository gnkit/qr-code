import { Link } from 'react-router';
import 'bootstrap/dist/css/bootstrap.min.css';

export const Navigation = () => {

    return (
        <>
            <nav>
                <Link
                    to="/"
                    className="me-2 link-offset-2 link-offset-3-hover link-underline link-underline-opacity-0 link-underline-opacity-75-hover"
                >
                    Home
                </Link>
                <Link
                    to="/generate"
                    className="me-2 link-offset-2 link-offset-3-hover link-underline link-underline-opacity-0 link-underline-opacity-75-hover"
                >
                    Generate
                </Link>
                <Link
                    to="/scan"
                    className="me-2 link-offset-2 link-offset-3-hover link-underline link-underline-opacity-0 link-underline-opacity-75-hover"
                >
                    Scan
                </Link>
                <Link
                    to="/generate-history"
                    className="me-2 link-offset-2 link-offset-3-hover link-underline link-underline-opacity-0 link-underline-opacity-75-hover"
                >
                    GenerateHistory
                </Link>
                <Link
                    to="/scan-history"
                    className="me-2 link-offset-2 link-offset-3-hover link-underline link-underline-opacity-0 link-underline-opacity-75-hover"
                >
                    ScanHistory
                </Link>
            </nav>
        </>
    )

};
