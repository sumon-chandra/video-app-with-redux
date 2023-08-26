import RelatedVideoListitem from "./RelatedVideoListitem";

const RelatedVideoList = () => {
  return (
    <div class="col-span-full lg:col-auto max-h-[570px] overflow-y-auto">
      {/* <!-- single related video --> */}
      <RelatedVideoListitem />
    </div>
  );
};

export default RelatedVideoList;
