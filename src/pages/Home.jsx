import {Link} from "react-router-dom"; 

export const Home = () => {
    return (
        <div>
            <Link to="/categories">got to the categories page</Link>
            <ul>
                <li>
                    <b>file name</b> Home.jsx
                </li>
                <li>
                    <b>component name</b> Home
                </li>
            </ul>
        </div>
    )
}

