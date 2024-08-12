let CurrentTime = () => {
  let Time = new Date();
  return (
    <p className="lead">
      This is the current time: {Time.toLocaleDateString()}-{""}
      {Time.toLocaleTimeString()}
    </p>
  );
};

export default CurrentTime;
