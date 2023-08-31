import Button from '@mui/material/Button';

export default function ButtonComponent({ text, onClick, workflow }) {
  const handleClick = e => {
    if (workflow) {
      workflow.action(workflow.target);
    }

    if (onClick) {
      onClick(e);
    }
  };
  return (
    <Button onClick={handleClick}>{text}</Button>
  )
}