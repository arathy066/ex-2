"use client"

import React, { PureComponent } from "react";
import ReactPlayer from 'react-player'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { MapContainer, TileLayer, useMap, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css"

export default function Content() {

    const data = [
        {
            name: 'A',
            uv: 4000,
            pv: 2400,
            amt: 2400,
        },
        {
            name: 'B',
            uv: 3000,
            pv: 1398,
            amt: 2210,
        },
        {
            name: 'C',
            uv: 2000,
            pv: 9800,
            amt: 2290,
        },
        {
            name: 'D',
            uv: 2780,
            pv: 3908,
            amt: 2000,
        },
        {
            name: 'E',
            uv: 1890,
            pv: 4800,
            amt: 2181,
        },
        {
            name: 'F',
            uv: 2390,
            pv: 3800,
            amt: 2500,
        },
        {
            name: 'G',
            uv: 3490,
            pv: 4300,
            amt: 2100,
        },
    ];

    const position: [number,number] = [51.505, -0.09]

    return <>

        <div className="container text-center">
            <div className="row">
                <div className="col-6">

                    <MapContainer center={position} zoom={13} scrollWheelZoom={false} style={{
                        height:300
                    }}>
                        <TileLayer
                            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        />
                        <Marker position={position}>
                            <Popup>
                                A pretty CSS3 popup. <br /> Easily customizable.
                            </Popup>
                        </Marker>
                    </MapContainer>,
                    )

                </div>
                <div className="col-6">

                    <ResponsiveContainer width="100%" height="100%" minHeight={300}>
                        <LineChart
                            width={500}
                            height={300}
                            data={data}
                            margin={{
                                top: 5,
                                right: 30,
                                left: 20,
                                bottom: 5,
                            }}
                        >
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="name" />
                            <YAxis />
                            <Tooltip />
                            <Legend />
                            <Line type="monotone" dataKey="pv" stroke="#FF7700" activeDot={{ r: 8 }} />
                            <Line type="monotone" dataKey="uv" stroke="#0066FF" />
                        </LineChart>
                    </ResponsiveContainer>

                </div>
            </div><br></br>
            <div className="row">
                <div className="col-12 d-flex justify-content-center">
                    <ReactPlayer
                        src='https://www.youtube.com/watch?v=LXb3EKWsInQ'
                        width="650px"
                        height="409px"
                    />
                </div>
            </div>

        </div>
    </>
}