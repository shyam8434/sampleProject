import React from "react";
import { useSelector } from "react-redux";
import CustomTable from "../Shared/CustomTable";
import "./home.style.css";

/**
 * Used to show the basic Home of the app.
 @returns {*}
 @param {{
 }} props
*/

const Home = () => {
  const data = useSelector(state => state.appCommon.data)
  const userData = JSON.parse(localStorage.user_details)

  return (
      <div className="homeMainContainer">
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
          <CustomTable
            data={data}
            columns={[
              { label: 'Name', dataField: 'name'},
              { label: 'Age', dataField: 'age'},
              { label: 'Gender', dataField: 'gender'},
              { label: 'Email', dataField: 'email'},
              { label: 'Phone Number', dataField: 'phoneNo'},
            ]}
          />
        </div>
      </div>
  );
};

export default Home;
