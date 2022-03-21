import styled from 'styled-components';
import { useState } from 'react';
import PropTypes from 'prop-types';
import Image from 'next/image';

import { ArrowIcon } from './ArrowIcon';
import { media } from '../utils/media';
import { LoadingAnimation } from './LoadingAnimation';

import { Thing } from './Thing';

const SliderWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #242121;
  padding: 60px;
  ${media.PHONE`padding: 0;`}
`;

const StyledArrow = styled(ArrowIcon)`
  opacity: 0;
`;

const ArtifactsHolder = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Frame = styled.div`
  border: 10px solid #eee;
  height: 100%;
  position: relative;
  :hover {
    ${StyledArrow} {
      opacity: 1;
    }
  }
`;

const ViewsCount = styled.div`
  text-align: center;
  color: #fff;
  margin-top: 5px;
  ${media.PHONE`position: relative; bottom: 50px; background-color: #000000aa; padding: 3px 10px; width: fit-content; margin: auto;`}
`;

export const Slider = ({ images }) => {
  const [pointer, setPointer] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  const resetCounters = () => {
    return images.map((img, idx) => {
      // set views for very first image to 1, as it is loaded on screen on Slider mount
      return idx === 0 ? 1 : 0;
    });
  };

  // for each image create a counter
  const [counters, setCounters] = useState(resetCounters());

  const updateViewState = (idx) => {
    setPointer(idx);
    setIsLoading(true);

    const updatedCounters = [...counters];
    updatedCounters[idx] += 1;
    setCounters(updatedCounters);
  };

  const incrementPointer = () => {
    // check if pointer points to the last array item and reset to 0 if positive, otherwise increment
    const newPointer = pointer === images.length - 1 ? 0 : pointer + 1;
    updateViewState(newPointer);
  };

  const decrementPointer = () => {
    // check if pointer points to the first array item and reset to last index if positive, otherwise decrement
    const newPointer = pointer === 0 ? images.length - 1 : pointer - 1;
    updateViewState(newPointer);
  };

  return (
    <SliderWrapper>
      <Frame>
        <Image
          data-testid="slider-image"
          src={`/pictures/${images[pointer]}`}
          layout="fill"
          alt={`Slide #${pointer}`}
          objectFit="contain"
          onLoadingComplete={() => setIsLoading(false)}
        />
        <ArtifactsHolder>
          <StyledArrow direction="left" onClick={decrementPointer} testId="leftArrow" />
          {isLoading && <LoadingAnimation testId="loading" />}
          <StyledArrow direction="right" onClick={incrementPointer} testId="rightArrow" />
        </ArtifactsHolder>
      </Frame>
      <ViewsCount>Views: {counters[pointer]}</ViewsCount>
      <Thing />
    </SliderWrapper>
  );
};

Slider.propTypes = {
  images: PropTypes.arrayOf(PropTypes.string)
};

Slider.defaultProps = {
  images: []
};
