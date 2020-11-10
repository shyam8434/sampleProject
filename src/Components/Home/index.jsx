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

  return (
      <div className="homeMainContainer">
        <div className="homeContainer1">
          <br />
          <section>
            <span>{`Hi `}</span>
            <span>
              <b>Shyam</b>
            </span>
          </section>
        </div>
        <div className="tableContainer"> 
          <CustomTable
            data={data}
            columns={[
              { label: 'Name', dataField: 'name'},
              { label: 'Age', dataField: 'age'},
              { label: 'Class', dataField: 'class'},
              { label: 'School', dataField: 'school'},
            ]}
          />
        </div>
      </div>
  );
};

export default Home;
