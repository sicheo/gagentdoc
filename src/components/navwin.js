// https://www.flaticon.com/
import { Link } from 'react-router-dom'

const Navwin = (props) => {
    return (
        <div className="classNavwin">
            <div className="classNavwinUpper">
                <Link to={props.link}>
                    <img src={props.image} alt={props.title} className="classNavwinImage" />
                </Link>
                <h3>
                    {props.title}
                </h3>
            </div>
            <p>
                {props.content}
            </p>
        </div>
    );
};

export default Navwin;