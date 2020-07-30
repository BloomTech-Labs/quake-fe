import React from 'react';

// View Icons
import { ReactComponent as MapViewIcon } from "../../../images/icons/map-view-icon.svg";
import { ReactComponent as ComboViewIcon } from "../../../images/icons/combo-view-icon.svg";
import { ReactComponent as ListViewIcon } from "../../../images/icons/list-view-icon.svg";

const view = [
  {view: 'map', Icon: MapViewIcon},
  {view: 'combo', Icon: ComboViewIcon},
  {view: 'list', Icon: ListViewIcon},
];
const viewStyle = {styleTrue: '#65FFAE20', styleFalse: 'transparent'}

const ViewType = ({viewType, setViewType}) => {
  return ( 
    <div className="results-toggle">
      {view.map((view, index) => {
        return (
          <button key={index} onClick={() => setViewType(view.view)} 
            style={viewType === view.view
              ? { background: viewStyle.styleTrue }
              : { background: viewStyle.styleFalse }}>
            <view.Icon className="view-button"/>
          </button>
        )
      })}
    </div>
   );
}
 
export default ViewType;