import { Link } from "react-router-dom"

const Dashboard = () => {
  return (
    <div className="h-full flex justify-center mt-52">
      <Link className={"text-7xl border-2 border-black px-8 py-6 hover:bg-black hover:text-white transition"} to={"/recommendation"}>Get a Cocktail Recommendation</Link>
    </div>
  );
}

export default Dashboard;