import React from "react";
import PropTypes from "prop-types";

export default function Statistic({
  onGood,
  onNeutral,
  onBad,
  onTotal,
  onCountPositiveFeedback,
}) {
  return (
    <ul>
      <li>Good: {onGood}</li>
      <li>Neutral: {onNeutral}</li>
      <li>Bad: {onBad}</li>
      <li>Total: {onTotal}</li>
      <li>Positive feedback: {onCountPositiveFeedback} %</li>
    </ul>
  );
}
Statistic.propTypes = {
  onGood: PropTypes.number.isRequired,
  onNeutral: PropTypes.number.isRequired,
  onBad: PropTypes.number.isRequired,
  onTotal: PropTypes.number.isRequired,
  onCountPositiveFeedback: PropTypes.number.isRequired,
};
