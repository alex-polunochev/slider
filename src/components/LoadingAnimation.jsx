import PropTypes from 'prop-types';
import styled from 'styled-components';

// As seen on https://github.com/tobiasahlin/SpinKit

const Wrapper = styled.div`
  .sk-flow {
    margin: auto;
    width: 60px;
    height: 60px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .sk-flow-dot {
    width: 25%;
    height: 25%;
    background-color: #fff;
    border-radius: 50%;
    animation: sk-flow 1.4s cubic-bezier(0.455, 0.03, 0.515, 0.955) 0s infinite both;
  }

  .sk-flow-dot:nth-child(1) {
    animation-delay: -0.3s;
  }
  .sk-flow-dot:nth-child(2) {
    animation-delay: -0.15s;
  }

  @keyframes sk-flow {
    0%,
    80%,
    100% {
      transform: scale(0);
    }
    40% {
      transform: scale(1);
    }
  }
  ${(props) =>
    props.centered &&
    `
  width: 100%;
  display: flex;
  margin-top: 100px;
  `}
`;

export const LoadingAnimation = (props) => {
  const { className, testId } = props;

  return (
    <Wrapper className={className} data-testid={testId}>
      <div className="sk-flow">
        <div className="sk-flow-dot" />
        <div className="sk-flow-dot" />
        <div className="sk-flow-dot" />
      </div>
    </Wrapper>
  );
};

LoadingAnimation.propTypes = {
  className: PropTypes.string,
  testId: PropTypes.string
};

LoadingAnimation.defaultProps = {
  className: '',
  testId: ''
};
