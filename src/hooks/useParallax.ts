import Translate from "../utils/Translate";

export default function useParallax(parallaxContainer: HTMLElement | null) {
  //Select all needed elements
  //Parallax
  const parallaxItems = parallaxContainer?.querySelectorAll(
    '[data-animation="translate"]'
  );

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
  }

  //==============
  //    Update
  //==============
  function update() {
    const scrollPos = parallaxContainer?.getBoundingClientRect().top;

    console.log(scrollPos);

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
