var moduleName = (function() {

  function init() {
    console.log("Hello World!");
  }
  
  return {
    init: init
  }
})();

moduleName.init();