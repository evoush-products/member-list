const CardMember = (props) => {
  const members = props.members;
  return (
    <div>
      <div className="row justify-content-center">
        <div className="col-lg-8 col-xs-8 col-sm-12 mb-5">
          <h1 className="text-center">{props.title}</h1>
          <p>
            Kami PT. Pineleng Indah Cemerlang dengan bangga mempersembahkan merk
            dagang kami yang sangat visioner di tahun ini, semangat kami dalam
            membangun mitra bisnis yang handal karena bagi kami sebuah team
            adalah keluarga yang mengedepankan solid bersama menuju sukses.{" "}
            <br />
          </p>
        </div>
      </div>
      <div className="row justify-content-center">
        {members.data.map((member) => (
          <div
            key={member.id}
            className="col-md-4 col-xs-12 col-sm-12 mb-3 ml-3"
          >
            <div className="card card-evoush">
              <img
                src={`https://raw.githubusercontent.com/evoush-products/bahan_evoush/master/migration_db/${member.avatar}`}
                className="card-img-top"
                alt={member.name}
                style={{
                  width: "120px",
                  alignItems: "center",
                  marginTop: "2rem",
                }}
              />
              <div className="card-body">
                <h5 className="card-title">{member.name}</h5>

                <ul className="badges">
                  <li>
                    {member.achievements.includes("STAR SAPHIRE") ? (
                      <span className="badge bg-primary">STAR SAPHIRE</span>
                    ) : (
                      <span className="badge bg-success">SAPHIRE</span>
                    )}
                  </li>
                </ul>

                <p className="card-text text-truncate">
                  {member.quotes ? (
                    <span
                      dangerouslySetInnerHTML={{
                        __html: `${member.quotes}`,
                      }}
                    ></span>
                  ) : (
                    `${member.username} belum menambahkan quotes`
                  )}
                </p>
                <a
                  href={`https://evoush.com/member/${member.username}`}
                  className="btn btn-primary btn-profile"
                >
                  Lihat Profile
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardMember;
