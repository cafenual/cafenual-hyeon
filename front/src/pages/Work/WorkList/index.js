import Header from "layouts/Header";
import React, { useEffect, useState } from "react";
import { withRouter } from "react-router-dom";
import { WorkData } from "static/FakeDates";
import WorkMenu from "../WorkMenu";
import { WiMoonAltNew } from "react-icons/wi";
import "./styles.css";

const WorkList = ({ match }) => {
  const type = match.params.typeid;

  const [test, setTest] = useState(false);
  const [FakeWorkData, setFakeWorkData] = useState([]);

  useEffect(() => {
    if (!type) {
      setFakeWorkData(WorkData.filter((data) => data.type === "매일"));
    } else {
      setFakeWorkData(WorkData.filter((data) => data.type === "주간"));
    }
    console.log(type);
    setTest(false);
  }, [type]);

  useEffect(() => {});
  const onClick = (e) => {
    console.log(e);
  };
  return (
    <div id="WorkList" className="page-layout">
      <Header />
      <div className="all-block">
        <div className="top-block">
          <WorkMenu />
        </div>
        <div className="middle-block">
          <table className="big-table">
            <colgroup>
              <col className="left" />
              <col className="right" />
            </colgroup>
            <tbody>
              <br />
              {FakeWorkData.map((data, index) => (
                <tr key={index}>
                  <td className="check-block">
                    <input className="big-check" type="checkbox" />
                  </td>
                  <td>
                    <div className="inner-cont">
                      <span className="title-text">
                        <details open={test}>
                          <summary>
                            <WiMoonAltNew />
                            {data.title}
                          </summary>
                          <table className="small-table">
                            <colgroup>
                              <col className="left" />
                              <col className="right" />
                            </colgroup>
                            <tbody>
                              <td className="check-block"></td>
                              <td>
                                <div className="inner-cont">
                                  <span className="content-text">
                                    {data.content.map((c, i) => (
                                      <div>
                                        <input
                                          className="small-check"
                                          type="checkbox"
                                          onClick={onClick}
                                        />
                                        {c}
                                      </div>
                                    ))}
                                  </span>
                                </div>
                              </td>
                            </tbody>
                          </table>
                        </details>
                      </span>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="bottom-block">
          <button>체크</button>
        </div>
      </div>
    </div>
  );
};

export default withRouter(WorkList);
