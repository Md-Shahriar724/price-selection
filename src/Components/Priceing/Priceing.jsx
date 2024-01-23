import PropTypes from "prop-types";
import { FiDollarSign } from "react-icons/fi";
import Feature from "./Feature";


const Priceing = ({ prices }) => {
    const {membership_type, price, features } = prices
  return (
    <div>
      <div className="card w-96 bg-neutral text-neutral-content mx-2 my-4">
        <div className="card-body items-center text-center">
          <h2 className="card-title">{membership_type}</h2>
            <h1 className="text-4xl flex justify-center items-center"><FiDollarSign/><span>{price}/<span className="text-lg font-bold">mon</span></span></h1>
          <p className="text-start my-4">
          {
            features.map((feature, idx)=><Feature key={idx} feature={feature}></Feature>)
          }
            </p>
          <button className="text-center bg-green-200 hover:bg-green-400  hover:text-white text-black py-4 px-20 rounded-lg">Subscribe Now</button>
        </div>
      </div>
    </div>
  );
};

Priceing.propTypes = {
  prices: PropTypes.object,
  feature: PropTypes.object
};

export default Priceing;
