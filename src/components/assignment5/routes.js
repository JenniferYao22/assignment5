import React from "react";

function Routes(props) {
    const { projection, routes, selectedAirline } = props;

    if (selectedAirline != null) {
        const selectedRoutes = routes.filter(route => route.AirlineID === selectedAirline);

        const routePaths = selectedRoutes.map((route, index) => {
            const source = [route.SourceLongitude, route.SourceLatitude];
            const target = [route.DestLongitude, route.DestLatitude];

            const sourceProjected = projection(source);
            const targetProjected = projection(target);

            const pathString = `M ${sourceProjected[0]} ${sourceProjected[1]} L ${targetProjected[0]} ${targetProjected[1]}`;
            return <path key={index} d={pathString} stroke="#992a5b" strokeWidth="0.1" />;
        });
        return <g>{routePaths}</g>;
    } else {
        return <g></g>;
    }
}

// TODO: 
// return the routes of the selected airline; 
// If the selectedAirlineID is null (i.e., no airline is selected), return <g></g>.

export { Routes }