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

// ==============================|| MENU ITEMS - UTILITIES ||============================== //

const utilities = {
  id: 'utilities',
  // title: 'Utilities',
  type: 'group',
  children: [
    {
      id: 'util-typography',
      title: 'All Files',
      type: 'item',
      url: '/home',
      icon: icons.FolderOpenOutlined
    },
    {
      id: 'util-color',
      title: 'Private Files',
      type: 'item',
      url: '/color',
      icon: icons.LockOutlined
    },
    {
      id: 'util-shadow',
      title: 'Trash',
      type: 'item',
      url: '/shadow',
      icon: DeleteOutlineIcon
    }
  ]
};

export default utilities;
