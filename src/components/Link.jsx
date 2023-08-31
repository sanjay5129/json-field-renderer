import Link from '@mui/material/Link';

export default function LinkComponent({ url, text }) {
  return (
    <Link target="_blank" href={url}>{text}</Link>
  )
}
