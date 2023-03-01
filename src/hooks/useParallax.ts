import Translate from "../utils/Translate";

export default function useParallax(mainContainerRef: HTMLElement | null) {
  //Select all needed elements
  //Parallax
  const parallaxItems = mainContainerRef?.querySelectorAll(
    '[data-animation="translate"]'
  );

  //Video
  // const videoContainer = mainContainerRef?.querySelector(".video__container");
  // const videoMedia: HTMLDivElement | null | undefined =
  //   mainContainerRef?.querySelector(".video__media");

  //==============
  //   Resize
  //==============
  function onResize() {
    document.documentElement.style.setProperty(
      "--100vh",
      `${window.innerHeight}px`
    );

    const height = window.innerHeight;
    const width2 = window.innerWidth;

    // scrolling.onResize();

    // translates.forEach((translate) => {
    //   translate.onResize();
    // });

    // if (videoMedia) videoMedia.style.transform = "";

    //gets position of the video element
    // const videoContainerPos = videoContainer?.getBoundingClientRect();
  }

  //==============
  //    Update
  //==============
  function update() {
    const scrollPos =
      mainContainerRef?.parentElement?.parentElement?.getBoundingClientRect()
        .top;

    if (scrollPos == undefined) return;

    //Parallax animations
    //animate all data-animation elements – make an array of it to be able to map
    if (!parallaxItems) return;

    const translates = Array.from(parallaxItems).map((element) => {
      return new Translate({
        element,
      });
    });

    //add animation to parallax images
    translates.forEach((translate) => {
      translate.update(scrollPos);
    });

    window.requestAnimationFrame(update);
  }

  onResize();
  update();
}
