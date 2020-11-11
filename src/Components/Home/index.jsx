import { Button } from "@material-ui/core";
import React from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import CustomTable from "../Shared/CustomTable";
import "./home.style.css";

/**
 * Used to show the basic Home of the app.
 @returns {*}
 @param {{
 }} props
*/

const Home = () => {
  const history = useHistory();
  const data = useSelector((state) => state.appCommon.data);
  const userData = JSON.parse(localStorage.user_details);

  const handleOnLogout = () => {
    history.push('/login');
    localStorage.clear();
  }

  return (
    <div className="homeMainContainer">
      <Button
        variant="contained"
        color="secondary"
        onClick={handleOnLogout}
      >
        Log Out
      </Button>
      <div className="homeContainer1">
        <br />
        <section>
          <span>{`Hi `}</span>
          <span>
            <b>{userData.name}</b>
          </span>
        </section>
      </div>
      <div className="tableContainer">
        <div className="tableHeader">Employee List</div>
        <CustomTable
          data={data}
          columns={[
            { label: "Name", dataField: "name" },
            { label: "Age", dataField: "age" },
            { label: "Gender", dataField: "gender" },
            { label: "Email", dataField: "email" },
            { label: "Phone Number", dataField: "phoneNo" },
          ]}
        />
      </div>
    </div>
  );
};

export default Home;
