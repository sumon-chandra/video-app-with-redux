const RelatedVideoListitem = () => {
  return (
    <div class="flex flex-row w-full gap-2 mb-4">
      <div class="relative w-[168px] h-[94px] flex-none duration-300 hover:scale-[1.03]">
        <a href="video.html">
          <img
            src="https://i3.ytimg.com/vi/6O4s7v28nlw/maxresdefault.jpg"
            class="object-cover"
            alt="Some video title"
          />
        </a>
        <p class="absolute px-1 text-xs text-gray-100 bg-gray-900 right-2 bottom-2 py">
          12:10
        </p>
      </div>

      <div class="flex flex-col w-full">
        <a href="#">
          <p class="text-sm font-semibold text-slate-900">Some video title</p>
        </a>
        <a class="mt-2 text-xs text-gray-400 hover:text-gray-600" href="#">
          Learn with Sumit
        </a>
        <p class="mt-1 text-xs text-gray-400">100K views . 23 Oct 2022</p>
      </div>
    </div>
  );
};

export default RelatedVideoListitem;
