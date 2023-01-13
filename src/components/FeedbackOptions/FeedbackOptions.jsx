import PropTypes from 'prop-types';
import css from "components/App.module.css";

export function FeedbackOptions({ options, onLeaveFeedback }) {
    
  return (
    <div className={css.buttonWrap}>
      {options.map(option => (
        <button className={css.button} type="button" onClick={() => onLeaveFeedback(option)} key={option}>
          {option}
          </button>
          
      ))}
    </div>
  );
};

FeedbackOptions.propTypes = {
    options: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
    onLeaveFeedback: PropTypes.func.isRequired,
}