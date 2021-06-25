import React, { ReactElement } from "react";

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
  hits: hitObjectData[];
}

interface hitObjectData {
  objectID: number;
  image_url: string;
  ratings_average: number;
  ratings_sum: number;
  price: number;
}

function Hits({ hits }: hitsIData): ReactElement {
  const classes = useStyles();
  // console.log(hits, "this is hit");

  return (
    <div className="hit-component">
      <Grid container spacing={3}>
        {hits.map((hit) => (
          <Grid key={hit.objectID} sm={12} md={4} lg={3} item>
            <Image
              src={`https://img.computerunivers.net${hit.image_url}`}
              alt="picture"
              width={150}
              height={200}
            />
            <div className="hit-content">
              <div className="hit-name">
                <Highlight attribute="name" hit={hit} />
              </div>
              <div className="hit-ratings">
                {/* <Rating
                  name="ratings_average"
                  value={hit.ratings_average}
                  readOnly
                /> */}
                {hit.ratings_average}({hit.ratings_sum})
                <RatingMenu
                  attribute="ratings_average"
                  // defaultRefinement={{ min: 2 }}
                  // min={0}
                  max={5.0}
                  translations={{
                    ratingLabel: "",
                  }}
                />
              </div>
              <div className="hit-price">
                <Typography variant="h6" color="primary">
                  {hit.price} €
                </Typography>
              </div>
            </div>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}

export const CustomHits = connectHits(Hits);
