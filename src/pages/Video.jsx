import Navbar from "./../components/navbar/Navbar";
import Footer from "./../components/Footer";
import Player from "../components/video/Player";
import VideoDescription from "../components/video/VideoDescription";
import RelatedVideoList from "../components/video/RelatedVideoList";
const Video = () => {
  return (
    <>
      <Navbar />
      <section class="pt-6 pb-20">
        <div class="mx-auto max-w-7xl px-2 pb-20 min-h-[400px]">
          <div class="grid grid-cols-3 gap-2 lg:gap-8">
            <div class="w-full space-y-8 col-span-full lg:col-span-2">
              {/* ======== Video Player =========== */}
              <Player />
              {/* =========== Video Description =========== */}
              <VideoDescription />
            </div>
            {/* ============= Related Videos ================= */}
            <RelatedVideoList />
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Video;
