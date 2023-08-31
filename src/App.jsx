import componentSpecs from "./common/componentData";
import FieldRenderer from "./containers/FieldRenderer";

function App() {
  return <FieldRenderer fieldsList={componentSpecs} />;
}

export default App;
