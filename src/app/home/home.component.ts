import { Component, OnInit, Compiler, Injector, ViewChild, ViewContainerRef } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"],
})
export class HomeComponent implements OnInit {
  @ViewChild("container", { read: ViewContainerRef })
  container: ViewContainerRef;

  constructor(
    private router: Router,
    private _compiler: Compiler,
    private _injector: Injector
  ) {}

  ngOnInit(): void {}

  async import(): Promise<void> {
    const response = await fetch("/assets/ivy.umd.js");
    // const response = await fetch("/assets/non-ivy.umd.js");
    const umd = await response.text();

    // replace require to use electron require (window.require)
    const umdToLoad = umd.replace(/ require\(/gm, " window.require(");

    // save filte temporary
    const fs = window.require("fs");
    const path = window.require("path");
    const app = window.require("electron").remote.app;
    const savePath = app.getPath("appData");
    const umdPath = path.resolve(savePath, "toLoad.js");
    fs.writeFileSync(umdPath, umdToLoad);

    // require umd module
    const pkg = window.require(umdPath);

    // compile module on runtime
    return this._compiler
      .compileModuleAndAllComponentsAsync(pkg.BusinessLogicModule)
      .then((moduleFactory) => {
        try {
          const moduleRef: any = moduleFactory.ngModuleFactory.create(
            this._injector
          );
          // load first registered componentFactory for testing
          const componentFactory = moduleFactory.componentFactories[0];
          const { instance } = this.container.createComponent(
            componentFactory,
            null,
            moduleRef.injector
          );
        } catch (err) {
          console.error("error while loading component", err);
        }
      });

  }
}
