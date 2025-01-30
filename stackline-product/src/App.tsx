import NavBar from "./components/NavBar";
import ProductDetails from "./components/ProductDetails";

function App() {

  return (
<div>
      <NavBar />
       <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      
      <ProductDetails/>
    </div>
</div>
   
  );
}

export default App;
