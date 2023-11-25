import TempleRun from "../Game/TempleRun/templeRun";
import TempleRunCover from '../Assets/Game/TempleRun/TempleRunCover.png';
import TempleRunBackground from '../Assets/Game/TempleRun/TempleRunBackground.png';
import MarioCover from '../Assets/Game/Mario/MarioCover.png';
import Mario from "../Game/Mario/mario";
import FlappyBirdCover from '../Assets/Game/FlappyBird/FlappyBirdCover.png';
import TwentyCover from '../Assets/Game/2048/2048Cover.png';
import PacmanCover from '../Assets/Game/Pacman/PacmanCover.png';

export const games = [
  { name: "Temple Run", cover: TempleRunCover, backgroundCover: TempleRunBackground, route: "/templeRun" },
  { name: "Mario", cover: MarioCover, route: "/mario" },
  { name: "Flappy Bird", cover: FlappyBirdCover, route: "/flappyBird" },
  { name: "2048", cover: TwentyCover, route: "/2048"},
  { name: "Pacman", cover: PacmanCover, route: "/Pacman"},
  { name: "Temple Run", cover: TempleRunCover, backgroundCover: TempleRunBackground, route: "/templeRun"},
  { name: "Mario", cover: MarioCover, route: "/mario"},
  { name: "Flappy Bird", cover: FlappyBirdCover, route: "/flappyBird" },
  { name: "2048", cover: TwentyCover, route: "/2048"},
  { name: "Pacman", cover: PacmanCover, route: "/Pacman"}
];

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

export default games;