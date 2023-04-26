import React from "react";
import "../styles/nav.css";
// import {logo} from
// import { Link } from "react-router-dom";


const searchIcon = (
  <svg     xmlns="http://www.w3.org/2000/svg" height="24"  viewBox="0 96 960 960"   width="24"  >
    <path d="M793 962 539 708q-30 23-73.5 36.5T377 758q-119 0-201.5-82.5T93 474q0-119 82.5-201.5T377 190q119 0 201.5 82.5T661 474q0 45-12.5 86T612 633l255 255-74 74ZM377 652q75 0 126.5-51.5T555 474q0-75-51.5-126.5T377 296q-75 0-126.5 51.5T199 474q0 75 51.5 126.5T377 652Z" />
  </svg>
);


let logo =
  "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAdVBMVEX/ZwD/////bAz/agj/XAD/YwD/1cH/jVL/7OL/593/zrf/gj//YQD/nW7/qYX//Pr/cRT/VwD/xaz/kV7/ik7/vJ7/8+v/dyb/fDb/tZP/hUT/gDv/dCz/0r//28n/t5n/onf/w6n/5Nf/r4v/mWf/j1r/m2+ixXGlAAAC9ElEQVR4nO3dbW/aMBSGYZvaWRe8JiEU6Btt147//xMHQppEYhjpGtHn7L6lfgNyriYQFdWJ89uqWTtx1qrb2c7m3fandCFeep4RisEVe+Fdc+lZxio2tzthaRa4rSm8qyweoH+KV97NwqWnGLVQutb0PnRx4+ydJg5bXnqA0bO+BxFaCKF+CPVDqB9C/RDqh1A/hPoh1A+hfgj1Q6gfQv0Q6odQP4T6IdQPoX4I9UOoH0L9EOqHUD+E+iHUD6F+CPVDqB9C/RD2i5/Uh7c2tjDOv/178/uHRxdC+uu06b7/3DSuMDz5T6parJ+nzWlkes48sRy26HWw8PqzhHvmbX1q3lBknvNdSrht5o4fdjaE3r8cXS5vReiLY+9GM0K/qPNHqh2hr1ZZoiGh9485oilhVWfei6aE/jrziWpL6F/7kxsT+mnvOLUm/Nk7Tq0J/by7E80Ji+7s5oS+tzVzwpfOaf/LCKv5pD6rVftWVCeE3T9uv4ywbM7+diaF9LI4Kuye9b+OcNA2U5P7bmJf58NUVLh9kfaYcHVIlBW68H5EOLcidOE1L2zNCF3If6S+H54ulIXpLSv8YUfonHlhWFsX5g9TS8L4y7xwaV44URbGeNWv+32osjCucsN3fw3KwnSTG96bF1YIESJEiBAhQoQIESJEiBAhQoQIESJEiBAhQoQIESJEiBAhQoQIESJEiBAhQoQIBwhl/r+0zGzz5nCueJ8bft0ZLOWWIXbWrqW7zGNm4wpdeph26121Iy17j5n2F9u7/mN6V45Iq95jHka+TtR5V98679peH3ylgfNyvTb9EOqHUD+E+iHUD6F+CPVDqB9C/RDqh1A/hPoh1A+hfgj1Q6gfQv0Q6odQP4T6IdQPoX4I9UOoH0L9EOqHUD+E+iHUD6F+/4OwvvQII7d07dDlblqljRu4JFOt8OS8s7wTY+2dLzK3/DZTs94K/W1jdS/G5tXvhL64ChaNMUx2N+jb34ew3Cwzt9nSbrnZr6z/DRN2VEKK+cYQAAAAAElFTkSuQmCC";

const Navbar = () => {
  return (
    <>
      <div className="nav">
        <div className="logo">
          <a href="/">    <img id="logoImage" src={logo} alt="not" />   </a>
        </div>

        <a className="navlinks" href="/miphones"> Mi phones </a>
        <a className="navlinks" href="/redmiphones">  Redmi Phones   </a>
        <a className="navlinks" href="/tv">  TV </a>
        <a className="navlinks" href="/laptops">  Laptops  </a>

        <a className="navlinks" href="/lifestyle">    Fitness & Lifestyle   </a>
        <a className="navlinks" href="/home">     Home    </a>
        <a className="navlinks" href="/audio">      Radio  </a>
        <a className="navlinks" href="/accessories">  Accessories  </a>

        <div className="searchbox">
          <input type="text" name="search" placeholder="search Products" />
          {searchIcon}
        </div>
      </div>


    </>
  );
};

export default Navbar;
