import PropTypes from 'prop-types';

export function Notification({ message }) {
    return (
        <>
            {message}
        </>
    );
};

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};