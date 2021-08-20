import styled from 'styled-components';

const SliderWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #242121;
  padding: 30px;
`;

const Frame = styled.div`
  border: 10px solid #eee;
  height: 100%;
`;

export const Slider = () => {
  return (
    <SliderWrapper>
      <Frame />
    </SliderWrapper>
  );
};
