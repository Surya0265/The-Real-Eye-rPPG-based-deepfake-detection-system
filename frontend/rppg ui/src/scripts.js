function runAnimations() {
    runAnimations_127();
    runAnimations_130();
  }
  export default runAnimations;
  function runAnimations_127() {
    document
      .querySelector("#id-13")
      .addEventListener("mouseenter", func_hover_13_15);
  
    function func_hover_13_15(e) {
      e.stopPropagation();
      function func_13_15(e) {
        document
          .querySelector("#id-13-container")
          .classList.add("parent-animation-13");
        document.querySelector("#id-13").classList.add("animationClass-13");
        document
          .querySelector(".using-advanced--14-0")
          .classList.add("animationClass-14-14-0");
        document.querySelector("#id-14").classList.add("animationClass-14");
        document
          .querySelector("#id-13")
          .removeEventListener("mouseenter", func_hover_13_15);
  
        document
          .querySelector("#id-13")
          .addEventListener("mouseout", func_exit_13_15);
      }
  
      function func_exit_13_15(e) {
        e.stopPropagation();
        document
          .querySelector("#id-13-container")
          .classList.add("parent-animation-rev-15");
        document.querySelector("#id-13").classList.add("animationClassBack-15");
        document.querySelector("#id-14").classList.add("animationClassBack-16");
        document
          .querySelector("#id-13")
          .removeEventListener("mouseout", func_exit_13_15);
        setTimeout(() => {
          document
            .querySelector("#id-13-container")
            .classList.remove("parent-animation-13");
          document.querySelector("#id-13").classList.remove("animationClass-13");
          document
            .querySelector(".using-advanced--14-0")
            .classList.remove("animationClass-14-14-0");
          document.querySelector("#id-14").classList.remove("animationClass-14");
          document
            .querySelector("#id-13-container")
            .classList.remove("parent-animation-rev-15");
          document
            .querySelector("#id-13")
            .classList.remove("animationClassBack-15");
          document
            .querySelector("#id-14")
            .classList.remove("animationClassBack-16");
          document
            .querySelector("#id-13")
            .addEventListener("mouseenter", func_hover_13_15);
        }, 1);
      }
      func_13_15();
    }
  }
  function runAnimations_130() {
    document
      .querySelector("#id-18")
      .addEventListener("mouseenter", func_hover_18_110);
  
    function func_hover_18_110(e) {
      e.stopPropagation();
      function func_18_110(e) {
        document
          .querySelector("#id-18-container")
          .classList.add("parent-animation-18");
        document.querySelector("#id-18").classList.add("animationClass-18");
        document.querySelector("#id-111").classList.add("animationClass-null111");
        document.querySelector("#id-19").classList.add("animationClass-19");
        document
          .querySelector("#id-18")
          .removeEventListener("mouseenter", func_hover_18_110);
  
        document
          .querySelector("#id-18")
          .addEventListener("mouseout", func_exit_18_110);
      }
  
      function func_exit_18_110(e) {
        e.stopPropagation();
        document
          .querySelector("#id-18-container")
          .classList.add("parent-animation-rev-110");
        document.querySelector("#id-18").classList.add("animationClassBack-110");
        document.querySelector("#id-111").classList.add("animationClassBack-111");
        document
          .querySelector("#id-19")
          .classList.add("animationClassBack-null19");
        document
          .querySelector("#id-18")
          .removeEventListener("mouseout", func_exit_18_110);
        setTimeout(() => {
          document
            .querySelector("#id-18-container")
            .classList.remove("parent-animation-18");
          document.querySelector("#id-18").classList.remove("animationClass-18");
          document
            .querySelector("#id-111")
            .classList.remove("animationClass-null111");
          document.querySelector("#id-19").classList.remove("animationClass-19");
          document
            .querySelector("#id-18-container")
            .classList.remove("parent-animation-rev-110");
          document
            .querySelector("#id-18")
            .classList.remove("animationClassBack-110");
          document
            .querySelector("#id-111")
            .classList.remove("animationClassBack-111");
          document
            .querySelector("#id-19")
            .classList.remove("animationClassBack-null19");
          document
            .querySelector("#id-18")
            .addEventListener("mouseenter", func_hover_18_110);
        }, 1);
      }
      func_18_110();
    }
  }
  // links object
  export const allLinks = {};
  
  // function object
  export const allFunctions = {};
  