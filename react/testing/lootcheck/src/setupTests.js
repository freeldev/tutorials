// TODO: remove this raf polyfill once the below issue is sorted
import raf from "./tempPolyfills";

import { configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

configure({ adapter: new Adapter() });
