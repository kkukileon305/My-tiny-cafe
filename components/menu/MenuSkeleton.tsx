import styled from 'styled-components';

const StyledSkeleton = styled.div`
  & > div {
    width: 100px;
    height: 30px;
    background-color: lightgray;
    margin: 20px 30px;
  }

  & > ul {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    row-gap: 60px;
    padding-bottom: 30px;

    li {
      width: 200px;
      display: flex;
      flex-direction: column;
      align-items: center;
      text-align: center;
      word-break: keep-all;
      gap: 10px;

      span {
        border-radius: 75px;
        background-color: lightgray;
        height: 140px;
        width: 140px;
      }

      div.title {
        margin-top: 10px;
        background-color: lightgray;
        height: 18px;
        width: 120px;
      }

      div.des {
        line-height: 1.3;
        background-color: lightgray;
        height: 16px;
        width: 100px;
      }
    }
  }
`;

const MenuSkeleton = () => {
  return (
    <StyledSkeleton>
      <div></div>

      <ul>
        <li>
          <span></span>
          <div className='title'></div>
          <div className='des'></div>
        </li>
        <li>
          <span></span>
          <div className='title'></div>
          <div className='des'></div>
        </li>
        <li>
          <span></span>
          <div className='title'></div>
          <div className='des'></div>
        </li>
        <li>
          <span></span>
          <div className='title'></div>
          <div className='des'></div>
        </li>
      </ul>
    </StyledSkeleton>
  );
};

export default MenuSkeleton;
