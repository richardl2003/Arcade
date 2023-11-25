import TempleRun from "../Game/TempleRun/templeRun"
import Mario from "../Game/Mario/mario"

export const routes = [
    {
      id: 1,
      path: '/game/1',
      element: <TempleRun/>,
    },
    {
      id: 2,
      path: '/game/2',
      element: <Mario/>,
    },
  ]