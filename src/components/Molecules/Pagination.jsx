const Pagination = (props) => {
  const members = props.members;
  const currPage = props.currPage;
  const lastPage = props.lastPage;
  let setLoading = props.setLoading;
  return (
    <div>
      <div className="text-xs-center">
        <nav aria-label="Page navigation example">
          <ul className="pagination justify-content-center">
            <li
              className="page-item"
              onClick={() => {
                setLoading(true);
                props.setPage(lastPage - lastPage + 1);
              }}
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
                      onClick={() => {
                        setLoading(true);
                        props.setPage(link.label);
                      }}
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
            <li
              className="page-item"
              onClick={() => {
                setLoading(true);
                props.setPage(lastPage);
              }}
            >
              <a className="page-link" href="#" aria-label="Next">
                <span aria-hidden="true">&raquo;</span>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Pagination;
