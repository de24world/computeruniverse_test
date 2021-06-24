import React from "react";

// Next
import Image from "next/image";

// material UI
import { makeStyles, Grid, Typography } from "@material-ui/core";
import Rating from "@material-ui/lab/Rating";

// Libarary
import { Highlight, connectHits, RatingMenu } from "react-instantsearch-dom";

const useStyles = makeStyles((theme) => ({
  root: {},
}));

interface hitsIData {
  hit: hitObjectData;
}

interface hitObjectData {
  objectID: number;
  image_url: string;
  ratings_average: number;
  ratings_sum: number;
  price: number;
}

function HitList({ hit }: hitsIData): JSX.Element {
  const classes = useStyles();
  console.log(hit, "this is hit");

  return (
    <div className="hit">
      <div>
        <div className="hit-picture">
          <Image
            src={`https://img.computerunivers.net${hit.image_url}`}
            alt="picture"
            width={150}
            height={200}
          />
        </div>
      </div>
      <div className="hit-content">
        <div>
          <Highlight attribute="name" hit={hit} />
          <span> - ${hit.price}</span>
          <span> - {hit.ratings_average} stars</span>
        </div>
        {/* <div className="hit-type">
        <Highlight attribute="type" hit={hit} />
      </div>
      <div className="hit-description">
        <Highlight attribute="description" hit={hit} />
      </div> */}
      </div>
    </div>
  );
}

export default HitList;
