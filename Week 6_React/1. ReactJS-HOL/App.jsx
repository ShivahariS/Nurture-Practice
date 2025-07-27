function App() {
  const containerStyle = {
    width: "100vw",              
    height: "100vh",             
    backgroundColor: "white",   
    display: "flex",
    justifyContent: "center",
    alignItems: "flex-start",
    paddingTop: "40px",          
    boxSizing: "border-box",    
    margin: 0
  };

  const headingStyle = {
    fontSize: "32px",
    fontWeight: "bold",
    fontFamily: "Arial, sans-serif",
    color: "black"
  };

  return (
    <div style={containerStyle}>
      <h1 style={headingStyle}>Welcome the first session of React</h1>
    </div>
  );
}

export default App;
