import React from "react";
import logo from "../logo1.png";
import "../styles/styles1.css";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import AttachMoneyIcon from "@material-ui/icons/AttachMoney";
import ReactTooltip from "react-tooltip";

import {
  BagCheckFill,
  BagFill,
  BarChartFill,
  CartFill,
  Folder2,
  House,
} from "react-bootstrap-icons";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <div>
      <nav class="navbar navbar-default ">
        <div>
          <img src={logo} width="50" height="50" alt="" loading="lazy" />
          <label class="fonttext">GAYATRI COTTON INDUSTRIES</label>
        </div>

        <div class="form-inline">
          {/* <div className="header_middle"> */}

          <div className="header_option">
            <Link to="/">
              <House color="white" fontSize="30px" data-tip data-for="registerTip" />
              <ReactTooltip id="registerTip" place="top" effect="solid">
                HOME
              </ReactTooltip>
            </Link>
            <label className="texticon"></label>
          </div>
          <div className="header_option">
            <Link to="/purchaseCotton">
              <CartFill color="white" fontSize="30px" data-tip data-for="registerTip1" />
              <ReactTooltip id="registerTip1" place="top" effect="solid">
                PURCHASE
              </ReactTooltip>
            </Link>

            <label className="texticon"></label>
          </div>
          <div className="header_option">
            <Link to="/SellingCotton">
              <BagFill color="white" fontSize="30px" data-tip data-for="registerTip2"/>
              <ReactTooltip id="registerTip2" place="top" effect="solid">
                SELLING
              </ReactTooltip>
            </Link>

            <label className="texticon"></label>
          </div>
          <div className="header_option">
            <Link to="/showpurchasedata">
              <ShoppingCartIcon
                className="iconsheader"
                style={{ fontSize: 30 }}
                data-tip data-for="registerTip3"
              />
               <ReactTooltip id="registerTip3" place="top" effect="solid">
                SHOW PURCHASE DATA
              </ReactTooltip>
            </Link>
            <label className="texticon"></label>
          </div>
          <div className="header_option">
            <Link to="/showsellingdata">
              <AttachMoneyIcon
                className="iconsheader"
                style={{ fontSize: 30 }}
                data-tip data-for="registerTip4"
              />
              <ReactTooltip id="registerTip4" place="top" effect="solid">
                SHOW SELLING DATA
              </ReactTooltip>
            </Link>
            <label className="texticon"></label>
          </div>
          <div className="header_option">
            <Link to="/production">
              <BarChartFill color="white" fontSize="30px"
                              data-tip data-for="registerTip5"
                              />
              <ReactTooltip id="registerTip5" place="top" effect="solid">
                SHOW PRODUCTION DATA
              </ReactTooltip>
            </Link>

            <label className="texticon"></label>
          </div>
        </div>
        {/* </div> */}
      </nav>
    </div>
  );
};

export default Header;
