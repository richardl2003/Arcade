import TempleRun from "../Game/TempleRun/templeRun"
import Mario from "../Game/Mario/mario"

export const routes = [
    {
      id: 1,
      path: '/templeRun',
      element: <TempleRun/>,
    },
    {
      id: 2,
      path: '/mario',
      element: <Mario/>,
    },
  ]