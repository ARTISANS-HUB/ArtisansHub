import { Link } from "react-router-dom";

const TopNavBar = () => {
  return (
    <nav>
      <div className="TopNavBar-platform">
        <div className="TopNavBar-platform-inner">
          <div>
            <div>
              <Link>DigiHave</Link>
            </div>
            <div>
              <input type="text" name="" id="" placeholder="Search" />
            </div>
            <div>
              <div>
                <h2>Contact Us</h2>
              </div>
              <div>
                <select name="" id="">
                  <option value=""></option>
                </select>
              </div>
              <div>
                <h1>Contact s</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default TopNavBar;
