import SettingsIconSVG from './SettingsIcon';

const ICON_SIZE = 28;

const TabIconSettings = (props) => {
  return (
    <SettingsIconSVG
      width={ICON_SIZE}
      height={ICON_SIZE}
      fill={props.focused ? '#333' : '#ccc'}
    />
  );
};

export default TabIconSettings;
