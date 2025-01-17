import Sidebar from "../../components/sidebar/Sidebar"
import Card from "../../components/card/card"
import { useState } from "react";



const Home = ({navbar}) => {

  const [category, setCategory] = useState(0)

  return (
    <div className="container">
      <Sidebar navbar={navbar} category={category} setCategory={setCategory} />
      <Card navbar={navbar} category={category} />
      
    </div>
  );
}

export default Home
