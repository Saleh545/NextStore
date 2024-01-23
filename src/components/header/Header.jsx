import "./header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faBars,faSearch,faHeart,faShoppingBasket,} from "@fortawesome/free-solid-svg-icons";

const Header = ({toggle}) => {

  return (
    <header className="header">
      <div className="container">
        <div className="items">
          <div className="logo">
            <img src="/images/Logo-header.svg" alt="Logo" />
          </div>

          <button className="bars" onClick={()=>toggle()}>
            <FontAwesomeIcon icon={faBars} />
               Kataloq
                </button>

          <div className="input-btn">
            <input
              id=""
              className=""
              type="text"
              placeholder="Məhsulları axtarın..."
            />

            <div className="search">
              <FontAwesomeIcon icon={faSearch} />{" "}
            </div>
          </div>

          <div className="sweet-buttons">
            <button className="fav">
              <FontAwesomeIcon icon={faHeart} />
            </button>
            <button className="basket">
              <FontAwesomeIcon icon={faShoppingBasket} />
            </button>
            <button className="login">Giriş</button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
