import PropTypes from "prop-types"

function Card(props){

    return(
        <div className="card-container">
            <div className="title-container">
                <h1>{props.titleText}</h1>
            </div>

            <div className="description-container">
                <p>{props.descriptionText}</p>
            </div>
        </div>
    )
}

// prop types indicate the type of data types that is required
Card.propTypes = {
    titleText: PropTypes.string.isRequired,
    descriptionText: PropTypes.string.isRequired
}

// default props will be passed in as your default values 
Card.defaultProps = {
    titleText : "Please enter your Title Text",
    descriptionText : "Please enter your description Text here."
}

export default Card