import TempleRun from "../Game/TempleRun/templeRun";
import TempleRunCover from '../Assets/Game/TempleRun/TempleRunCover.png';
import TempleRunBackground from '../Assets/Game/TempleRun/TempleRunBackground.png';
import Mario from "../Game/Mario/mario";
import MarioCover from '../Assets/Game/Mario/MarioCover.png';
import MarioBackground from '../Assets/Game/Mario/MarioBackground.jpg';
import FlappyBirdCover from '../Assets/Game/FlappyBird/FlappyBirdCover.png';
import FlappyBirdBackground from '../Assets/Game/FlappyBird/FlappyBirdBackground.png';
import TwentyCover from '../Assets/Game/2048/2048Cover.png';
import TwentyBackground from '../Assets/Game/2048/2048Background.png';
import Twenty from "../Game/Twenty/twenty";
import PacmanCover from '../Assets/Game/Pacman/PacmanCover.png';
import PacmanBackground from '../Assets/Game/Pacman/PacmanBackground.png';
import Pacman from "../Game/Pacman/pacman";
import CrossyRoadCover from '../Assets/Game/CrossyRoad/CrossyRoadCover.png';
import CrossyRoadBackground from '../Assets/Game/CrossyRoad/CrossyRoadBackground.jpeg';
import CrossyRoad from "../Game/CrossyRoad/crossyroad";
import TetrisCover from '../Assets/Game/Tetris/TetrisCover.png';
import TetrisBackground from '../Assets/Game/Tetris/TetrisBackground.jpg';
import Tetris from "../Game/Tetris/tetris";
import FlappyBird from "../Game/FlappyBird/flappybird";
import SpaceInvadersBackground from '../Assets/Game/SpaceInvaders/SpaceInvadersBackground.jpg';
import SpaceInvadersCover from '../Assets/Game/SpaceInvaders/SpaceInvadersLogo.png';
import SpaceInvaders from "../Game/SpaceInvaders/spaceinvaders";

export const games = [
  { name: "Temple Run", cover: TempleRunCover, backgroundCover: TempleRunBackground, route: "/templerun" },
  { name: "Mario", cover: MarioCover, backgroundCover: MarioBackground, route: "/mario" },
  { name: "Flappy Bird", cover: FlappyBirdCover, backgroundCover: FlappyBirdBackground, route: "/flappybird" },
  { name: "2048", cover: TwentyCover, backgroundCover: TwentyBackground, route: "/2048"},
  { name: "Pacman", cover: PacmanCover, backgroundCover: PacmanBackground, route: "/pacman"},
  { name: "Tetris", cover: TetrisCover, backgroundCover: TetrisBackground, route: "/tetris"},
  { name: "Crossy Road", cover: CrossyRoadCover, backgroundCover: CrossyRoadBackground, route: "/crossyroad" },
  { name: "Space Invaders", cover: SpaceInvadersCover, backgroundCover: SpaceInvadersBackground, route: "/spaceinvaders" }
];

export const routes = [
  {
    id: 1,
    path: '/templerun',
    element: <TempleRun/>,
  },
  {
    id: 2,
    path: '/mario',
    element: <Mario/>,
  },
  {
    id: 3,
    path: '/flappybird',
    element: <FlappyBird/>
  },
  {
    id: 4,
    path: '/2048',
    element: <Twenty/>
  },
  {
    id: 5,
    path: 'pacman',
    element: <Pacman/>
  },
  {
    id: 6,
    path: 'tetris',
    element: <Tetris/>
  }, 
  {
    id: 7,
    path: 'crossyroad',
    element: <CrossyRoad/>
  },
  {
    id: 8,
    path: 'spaceinvaders',
    element: <SpaceInvaders/>
  }
]

export default games;