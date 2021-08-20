import styled from 'styled-components';
import { useState, useCallback, useEffect } from 'react';
import PropTypes from 'prop-types';
import Image from 'next/image';

import { ArrowIcon } from './ArrowIcon';
import { media } from '../utils/media';
import { LoadingAnimation } from './LoadingAnimation';

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

const ArrowsHolder = styled.div`
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

export const Slider = ({ images }) => {
  const [pointer, setPointer] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  const resetCounters = () => {
    return images.map(() => {
      return 0;
    });
  };

  // for each image create a corresponding entry with `isLoaded` boolean flag and `counter` field.
  const [counters, setCounters] = useState(resetCounters());

  // if for any reason images prop was updated by the parent - re-initialize the metrics from scratch
  useEffect(() => {
    setCounters(resetCounters());
  }, [images]);

  const updateViewState = (idx) => {
    setPointer(idx);
    setIsLoading(true);

    const updatedCounters = [...counters];
    updatedCounters[idx] = updatedCounters[idx] + 1;
    setCounters[updatedCounters];
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
    <>
      <SliderWrapper>
        <Frame>
          <Image
            src={`/pictures/${images[pointer]}`}
            layout="fill"
            alt={`Slide #${pointer}`}
            objectFit="contain"
            onLoadingComplete={() => setIsLoading(false)}
          />
          <ArrowsHolder>
            <StyledArrow direction="left" onClick={decrementPointer} />
            {isLoading && <LoadingAnimation />}
            <StyledArrow direction="right" onClick={incrementPointer} />
          </ArrowsHolder>
        </Frame>
      </SliderWrapper>
    </>
  );
};

Slider.propTypes = {
  images: PropTypes.arrayOf(PropTypes.string)
};

Slider.defaultProps = {
  images: []
};
