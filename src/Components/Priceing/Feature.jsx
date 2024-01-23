import { AiFillSafetyCertificate } from "react-icons/ai";
import PropTypes from 'prop-types';

const Feature = ({feature}) => {
    return (
        <div>
            <h1 className="flex justify-start items-start gap-2"><AiFillSafetyCertificate className="my-2"/>{feature}</h1>
        </div>
    );
};

Feature.prototype ={
    feature: PropTypes.string
}

export default (Feature);