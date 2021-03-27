const Heading = ({ title, description }) => {
  return (
    <div>
      <div className='form-heading'>
        <h1 style={{ textAlign: "center" }}>Welcome to Our University</h1>
        <h2 style={{ textAlign: "center" }}>{title}</h2>
        <h6 style={{ textAlign: "center" }}>
          <em>{description}</em>
        </h6>
      </div>
    </div>
  );
};

export default Heading;
