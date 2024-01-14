import {
  flowRendererV2,
  flowStyles
} from "./chunk-CZQISTAB.js";
import "./chunk-5Y3N47RN.js";
import {
  flowDb,
  parser$1
} from "./chunk-7RKBKKU4.js";
import "./chunk-2CTMAB4M.js";
import "./chunk-VIHQSYNR.js";
import "./chunk-6XTSHSIE.js";
import {
  require_dayjs_min,
  require_dist,
  setConfig
} from "./chunk-V3RKMIRU.js";
import {
  __toESM
} from "./chunk-3EJPJMEH.js";

// node_modules/mermaid/dist/flowDiagram-v2-2f8f667a.js
var import_dayjs = __toESM(require_dayjs_min(), 1);
var import_sanitize_url = __toESM(require_dist(), 1);
var diagram = {
  parser: parser$1,
  db: flowDb,
  renderer: flowRendererV2,
  styles: flowStyles,
  init: (cnf) => {
    if (!cnf.flowchart) {
      cnf.flowchart = {};
    }
    cnf.flowchart.arrowMarkerAbsolute = cnf.arrowMarkerAbsolute;
    setConfig({ flowchart: { arrowMarkerAbsolute: cnf.arrowMarkerAbsolute } });
    flowRendererV2.setConf(cnf.flowchart);
    flowDb.clear();
    flowDb.setGen("gen-2");
  }
};
export {
  diagram
};
//# sourceMappingURL=flowDiagram-v2-2f8f667a-25UC2FAF.js.map
