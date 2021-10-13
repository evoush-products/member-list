export const AllProduct = async (url) => {
  try {
    const res = await fetch(url);
    return res.json();
  } catch (e) {
    console.error(e);
  }
};

export const DataLeader = async (page) => {
  try {
    const res = await fetch(
      `https://app.evoush.com/api/evoush/member-list?page=${page}`
    );
    // console.log(res);
    return res.json();
  } catch (e) {
    console.error(e);
  }
};
