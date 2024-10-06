import { Link } from "react-router-dom";

const Tab1 = () => (
  <div className="center-div p-2 flex flex-col">
    <h1 className="text-4xl text-center">
      Welcome to Scalar Field.
    </h1>
    <h2 className="text-3xl text-blue-500">
      <Link to={"/discover"}>go to Discover Page</Link>
    </h2>
  </div>
)

export default Tab1;