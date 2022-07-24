import styled from 'styled-components';

const StyledSk = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 20px;
  gap: 30px;

  @media screen and (max-width: 570px) {
    flex-direction: column;
  }

  div.sLeft {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    div.circle {
      background-color: lightgray;
      width: 150px;
      height: 150px;
      border-radius: 75px;
    }
  }

  div.sRight {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 20px;

    div {
      background-color: lightgray;

      &.krName {
        width: 100px;
        height: 20px;
      }
      &.enName {
        width: 180px;
        height: 16px;
      }
      &.des {
        width: 200px;
        height: 16px;
      }
      &.price {
        width: 80px;
        height: 20px;
      }
    }

    @media screen and (max-width: 570px) {
      align-items: center;
    }
  }
`;

const DetailSkeleton = () => {
  return (
    <StyledSk>
      <div className='sLeft'>
        <div className='circle'></div>
      </div>
      <div className='sRight'>
        <div className='krName'></div>
        <div className='enName'></div>
        <div className='des'></div>
        <div className='des'></div>
        <div className='price'></div>
      </div>
    </StyledSk>
  );
};

export default DetailSkeleton;
