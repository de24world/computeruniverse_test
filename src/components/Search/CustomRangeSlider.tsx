import React, { useState, useEffect } from "react";
import { connectRange } from "react-instantsearch-dom";

// Prerequisite: install rheostat@4
import "rheostat/initialize";
import Rheostat from "rheostat";
import "rheostat/css/rheostat.css";

interface RangeSliderProps {
  min: number;
  max: number;
  currentRefinement: currentRefinementProps;
  canRefine: boolean;
  refine: Function;
}

interface currentRefinementProps {
  values: number[];
  min: number;
  max: number;
}

const RangeSlider = ({
  min,
  max,
  currentRefinement,
  canRefine,
  refine,
}: RangeSliderProps) => {
  const [stateMin, setStateMin] = useState(min);
  const [stateMax, setStateMax] = useState(max);
  // console.log(refine, "refine in rangeslider");

  useEffect(() => {
    if (canRefine) {
      setStateMin(currentRefinement.min);
      setStateMax(currentRefinement.max);
    }
  }, [currentRefinement.min, currentRefinement.max]);

  if (min === max) {
    return null;
  }

  const onChange = ({ values: [min, max] }: currentRefinementProps) => {
    if (currentRefinement.min !== min || currentRefinement.max !== max) {
      refine({ min, max });
    }
  };

  const onValuesUpdated = ({ values: [min, max] }: currentRefinementProps) => {
    setStateMin(min);
    setStateMax(max);
  };

  return (
    <Rheostat
      min={min}
      max={max}
      values={[currentRefinement.min, currentRefinement.max]}
      onChange={onChange}
      onValuesUpdated={onValuesUpdated}
    >
      <div
        className="rheostat-marker rheostat-marker--large"
        style={{ left: 0 }}
      >
        <div className="rheostat-value">{stateMin}</div>
      </div>
      <div
        className="rheostat-marker rheostat-marker--large"
        style={{ right: 0 }}
      >
        <div className="rheostat-value">{stateMax}</div>
      </div>
    </Rheostat>
  );
};

export const CustomRangeSlider = connectRange(RangeSlider);
