const ClockComponent = () => {
  let currentTime = new Date().toLocaleTimeString();
  return (
    <div>
      <h2 className="text-formatting">The current time is : {currentTime}</h2>
    </div>
  );
};

export default ClockComponent;
