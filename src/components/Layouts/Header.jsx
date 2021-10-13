import { Link } from "react-router-dom";
import Styled from "styled-components";

const HeaderStyle = Styled.div`
    color: tomato;
    ul li {
        list-style: none;
    }
    li{
        font-size: 23px;
        color: tomato;
    }
`;
const Header = () => {
  return (
    <>
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item active">
            <Link to="/">Home</Link>
          </li>
          <li className="breadcrumb-item ml-3">
            <Link to="/about">About</Link>
          </li>
        </ol>
      </nav>
    </>
  );
};

export default Header;
