import Modal from '../../components/Modal'
import List from '../../components/List'
import Button from '../../components/Button'
import Link from '../../components/Link'
import Box from '../../components/Box'
import Typography from '../../components/Typography'

const componentMapper = (handleModalClose) => ({
  BoxComponent: {
    children: true,
    Component: Box,
  },
  ModalComponent: {
    children: true,
    Component: Modal,
    props: {
      handleModalClose
    }
  },
  H1Component: {
    children: false,
    Component: Typography,
    props: {
      variant: 'h1'
    }
  },
  H2Component: {
    children: false,
    Component: Typography,
    props: {
      variant: 'h2'
    }
  },
  ParagraphComponent: {
    children: false,
    Component: Typography,
    props: {
      variant: 'subtitle1'
    }
  },
  ListComponent: {
    children: false,
    Component: List,
  },
  ButtonComponent: {
    children: false,
    Component: Button,
  },
  LinkComponent: {
    children: false,
    Component: Link,
  },
})

export default componentMapper;
