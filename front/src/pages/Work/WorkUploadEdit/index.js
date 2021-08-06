import React, { useEffect, useState } from "react";
import "./styles.css";
import {
  ManagementMenuData,
  ManagementRoleData,
  WorkData,
  WorkMenuData,
} from "static/FakeDates";
import Header from "layouts/Header";
import WorkEditForm from "modules/WorkEditForm";

const WorkUploadEdit = () => {
  const [IsModal, setIsModal] = useState(false);
  const onToggle = () => {
    setIsModal(!IsModal);
  };

  const [FakeTimeData, setFakeTimeData] = useState([]);
  const [Test, setTest] = useState("");

  useEffect(() => {
    setFakeTimeData(ManagementMenuData.filter((data) => data.text !== "퇴사"));
  }, []);

  const onClick = (d) => {
    console.log(d);
    setTest(d);
  };

  return (
    <>
      <div id="WorkUploadEditMenu" className="page-layout">
        <Header />
        <div className="all-block">
          <div className="middle-block">
            <table className="first-table">
              <tr>
                <td>
                  {ManagementRoleData.map((r, i) => (
                    <details>
                      <summary>
                        {r.icon}
                        <> </>
                        {r.text}
                      </summary>
                      <table className="second-table">
                        <td>
                          <div className="Indentation"></div>
                        </td>
                        <td>
                          {FakeTimeData.map((t, j) => (
                            <details>
                              <summary>
                                {t.icon}
                                <> </>
                                {t.text}
                              </summary>
                              <table className="third-table">
                                <td>
                                  <div className="Indentation"></div>
                                </td>
                                <td>
                                  {WorkMenuData.map((d, k) => (
                                    <details>
                                      <summary
                                        value={d.text}
                                        onClick={() => onClick(d.text)}
                                      >
                                        {d.text}
                                      </summary>
                                      <table className="fourth-table">
                                        <td>
                                          <div className="Indentation"></div>
                                        </td>
                                        <td>
                                          <div className="big-update">
                                            <input
                                              type="text"
                                              placeholder="등록할 일 입력"
                                            />
                                            <button>등록</button>
                                          </div>
                                          {WorkData.map((w, l) => (
                                            <details>
                                              <summary>
                                                {w.type === Test && (
                                                  <div>
                                                    <button className="delete-btn">
                                                      x
                                                    </button>
                                                    {w.title}
                                                    <button
                                                      onClick={onToggle}
                                                      className="edit-btn"
                                                    >
                                                      수정
                                                    </button>
                                                  </div>
                                                )}
                                              </summary>
                                              {/* && 왼쪽이 참이면 오른쪽이 리턴문*/}
                                              <table className="fourth-table">
                                                <td>
                                                  <div className="Indentation"></div>
                                                </td>
                                                <td>
                                                  <div className="big-update">
                                                    <input
                                                      type="text"
                                                      placeholder="등록할 세부사항 입력"
                                                    />
                                                    <button>등록</button>
                                                  </div>
                                                  {w.content.map((c, m) => (
                                                    <div className="detail-cont">
                                                      <button className="delete-btn">
                                                        x
                                                      </button>
                                                      {c}
                                                      <button
                                                        onClick={onToggle}
                                                        className="edit-btn"
                                                      >
                                                        수정
                                                      </button>
                                                    </div>
                                                  ))}
                                                </td>
                                              </table>
                                            </details>
                                          ))}
                                        </td>
                                      </table>
                                    </details>
                                  ))}
                                </td>
                              </table>
                            </details>
                          ))}
                        </td>
                      </table>
                    </details>
                  ))}
                </td>
              </tr>
            </table>
          </div>
        </div>
      </div>
      {IsModal && <WorkEditForm onToggle={onToggle} />}
    </>
  );
};

export default WorkUploadEdit;
