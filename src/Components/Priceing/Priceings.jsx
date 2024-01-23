import Priceing from "./Priceing";
const Priceings = () => {
 const Priceingse = [
    {
      id: 1,
      membership_type: "Basic",
      price: 30.0,
      features: [
        "Access to cardio equipment",
        "Basic fitness classes",
        "Locker room access",
      ],
    },
    {
      id: 2,
      membership_type: "Standard",
      price: 50.0,
      features: [
        "Access to cardio and weightlifting equipment",
        "Full range of fitness classes",
        "Locker room access",
        "Personalized workout plans",
      ],
    },
    {
      id: 3,
      membership_type: "Premium",
      price: 80.0,
      features: [
        "Access to all gym facilities",
        "Unlimited fitness classes",
        "Locker room access with amenities",
        "Personalized workout plans",
        "One-on-one personal training session per month",
      ],
    },
    {
      id: 4,
      membership_type: "Student",
      price: 25.0,
      features: [
        "Access to cardio equipment",
        "Limited fitness classes",
        "Locker room access",
      ],
    },
    {
      id: 5,
      membership_type: "Family",
      price: 120.0,
      features: [
        "Access to all gym facilities",
        "Family fitness classes",
        "Locker room access with amenities",
        "Personalized workout plans",
      ],
    },
    {
      id: 6,
      membership_type: "Corporate",
      price: 150.0,
      features: [
        "Access to all gym facilities",
        "Unlimited fitness classes",
        "Locker room access with amenities",
        "Personalized workout plans",
        "Dedicated corporate fitness events",
        "Employee wellness programs",
      ],
    },
  ];

  return( 
  <div>
    <h1 className="text-black text-4xl font-bold text-center my-6">All Priceing Pakages</h1>
    <div className="grid md:grid-cols-2  mx-2 my-2 justify-center items-center">

    
    {
       Priceingse.map((prices)=><Priceing  key={prices.id} prices={prices} ></Priceing>) 
    }
</div>
  </div>
  )
};

Priceings.propTypes = {
  // price:PropTypes.object
};

export default Priceings;
