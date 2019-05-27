// eslint-disable-next-line import/no-extraneous-dependencies
import React from 'react';
import { storiesOf } from '@storybook/react';
import { muiTheme } from 'storybook-addon-material-ui';
// eslint-disable-next-line import/no-extraneous-dependencies
import {
  Button,
  ButtonBase,
  IconButton,
  Grid,
  Card,
  CardContent,
  Typography,
  Popover,
  TableRow,
  TableCell,
  Toolbar,
  Divider,
  Drawer,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  List,
  ListSubheader,
  ListItem,
  ListItemIcon,
  ListItemText,
  ListItemSecondaryAction,
  FormGroup,
  FormControlLabel,
  Switch,
  TextField,
} from '@nebula.js/ui/components';

storiesOf('Button', module)
  .addDecorator(muiTheme())
  .add('with text', () => <Button>Nebula Button</Button>)
  .add('with emoji', () => (
    <Button>
      <span role="img" aria-label="so cool">
        Nebula 😀 😎 👍 💯
      </span>
    </Button>
  ));
