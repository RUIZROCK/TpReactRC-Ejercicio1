const Saludo = (props) => {
    return (
        <div>
            <h1 className="display-3">Hello {props.data}!</h1>
        </div>
    );
};

export default Saludo;