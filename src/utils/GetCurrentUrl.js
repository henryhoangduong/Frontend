import { useLocation } from "react-router-dom";

const GetCurrentUrl = () => {
  //get url current page
  console.log("GetCurrentUrl url: ");
  const location = useLocation();
  const currentUrl = location.pathname;
  console.log("GetCurrentUrl url: ", location.pathname);
  
  return currentUrl;
};

export default GetCurrentUrl;
