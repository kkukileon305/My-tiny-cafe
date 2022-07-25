import styled from 'styled-components';

const StyledSkeleton = styled.div`
  & > div {
    width: 100px;
    height: 30px;
    background-color: lightgray;
    margin: 30px 30px;

    @media screen and (max-width: 350px) {
      margin: 30px 15px;
    }
  }

  & > ul {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
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
        display: block;
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

type MenuSkeletonProps = {
  isSearch: boolean;
};

const MenuSkeleton = ({ isSearch }: MenuSkeletonProps) => {
  return (
    <StyledSkeleton>
      {isSearch ? <h2>SEARCH</h2> : <div></div>}

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
