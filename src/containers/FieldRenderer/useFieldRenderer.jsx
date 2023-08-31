import { useState } from "react";
import componentMapper from "./fieldData";

const useFieldRenderer = () => {
  let componentCounter = 0;
  const [fieldState, setFieldState] = useState({});

  const handleModalClose = (modalName) => () =>
    setFieldState((prev) => ({
      ...prev,
      [modalName]: false,
    }));

  const workFlows = () => ({
    openModal: targetModal => setFieldState(p => ({
      ...p,
      [targetModal]: true
    }))
  })

  const componentMap = componentMapper(handleModalClose);

  const fieldRenderer = (data) => {
    if (data.Content) {
      const { children, props, Component } = componentMap[data.Content.type];
      const name = data.Content.props?.name || data.Content.type + componentCounter++;
      let propValue = {
        ...data.Content.props,
        ...props,
        name,
        stateValue: fieldState[name],
      };
      if (data.Content.props.secondaryAction) {
        propValue = {
          ...propValue,
          workflow: {
            action: workFlows()[data.Content.props.secondaryAction.type],
            target: data.Content.props.secondaryAction.target
          }
        }
      }

      if (children) {
        return (
          <Component key={name} {...propValue}>
            {Object.keys(data.Children).map((child) =>
              fieldRenderer(data.Children[child])
            )}
          </Component>
        );
      } else {
        return <Component key={name} {...propValue} />;
      }
    }
  };

  return {
    fieldRenderer,
  };
};

export default useFieldRenderer;
