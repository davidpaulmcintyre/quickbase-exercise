import { PropTypes } from "react";
import "../styles/appointment.css";
var imgDownload = require("../images/app_store.png");
import moment from "moment";

const App = props => {
  const query = props.location.query;
  const dateStart = moment();
  const strEnd = dateStart.clone().add(1, "hours").toISOString();
  const strStart = dateStart.toISOString();
  const _uri = `/download?first=${query.first}&last=${query.last}&email=${query.email}&start=${strStart}&end=${strEnd}&phone=${query.phone}`;
  return (
    <div>
      {props.children}
      <div className="lowerFooter">
        <span className="what_is">
          <a
            className="what_is_link"
            href="http://www.commutecall.co"
            target="_blank"
          >
            {"What is Commute Call?"}
          </a>
        </span>
        <a href={_uri} download={true}>{"Download appointment"}</a>
        <div><img className="download_link" src={imgDownload} /></div>
      </div>
    </div>
  );
};

App.propTypes = {
  children: PropTypes.element
};

export default App;
