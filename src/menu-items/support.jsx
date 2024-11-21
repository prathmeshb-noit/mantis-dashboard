// assets
import { ChromeOutlined, QuestionOutlined, FolderOpenOutlined, LockOutlined } from '@ant-design/icons';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
// icons
const icons = {
  ChromeOutlined,
  QuestionOutlined,
  FolderOpenOutlined,
  LockOutlined
};

// ==============================|| MENU ITEMS - SAMPLE PAGE & DOCUMENTATION ||============================== //

const support = {
  id: 'support',
  title: 'Support',
  type: 'group',
  children: [
    {
      id: 'sample-page',
      title: 'All Files',
      type: 'item',
      url: '/',
      icon: icons.FolderOpenOutlined
    },
    {
      id: 'private-page',
      title: 'All Files',
      type: 'item',
      url: '/color',
      icon: icons.LockOutlined
    },
    {
      id: 'trash-page',
      title: 'Trash',
      type: 'item',
      url: '/typography',
      icon: DeleteOutlineIcon
    }
  ]
};

export default support;
