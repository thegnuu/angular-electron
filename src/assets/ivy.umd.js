(function (global, factory) {
  typeof exports === "object" && typeof module !== "undefined"
    ? factory(exports, require("@angular/core"))
    : typeof define === "function" && define.amd
    ? define("business-logic", ["exports", "@angular/core"], factory)
    : ((global = global || self),
      factory((global["business-logic"] = {}), global.ng.core));
})(this, function (exports, core) {
  "use strict";

  var BusinessLogicComponent = /** @class */ (function () {
    function BusinessLogicComponent() {}
    BusinessLogicComponent.ɵfac = function BusinessLogicComponent_Factory(t) {
      return new (t || BusinessLogicComponent)();
    };
    BusinessLogicComponent.ɵcmp = core.ɵɵdefineComponent({
      type: BusinessLogicComponent,
      selectors: [["lib-business-logic"]],
      decls: 2,
      vars: 0,
      template: function BusinessLogicComponent_Template(rf, ctx) {
        if (rf & 1) {
          core.ɵɵelementStart(0, "p");
          core.ɵɵtext(1, " This component is for testing only :) ");
          core.ɵɵelementEnd();
        }
      },
      encapsulation: 2,
      changeDetection: 0,
    });
    return BusinessLogicComponent;
  })();
  /*@__PURE__*/ (function () {
    core.ɵsetClassMetadata(
      BusinessLogicComponent,
      [
        {
          type: core.Component,
          args: [
            {
              selector: "lib-business-logic",
              template:
                "\n    <p>\n      This component is for testing only :)\n    </p>\n  ",
              styles: [],
              changeDetection: core.ChangeDetectionStrategy.OnPush,
            },
          ],
        },
      ],
      null,
      null
    );
  })();

  var BusinessLogicModule = /** @class */ (function () {
    function BusinessLogicModule() {}
    BusinessLogicModule.ɵmod = core.ɵɵdefineNgModule({
      type: BusinessLogicModule,
    });
    BusinessLogicModule.ɵinj = core.ɵɵdefineInjector({
      factory: function BusinessLogicModule_Factory(t) {
        return new (t || BusinessLogicModule)();
      },
      imports: [[]],
    });
    return BusinessLogicModule;
  })();
  (function () {
    (typeof ngJitMode === "undefined" || ngJitMode) &&
      core.ɵɵsetNgModuleScope(BusinessLogicModule, {
        declarations: [BusinessLogicComponent],
        exports: [BusinessLogicComponent],
      });
  })();
  /*@__PURE__*/ (function () {
    core.ɵsetClassMetadata(
      BusinessLogicModule,
      [
        {
          type: core.NgModule,
          args: [
            {
              declarations: [BusinessLogicComponent],
              imports: [],
              exports: [BusinessLogicComponent],
              entryComponents: [BusinessLogicComponent],
            },
          ],
        },
      ],
      null,
      null
    );
  })();

  exports.BusinessLogicComponent = BusinessLogicComponent;
  exports.BusinessLogicModule = BusinessLogicModule;

  Object.defineProperty(exports, "__esModule", { value: true });
});
//# sourceMappingURL=business-logic.umd.js.map
