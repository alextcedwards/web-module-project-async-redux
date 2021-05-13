import { useEffect } from "react";
import { connect } from "react-redux";
import { fetchData } from "../store";

import Kanye from "../images/Kanye.jpg";

const Quote = (props) => {
  const { fetchData } = props;

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const handleClick = () => {
    fetchData();
  };

  return (
    <div className="main-container">
      <div className="imgcontainer">
        <img src={Kanye} alt="" />
      </div>
      <div className="textcontainer">
        <div className="text">{props.kanye}</div>
        <button
          onClick={(e) => {
            handleClick();
          }}
        >
          Get new quote
        </button>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    isLoading: state.isLoading,
    kanye: state.kanye,
    error: state.error,
  };
};

export default connect(mapStateToProps, { fetchData })(Quote);
