import { ThemedLayoutV2 } from "@refinedev/antd";
import { Refine } from "@refinedev/core";
import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import UserList from "./pages/UserList";
import UserCreate from "./pages/UserCreate";
import UserEdit from "./pages/UserEdit";
import routerProvider, {
  NavigateToResource,
  UnsavedChangesNotifier,
  DocumentTitleHandler,
} from "@refinedev/react-router-v6";

function App() {
  return (
    <BrowserRouter>
      <Refine
        resources={[
          {
            name: "users",
            list: "users/list",
            create: "users/create",
            edit: "users/edit/:id",
          },
        ]}
      >
      <Routes>
        <Route
          element={
            <ThemedLayoutV2>
              <Outlet />
            </ThemedLayoutV2>
          }
        >
          <Route index element={<NavigateToResource resource="users" />} />
          <Route path = "users">
          <Route index element={<UserList/>}/>
          <Route path="create" element={<UserCreate/>}/>
          <Route path="edit/:id" element={<UserEdit/>}/>
          </Route>
        </Route>
      </Routes>
      </Refine>
    </BrowserRouter>
  );
}
export default App;
