import React from "react";

// Next
import Image from "next/image";

// Libarary
import { Highlight, connectHits, RatingMenu } from "react-instantsearch-dom";

// Source
import { CustomRatingMenu } from "../CustomRatingMenu";

interface hitIData {
  hit: hitObjectData;
}

interface hitObjectData {
  objectID: number;
  image_url: string;
  ratings_average: number;
  ratings_sum: number;
  price: number;
}

function HitList({ hit }: hitIData): JSX.Element {
  //   console.log(hit, "this is hit");

  return (
    <div className="hitList">
      <Image
        className="hit-picture"
        src={`https://img.computerunivers.net${hit.image_url}`}
        alt="picture"
        width={150}
        height={200}
      />
      <div className="hit-name">
        <Highlight attribute="name" hit={hit} />
      </div>
      <div className="hit-ratings">
        {/* <RatingMenu attribute="hit.ratings_average" /> rating???  */}
        <CustomRatingMenu attribute="ratratings_averageg" />
        {hit.ratings_average}({hit.ratings_sum})
      </div>
      <div className="hit-price">
        <h6 color="primary">{hit.price} €</h6>
      </div>
    </div>
  );
}

export default HitList;
