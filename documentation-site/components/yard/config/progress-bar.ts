import {ProgressBar} from 'baseui/progress-bar';
import {PropTypes} from 'react-view';
import {TConfig} from '../types';

const progressBarProps = require('!!extract-react-types-loader!../../../../src/progress-bar/progressbar.js');

const ProgressBarConfig: TConfig = {
  componentName: 'ProgressBar',
  imports: {
    'baseui/progress-bar': {named: ['ProgressBar']},
  },
  scope: {
    ProgressBar,
  },
  theme: ['progressbarTrackFill'],
  props: {
    value: {
      value: 10,
      type: PropTypes.Number,
      description:
        'Progess bar value attribute normalized in the 0 to 100 range.',
      stateful: true,
    },
    getProgressLabel: {
      placeholder: '(value) => `${10 * value}mb out of 1000mb downloaded` ',
      value: '',
      type: PropTypes.Function,
      description:
        'Can be used to display a custom label for the progress bar.',
    },
    showLabel: {
      value: undefined,
      placeholder: 'false',
      type: PropTypes.Boolean,
      description: 'Can be used to show the progress bar label.',
    },
    infinite: {
      value: undefined,
      placeholder: 'false',
      type: PropTypes.Boolean,
      description: 'Can be used to show the infinite progress bar.',
    },
    errorMessage: {
      value: undefined,
      type: PropTypes.String,
      description: 'Error message for screen-reader users.',
    },
    overrides: {
      value: undefined,
      type: PropTypes.Custom,
      description: 'Lets you customize all aspects of the component.',
      custom: {
        names: ['Bar', 'BarProgress', 'Label', 'Root'],
        sharedProps: {
          $successValue: 'successValue',
          $value: 'value',
        },
      },
    },
  },
  mapTokensToProps: {
    ProgressBar: progressBarProps,
  },
};

export default ProgressBarConfig;
