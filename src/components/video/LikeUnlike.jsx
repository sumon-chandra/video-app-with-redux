const LikeUnlike = () => {
  return (
    <div class="flex w-48 gap-10">
      <div class="flex gap-1">
        <div class="shrink-0">
          <img class="block w-5" src="./assets/like.svg" alt="Like" />
        </div>
        <div class="text-sm leading-[1.7142857] text-slate-600">100K</div>
      </div>
      <div class="flex gap-1">
        <div class="shrink-0">
          <img class="block w-5" src="./assets/unlike.svg" alt="Unlike" />
        </div>
        <div class="text-sm leading-[1.7142857] text-slate-600">100K</div>
      </div>
    </div>
  );
};

export default LikeUnlike;
