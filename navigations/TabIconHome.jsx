import HomeIconSVG from './HomeIcon';

const ICON_SIZE = 28; // TODO - get from appState

const TabIconHome = (props) => {
  return (
    <HomeIconSVG
      width={ICON_SIZE}
      height={ICON_SIZE}
      fill={props.focused ? '#333' : '#ccc'}
    />
  );
};

export default TabIconHome;
