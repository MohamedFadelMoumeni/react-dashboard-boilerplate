const Card = ({ children }) => {
  return (
    <div className="shadow-md w-full px-5 py-8 bg-white rounded-lg mt-6">
      {children}
    </div>
  );
};

export default Card;
