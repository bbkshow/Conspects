import React, { Fragment } from "react";
import PropTypes from "prop-types";

export default function Notification({ message }) {
  return (
    <Fragment>
      <p>{message}</p>
    </Fragment>
  );
}
Notification.propTypes = {
  message: PropTypes.string.isRequired,
};
