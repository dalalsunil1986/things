import React, { Component } from "react";
import { Route } from "react-router-dom";
import asyncComponent from "../../helpers/AsyncFunc";

const routes = [
  {
    path: "",
    component: asyncComponent(() => import("../dashboard"))
  },
  {
    path: "blankPage",
    component: asyncComponent(() => import("../blankPage"))
  },
  {
    path: "notes",
    component: asyncComponent(() => import("../Notes"))
  },
  {
    path: "testable",
    component: asyncComponent(() => import("../Testable"))
  },
  {
    path: "googlemap",
    component: asyncComponent(() => import("../Map/googleMap"))
  },
  {
    path: "Mabel",
    component: asyncComponent(() => import("../Mabel"))
  },
  {
    path: "chat",
    component: asyncComponent(() => import("../Chat"))
  },
  {
    path: "people",
    component: asyncComponent(() => import("../People"))
  },
  {
    path: "people/add",
    component: asyncComponent(() => import("../People/Person"))
  },
  {
    path: "forms/form1",
    component: asyncComponent(() => import("../Forms/Form1"))
  },
  {
    path: "forms/form2",
    component: asyncComponent(() => import("../Forms/Form2"))
  },
  {
    path: "forms/form3",
    component: asyncComponent(() => import("../Forms/Form3"))
  },
  {
    path: "forms/form4",
    component: asyncComponent(() => import("../Forms/Form4"))
  },
];

class AppRouter extends Component {
  render() {
    const { url, style } = this.props;
    return (
      <div style={style}>
        {routes.map(singleRoute => {
          const { path, exact, ...otherProps } = singleRoute;
          return (
            <Route
              exact={exact === false ? false : true}
              key={singleRoute.path}
              path={`${url}/${singleRoute.path}`}
              {...otherProps}
            />
          );
        })}
      </div>
    );
  }
}

export default AppRouter;
