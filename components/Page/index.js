import { useEffect } from "react";

const Page = ({ children, currentUser }) => {
  useEffect(() => {
    // if (localStorage.getItem("user")) {
    //   setUser(JSON.parse(localStorage.getItem("user")));
    // } else {
    //   setUser(currentUser);
    // }
  }, []);

  return <React.Fragment>{children}</React.Fragment>;
};

export default Page;
