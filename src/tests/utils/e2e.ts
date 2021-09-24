if (typeof window !== "undefined") {
  const { rest } = require("msw");
  const { worker } = require("../tests/utils/browser");

  worker.start({
    waitUntilReady: true,
  });
  console.log("file: _app.tsx ~ line 23 ~ window", window);
  window.msw = { worker, rest };
}
