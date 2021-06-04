import React, { useState, useEffect } from 'react';

import { Link, useLocation } from 'react-router-dom';
import Routes from '@/main/routes/main.routes';
import routeInterface from '@/main/routes/interface/routeInterface';

import { Row, Perfilphoto } from "@/presentation/components"

import Styles from "./styles.module.scss"

import MakeSearchInput from "@/main/factories/components/searchInput-factory"


const Sidebar: React.FC = () => {
    const [path, setPath] = useState('');

    const location = useLocation();

    //get the path name
    useEffect(() => {
        setPath(location.pathname)
    }, [location]);

    const _renderMenu = () => {
        return Routes.map((prop: routeInterface, key) => {
            if (prop.layout === '/main') {
                const isPath = path.includes(prop.path);
                const listClasses = `${Styles.menuLink} ${isPath ? Styles.isPath : ''}`
                return (
                    <Link
                        key={key}
                        to={{
                            pathname: `${prop.path}`,
                        }}
                        className={listClasses}
                        style={{ textDecoration: "none" }}
                    >
                        <Row>
                            <div className={Styles.left}>
                                <img
                                    src={prop.icon}
                                    alt={prop.alt}
                                    style={{ width: 14 }}
                                />
                            </div>
                            <div className={Styles.right}>
                                <h2 className={Styles.menuText}>{prop.name}</h2>
                            </div>
                        </Row>
                    </Link>
                );
            } else {
                return null;
            }
        });
    };

    return (
        <div className={Styles.container}>

            <Perfilphoto />

            {_renderMenu()}

           <MakeSearchInput />

        </div>
    );
}

export default Sidebar;