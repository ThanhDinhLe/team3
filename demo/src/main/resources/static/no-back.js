(function () {
  function lockBackNavigation() {
    history.pushState({ noBackExitsApp: true }, "", location.href);
  }

  lockBackNavigation();

  window.addEventListener("popstate", function () {
    lockBackNavigation();
  });

  window.addEventListener("pageshow", function (event) {
    if (event.persisted) {
      location.reload();
    }
  });
})();
