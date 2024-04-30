import React from 'react'
import Bullet from './Bullet';

const CustomizedLegend = (props) => {
    const {payload} = props;
    return (
        <ul className="LegendList">
            {payload.map((entry, index) => (
                <li key={`item-${index}`}>
                    <div className="BulletLabel d-flex">
                        <Bullet backgroundColor={entry.payload.fill} size="10px" style={{marginTop: "50%"}}/>
                        <div className="BulletLabelText">{entry.value}</div>
                    </div>
                    <div style={{marginLeft: "20px"}}>{entry.payload.value}</div>
                </li>
            ))}
        </ul>
    );
};

export default CustomizedLegend
