import PropTypes from "prop-types";
function MyComp({ name, num }) {
  return <div>My Comp</div>;
}
MyComp.propTypes = {
  name: PropTypes.string,
  num: PropTypes.number.isRequired,
};

export default MyComp;
