import './index.css';
import * as serviceWorker from './serviceWorker';
import state from './Redux/state';
import {renderEntireTree} from './render';

renderEntireTree(state);

serviceWorker.unregister();