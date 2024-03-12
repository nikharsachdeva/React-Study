const HealthyComponent = () => {
  const names = [
    "Alice",
    "Bob",
    "Charlie",
    "David",
    "Eve",
    "Frank",
    "Grace",
    "Hannah",
    "Isaac",
    "Jane",
    "Kevin",
    "Linda",
    "Michael",
    "Nancy",
    "Olivia",
    "Peter",
    "Quinn",
    "Rachel",
    "Sam",
    "Tina",
    "Uma",
    "Victor",
    "Wendy",
    "Xander",
    "Yvonne",
    "Zack",
  ];

  return (
    <>
      <div className="card" style={{ width: "100%", margin: "20px" }}>
        <div className="card-header">Featured</div>
        <ul className="list-group list-group-flush">
          {names.map((name) => (
            <li key={name} className="list-group-item">
              {name}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default HealthyComponent;
