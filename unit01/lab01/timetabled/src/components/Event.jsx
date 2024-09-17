import PropTypes from 'prop-types';
import "./Event.css";

const Event = (props) => {
  return (
    <td className={"Event " + props.color}>
      <h5>{props.event}</h5>
    </td>
  );
};

Event.propTypes = {
    event: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
};

export default Event;
