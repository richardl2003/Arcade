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
import PacmanCover from '../Assets/Game/Pacman/PacmanCover.png';
import PacmanBackground from '../Assets/Game/Pacman/PacmanBackground.png';

export const games = [
  { name: "Temple Run", cover: TempleRunCover, backgroundCover: TempleRunBackground, route: "/templerun" },
  { name: "Mario", cover: MarioCover, backgroundCover: MarioBackground, route: "/mario" },
  { name: "Flappy Bird", cover: FlappyBirdCover, backgroundCover: FlappyBirdBackground, route: "/flappybird" },
  { name: "2048", cover: TwentyCover, backgroundCover: TwentyBackground, route: "/2048"},
  { name: "Pacman", cover: PacmanCover, backgroundCover: PacmanBackground, route: "/pacman"},
  { name: "Temple Run", cover: TempleRunCover, backgroundCover: TempleRunBackground, route: "/templerun"},
  { name: "Mario", cover: MarioCover, route: "/mario"},
  { name: "Flappy Bird", cover: FlappyBirdCover, route: "/flappyBird" },
  { name: "2048", cover: TwentyCover, route: "/2048"},
  { name: "Pacman", cover: PacmanCover, route: "/pacman"}
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
]

export default games;