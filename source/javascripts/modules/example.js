var moduleName = (function() {

  function init() {
    alert("Hello World!");
  }
  
  return {
    init: init
  }
})();

moduleName.init();