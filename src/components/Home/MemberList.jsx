import React, { useState, useEffect } from "react";
import { AllProduct, DataLeader } from "../../fetchs";

const MemberList = (props) => {
  const [page, setPage] = useState(1);
  const [members, setMembers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [firstPage, setFirst] = useState(0);
  const [currPage, setcurrPage] = useState(0);
  const [lastPage, setlastPage] = useState(0);

  console.log(members);
  useEffect(() => {
    DataLeader(page).then((member) => {
      setTimeout(() => {
        setLoading(false);
      }, 1500);
      setMembers(member);
      setFirst(members.from);
      setcurrPage(members.current_page);
      setlastPage(members.last_page);
    });
  }, [members]);
  return (
    <>
      {loading ? (
        <span classNameName="badge bg-danger">Loading...</span>
      ) : (
        <>
          <h1>{props.title}</h1>
          {members.data.map((member) => (
            <div key={member.id} className="col-md-4 col-xs-6 col-sm-6 mb-5">
              <div
                className="card"
                style={{
                  width: "18rem",
                  background: "#000",
                }}
              >
                <img
                  src={`https://raw.githubusercontent.com/evoush-products/bahan_evoush/master/migration_db/${member.avatar}`}
                  className="card-img-top"
                  alt={member.name}
                  style={{ width: "120px", alignItems: "center" }}
                />
                <div className="card-body">
                  <h5 className="card-title">{member.name}</h5>
                  <p className="card-text text-truncate">
                    {member.quotes ? (
                      <span
                        dangerouslySetInnerHTML={{ __html: `${member.quotes}` }}
                      ></span>
                    ) : (
                      `${member.username} belum menambahkan quotes`
                    )}
                  </p>
                  <a href="#" className="btn btn-primary">
                    Lihat Profile
                  </a>
                </div>
              </div>
            </div>
          ))}

          <nav aria-label="Page navigation example">
            <ul className="pagination">
              <li
                className="page-item"
                onClick={() => setPage(lastPage - lastPage + 1)}
              >
                <a className="page-link" href="#" aria-label="Previous">
                  <span aria-hidden="true">&laquo;</span>
                </a>
              </li>
              {members.links.map((link) => (
                <div>
                  {link.label !== "Next &raquo;" &&
                  link.label !== "&laquo; Previous" ? (
                    <>
                      <li
                        className={
                          link.label == currPage
                            ? "page-item active"
                            : "page-item"
                        }
                        onClick={() => setPage(link.label)}
                      >
                        <a className="page-link" href="#">
                          {link.label}
                        </a>
                      </li>
                    </>
                  ) : (
                    ""
                  )}
                </div>
              ))}
              <li className="page-item" onClick={() => setPage(lastPage)}>
                <a className="page-link" href="#" aria-label="Next">
                  <span aria-hidden="true">&raquo;</span>
                </a>
              </li>
            </ul>
          </nav>
        </>
      )}
    </>
  );
};

export default MemberList;
