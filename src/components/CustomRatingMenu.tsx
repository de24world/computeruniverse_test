import { connectRange } from "react-instantsearch-dom";

interface RatingMenuProps {
  currentRefinement: any;
  refine: any;
}

const RatingMenu = ({
  currentRefinement,
  refine,
}: RatingMenuProps): JSX.Element => {
  //   console.log(currentRefinement, "currentRefinement???");
  //   console.log(refine, "refine???");

  return (
    <ul>
      {new Array(6).fill(null).map((_, index) => (
        <li key={index}>
          <a
            href="#"
            style={{ color: currentRefinement.min === 5 - index ? "gold" : "" }}
            onClick={(event) => {
              event.preventDefault();
              refine({ min: 3 - index });
            }}
          >
            {new Array(5)
              .fill(null)
              .map((__, innerIndex) => (innerIndex < 5 - index ? "★" : "☆"))}
          </a>
        </li>
      ))}
    </ul>
  );
};

export const CustomRatingMenu = connectRange(RatingMenu);
