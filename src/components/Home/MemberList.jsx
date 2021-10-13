import React, { useState, useEffect } from "react";
import { DataLeader } from "../../fetchs";
import { Loading, Pagination } from "../Molecules";
import CardMember from "./CardMember";

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
        <div className="row justify-content-center">
          <Loading anim="https://upload.wikimedia.org/wikipedia/commons/5/58/Astronaut_-_Idil_Keysan_-_Wikimedia_Giphy_stickers_2019.gif" />
        </div>
      ) : (
        <>
          <CardMember members={members} title={props.title} />

          <Pagination
            members={members}
            currPage={currPage}
            setPage={setPage}
            lastPage={lastPage}
          />
        </>
      )}
    </>
  );
};

export default MemberList;
