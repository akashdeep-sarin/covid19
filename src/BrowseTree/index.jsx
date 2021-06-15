import React from "react";
import { Card, CardColumns } from "react-bootstrap";
import covidimage from "../covid19-1600x900.jpg";

const BrowseTree = () => {
  // const initialState = {
  //   phase: 0,
  //   info: {},
  // };

  // const [state, setState] = useState(initialState);
  return (
    <div className="browse-tree-container">
      <div className="browse-tree">
        <div className="card">
          <div className="card-image" style={{ backgroundSize:'contain', backgroundPosition: 'center', backgroundImage: "url(" + covidimage + ")", height:'40%' }}></div>
        </div>
        <div className="card">
          <div className="card-image" style={{ backgroundImage: {covidimage}, height:'40%' }}></div>
        </div>
      </div>
    </div>
  );
};

export default BrowseTree;
