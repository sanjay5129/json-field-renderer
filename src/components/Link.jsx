import Link from '@mui/material/Link';

export default function LinkComponent({ url, text }) {
  return (
    <Link href={url}>{text}</Link>
  )
}
