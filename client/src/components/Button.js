import { withStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';

export const ColorButton = withStyles(() => ({
    root: {
      color: 'white',
      backgroundColor: '#FF8400',
      '&:hover': {
        backgroundColor: '#FF8400',
        opacity:"0.8"
      },
    },
}))(Button);
