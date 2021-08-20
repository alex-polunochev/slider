import styled from 'styled-components';
import PropTypes from 'prop-types';

const Arrow = styled.div`
  border: solid #aaa;
  border-width: 0 10px 10px 0;
  padding: 10px;
  transition: all 200ms ease-in-out;
  ${(props) => props.direction === 'left' && `transform: rotate(135deg); margin-left: 7px;`}
  ${(props) => props.direction === 'right' && `transform: rotate(-45deg); margin-right: 7px;`}
`;

const Wrapper = styled.div`
  cursor: pointer;
  transition: all 200ms ease-in-out;
  width: 60px;
  height: 60px;
  margin: 10px;
  padding: 10px;
  border-radius: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(66, 66, 66, 0.54);
  :hover {
    ${Arrow} {
      border-color: #fff;
    }
  }
`;

export const ArrowIcon = (props) => {
  const { direction, className, onClick, testId } = props;
  return (
    <Wrapper className={className} onClick={onClick} data-testid={testId}>
      <Arrow direction={direction} />
    </Wrapper>
  );
};

ArrowIcon.propTypes = {
  direction: PropTypes.oneOf(['left', 'right']),
  className: PropTypes.string,
  onClick: PropTypes.func.isRequired,
  testId: PropTypes.string
};

ArrowIcon.defaultProps = {
  direction: 'left',
  className: '',
  testId: ''
};
