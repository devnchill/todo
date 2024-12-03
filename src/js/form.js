const inputHandling = (function () {
  const FORM = document.querySelector("#__project_form");
  const projectDialog = document.querySelector("#__project_dialog");

  function openProjectDialog() {
    projectDialog.showModal();
  }

  function closeProjectDialog() {
    FORM.reset();
    projectDialog.close();
  }

  function extractProjectInput() {
    const title = document.querySelector("#__project_title_form").value;
    if (title) {
      return title;
    } else {
      return "alphabetagamatheta";
    }
  }

  return { openProjectDialog, closeProjectDialog, extractProjectInput };
})();

export { inputHandling };
