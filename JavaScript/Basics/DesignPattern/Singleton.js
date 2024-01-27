//Limit the instances of object limited to one
function Process(state) {
  this.state = state;
}
const singleton = (function () {
  function ProcessManager() {
    this.numProcess = 0;
  }
  let pManager;

  function createProcessManager(params) {
    pManager = new ProcessManager();
    return pManager;
  }

  return {
    getProcessManager: () => {
      if (!pManager) pManager = createProcessManager();
      return pManager;
    },
  };
})();

const ProcessManager1 = singleton.getProcessManager();
const ProcessManager2 = singleton.getProcessManager();
