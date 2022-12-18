import PropTypes, { shape } from "prop-types";
function MyComp({ children }) {
  return <div>{children}</div>;
}
const imageType = shape({
  url: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
});
MyComp.propTypes = {
  children: PropTypes.node,
  image: imageType.isRequired,
};

export default MyComp;
