import PropTypes from 'prop-types';
import css from './Statistics.module.css'

export const Statistics = ({ good, neutral, bad, total, positivePercentage }) =>
(
    <ul className={css.statistics__list}>
        <li className={css.statistics__item}>
            <span>Good: {good}</span>
        </li>
        <li className={css.statistics__item}>
            <span>Neutral: {neutral}</span>
        </li>
        <li className={css.statistics__item}>
            <span>Bad: {bad}</span>
        </li>
        <li className={css.statistics__item}>
            <span>Total: {total}</span>
        </li>
        <li className={css.statistics__item}>
            <span>Positive feedback: {positivePercentage}%</span>
        </li>
    </ul>
)

Statistics.propTypes = {
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
    positivePercentage: PropTypes.number.isRequired,
}