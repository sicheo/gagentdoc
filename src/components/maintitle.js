const Maintitle = (props) => {
    return (
            <div className="classMaintitle">
            <h2>
                    {props.title}
            </h2>
                <h3>
                    {props.subtitle}
                </h3>
            </div>
    );
};

export default Maintitle;