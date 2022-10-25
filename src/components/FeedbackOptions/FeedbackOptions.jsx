
import PropTypes from 'prop-types';
import css from './Feedback.module.css'

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <ul className={css.feedback__controls}>
      {options.map((option, index) => (
        <li key={index}>
          <button name={option} type="button" onClick={onLeaveFeedback}>
            {option}
          </button>
        </li>
      ))}
    </ul>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.array.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};

// class Feedback extends React.Component{
//     render() {
//         return (
//     <><h2>Please leave Feedback</h2><ul>
//                 <li><button type="button" onClick={() => { console.log('Click in Good'); } }>Good</button></li>
//                 <li><button type="button" onClick={() => { console.log('Click in Neutral'); } }>Neutral</button></li>
//                 <li><button type="button" onClick={() => { console.log('Click in Bad'); } }>Bad</button></li>
//             </ul></>
//     /* <h2>Statistics</h2>
//     <ul>
//             <li><p>Good: </p></li>
//             <li><p>Neutral: </p></li>
//             <li><p>Bad: </p></li>
//                 </ul> */
// )
//     }
// }  

// export default Feedback;