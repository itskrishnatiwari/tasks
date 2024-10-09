import PropTypes from 'prop-types';

// A reusable component that accepts props like image, description, link, and button
const ImageCard = ({ imageSrc, description, linkText, linkUrl, buttonText, onButtonClick }) => {
    return (
        <div className="image-card">
            <img src={imageSrc} alt="Card" className="image-card-img" />
            <p>{description}</p>
            {linkUrl && (
                <a href={linkUrl} className="image-card-link">
                    {linkText}
                </a>
            )}
            {buttonText && (
                <button onClick={onButtonClick} className="image-card-button">
                    {buttonText}
                </button>
            )}
        </div>
    );
};

ImageCard.propTypes = {
    imageSrc: PropTypes.string.isRequired, // Ensure image source is a string
    description: PropTypes.string.isRequired, // Ensure description is a string
    linkText: PropTypes.string, // Link text is optional
    linkUrl: PropTypes.string, // Link URL is optional
    buttonText: PropTypes.string, // Button text is optional
    onButtonClick: PropTypes.func // Button click handler is optional
};

export default ImageCard;
