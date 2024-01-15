const Dashboard = () => {
  const fetchData = async () => {
    try {
      const response = await fetch("/api/students");
      const data = await response.json();
      console.log(JSON.stringify(data));
    } catch (error) {
      console.log("Error fetching data:", JSON.stringify(error));
    }
  };

  return (
    <div className="screen-container">
      <h1>Dashboard</h1>
      <button onClick={fetchData}>Hämta</button>
    </div>
  );
};

export default Dashboard;
