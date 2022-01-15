import React from "react";
import PropTypes from "prop-types";

const Counter = (props) => {
	return (
		<div className="row  justify-content-center counter">
			<div className="far fa-clock col-1 bg-dark"></div>
			<div className=" col-1 bg-dark">{props.num6 % 10}</div>
			<div className=" col-1 bg-dark">{props.num5 % 10}</div>
			<div className=" col-1 bg-dark">{props.num4 % 10}</div>
			<div className=" col-1 bg-dark">{props.num3 % 10}</div>
			<div className=" col-1 bg-dark">{props.num2 % 10}</div>
			<div className=" col-1 bg-dark">{props.num1 % 10}</div>
		</div>
	);
};

Counter.propTypes = {
	num1: PropTypes.number,
	num2: PropTypes.number,
	num3: PropTypes.number,
	num4: PropTypes.number,
	num5: PropTypes.number,
	num6: PropTypes.number,
};

export default Counter;
