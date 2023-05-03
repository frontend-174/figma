import styled from "styled-components";
import { Carousel } from "antd";
import { ReactComponent as arrow } from "../../public/vercel.svg";

const Container = styled(Carousel)`
  padding: "25px";
`;

const Wrapper = styled.div`
  position: relative;
  height: fit-content;
  padding: 25px;
`;
const Icon = styled.div``;

Icon.Left = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 50%;
  left: 150px;
  transform: translate(100%, -50%) rotate(180deg);
  width: 45px;
  height: 45px;
  padding: 12px;
  background: white;
  opacity: 0.3;
  border-radius: 50%;
  z-index: 999;
  cursor: pointer;
  :hover {
    opacity: 0.5;
  }
  path {
    fill: #0d263b;
  }
  :hover {
  }
`;
Icon.Right = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 50%;
  right: 150px;
  transform: translate(-100%, -50%);
  width: 45px;
  height: 45px;
  padding: 12px;
  background: white;
  padding: 12px;
  opacity: 0.3;
  border-radius: 50%;
  z-index: 999;
  cursor: pointer;
  :hover {
    opacity: 0.5;
  }
  path {
    fill: #0d263b;
  }
`;

export { Container, Wrapper, Icon };
