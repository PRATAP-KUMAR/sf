import { Link } from "react-router-dom";

const Home = () => (
  <div className="items-center justify-center p-2 flex flex-col h-screen">
    <h1 className="text-4xl text-center">
      Welcome to Scalar Field.
    </h1>
    <p className="text-2xl">This is a test assignment for Internship at Scalar Field for PRATAP PANABAKA</p>
    <p className="text-2xl text-blue-500">
      <Link to={"/discover"}>go to Discover Page</Link>
    </p>
  </div>
)

export default Home;