import Searchbar from "../Searchbar/Searchbar";
import Sidebar from "../Sidebar/Sidebar";
import catagories from "../../categories.json";
import "./MainPage.css";
import axios from "axios";
import ItemsRooms from "../ItemsRooms/ItemsRooms";
import { useCookies } from "react-cookie";
function MainPage() {
  // this function sends a req to the server to authenticate the user
  // every req from now on there should be a header x-access-token with the localStorage token item
  // nad in the backend u should add middleware called verifyJWT just like in UserAPI isAuth route

  const [cookies, setCookie] = useCookies([]);
  const userAuthenticated = () => {
    axios
      .get("http://localhost:3001/isAuth", {
        headers: {
          "x-access-token": localStorage.getItem("token"),
        },
      })
      .then((response) => {});
  };

  return (
    <div className="container-main-page">
      <Searchbar />
      <div className="main-page">
        <div className="side-bar-container">
          <Sidebar catagories={catagories} />
        </div>
        <div className="inner-grid">
         <ItemsRooms/>
        </div>
      </div>
    </div>
  );
}

export default MainPage;
