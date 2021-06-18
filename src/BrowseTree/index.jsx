import React, { useState } from "react";
import covidimage from "../covid19-1600x900.jpg";
import Card from "../Cards";
import { BrowseTreeText as Text } from "../constants";

const BrowseTree = () => {
  const initialState = {
    phase: 0,
    info: {},
  };

  const [state, setState] = useState(initialState);

  let returnExpression;

  if (state.phase === 0) {
    returnExpression = (
      <div className="browse-tree-container">
        <div className="browse-tree">
          <Card
            image={covidimage}
            heading={Text.LeftCard.Heading}
            text={Text.LeftCard.Text}
            onClick={() => setState({ phase: 1, info: "covid_symptoms" })}
            width={35}
          />
          <Card
            image={covidimage}
            heading={Text.RightCard.Heading}
            text={Text.RightCard.Text}
            onClick={() => setState({ phase: 1, info: "exposure_site" })}
            width={35}
          />
        </div>
      </div>
    );
  }
  else if (state.phase === 1) {
    returnExpression = <Card
    image={covidimage}
    heading="Message for Slide 2"
    text="Please visit the exposure site in link"
    width={72} />

  }
  else returnExpression = <div />;

  return (
    <div className="browse-tree-container">
      <div className="browse-tree">{returnExpression}</div>
    </div>
  );
};

export default BrowseTree;
