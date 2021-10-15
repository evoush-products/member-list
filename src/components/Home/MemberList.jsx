import React, { useState, useEffect } from "react";
import { DataLeader } from "../../fetchs";
import { Loading, Pagination } from "../Molecules";
import CardMember from "./CardMember";

const MemberList = (props) => {
  const [page, setPage] = useState(1);
  const [members, setMembers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currPage, setcurrPage] = useState(0);
  const [lastPage, setlastPage] = useState(0);

  useEffect(() => {
    DataLeader(page).then((member) => {
      setTimeout(() => {
        setLoading(false);
      }, 1500);
      setMembers(member);
      setcurrPage(members.current_page);
      setlastPage(members.last_page);
    });
  }, [members]);

  return (
    <>
      {loading ? (
        <div className="row justify-content-center">
          {/* <Loading anim="https://upload.wikimedia.org/wikipedia/commons/5/58/Astronaut_-_Idil_Keysan_-_Wikimedia_Giphy_stickers_2019.gif" /> */}
          <Loading anim="https://thumbs.gfycat.com/AdoredRawHaddock-size_restricted.gif" />
        </div>
      ) : (
        <>
          <CardMember members={members} title={props.title} />

          <Pagination
            members={members}
            currPage={currPage}
            setPage={setPage}
            lastPage={lastPage}
            setLoading={setLoading}
          />
        </>
      )}
    </>
  );
};

export default MemberList;
