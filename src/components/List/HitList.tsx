import React from "react";

// Next
import Image from "next/image";

// Libarary
import { Highlight, connectHits, RatingMenu } from "react-instantsearch-dom";
import ReactStars from "react-rating-stars-component";

// Source
import { CustomRatingMenu } from "../CustomRatingMenu";

interface hitIData {
  hit: hitObjectData;
}

interface hitObjectData {
  objectID: number;
  image_url: string;
  ratings_average: string;
  ratings_sum: string;
  ratingAverage: number;
  ratingsSum: number;
  price: number;
}

function HitList({ hit }: hitIData): JSX.Element {
  // change Type to Number
  const ratingAverage = parseInt(hit.ratings_average);

  // delete decimal like x.xxx
  const ratingsSum = Number(hit.ratings_sum).toFixed(0);

  // console.log(hit, "this is hit");
  // console.log(typeof ratingAverage, "ratingAverageToNumber Type?");

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
        {/* <RatingMenu attribute="hit.ratings_average" hit={hit} /> rating??? */}
        {/* <CustomRatingMenu attribute="ratings_average" hit={hit} /> */}
        <ReactStars count={5} value={ratingAverage} edit={false} />
        <span>({ratingsSum})</span>
      </div>
      <div className="hit-price">
        <h1>{hit.price} €</h1>
      </div>
    </div>
  );
}

export default HitList;
