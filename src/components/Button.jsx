import Button from '@mui/material/Button';

export default function ButtonComponent({ text, onClick, workflow }) {
  return (
    <Button onClick={onClick}>{text}</Button>
  )
}
