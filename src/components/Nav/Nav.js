import React from "react";
import { useDispatch } from "react-redux";
import { filterByNav } from "../../store/actions/exporterActions";
import { useState } from "react";
import styled from "styled-components";

const Nav = () => {
  const [isOfficial, setIsOfficial] = useState(0);
  const dispatch = useDispatch();

  const callDispatch = (e) => {
    if (e.target.innerText === "All") {
      const payload = "";
      dispatch(filterByNav(payload));
    } else {
      const payload = e.target.innerText;
      dispatch(filterByNav(payload));
    }
  };

  return (
    <Navigation>
      <Container>
        <Div>
          <Type
            onClick={(e) => {
              setIsOfficial(0);
              callDispatch(e);
            }}
            isOfficial={isOfficial === 0}
          >
            All
          </Type>
          <Type
            onClick={(e) => {
              setIsOfficial(1);
              callDispatch(e);
            }}
            isOfficial={isOfficial === 1}
          >
            Official
          </Type>
          <Type
            onClick={(e) => {
              setIsOfficial(2);
              callDispatch(e);
            }}
            isOfficial={isOfficial === 2}
          >
            Unofficial
          </Type>
        </Div>
      </Container>
    </Navigation>
  );
};

const Navigation = styled.nav`
  border-bottom: 1px solid gray;
  margin-bottom: 20px;
  @media ${({ theme }) => theme.media.mobile} {
    width: 100%;
  }
`;
const Container = styled.section`
  ${({ theme }) => theme.container};
  display: flex;
  justify-content: flex-end;
  height: 50px;
  @media ${({ theme }) => theme.media.mobile} {
    width: 100%;
  }
`;
const Div = styled.div`
  width: ${({ theme }) => theme.width.content}px;
  display: flex;
`;
const Type = styled.button`
  width: 50%;
  height: 100%;
  ${({ theme }) => theme.flexCenter};
  color: ${(props) => (props.isOfficial ? "#32b489" : "black")};
  border-bottom: ${(props) =>
    props.isOfficial ? `2px solid #32b489` : "none"};
  cursor: pointer;
  // @media ${({ theme }) => theme.media.mobile} {
  //   display: none;
  // }
`;
export default Nav;
