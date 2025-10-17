import RootLayout from "../../layout/RootLayout";
import Home from "../../page/Home";
import MemoCreate from "../../page/MemoPages/CreateMemo";
import MemoList from "../../page/MemoPages/MemoList";

const rootRoutes = [
  {
    path: "/",
    Component: RootLayout,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "/memo",
        children: [
          {
            path: "create",
            Component: MemoCreate,
          },
          {
            path: "list",
            Component: MemoList,
          },
        ],
      },
    ],
  },
];

export default rootRoutes;
