import useFieldRenderer from "./useFieldRenderer";

function FieldRenderer({ fieldsList }) {
  const { fieldRenderer } = useFieldRenderer();

  return <>{fieldRenderer(fieldsList)}</>;
}

export default FieldRenderer;
