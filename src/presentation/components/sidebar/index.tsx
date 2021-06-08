import React, { useState, useEffect, useRef, useContext } from 'react';
import useOnClick from "@/presentation/hooks/useOnClick"
import useWindowDimensions from "@/presentation/hooks/useWindowDimensions"
import { Link, useLocation } from 'react-router-dom';
import Routes from '@/main/routes/main.routes';
import routeInterface from '@/main/routes/interface/routeInterface';

import { Row, Perfilphoto, ExpandButton } from "@/presentation/components"

import Styles from "./styles.module.scss"

import MakeSearchInput from "@/main/factories/components/searchInput-factory"
import MakeNotificationIndicator from "@/main/factories/components/notificationIndicator-factory"

import Context from "@/presentation/context/"

const Sidebar: React.FC = () => {
    const [path, setPath] = useState('');
    const [expand, setExpand] = useState(true);

    const { dispatch } = useContext(Context)

    const location = useLocation();
    const node = useRef<HTMLDivElement>(null);
    useOnClick(node, (event) => {
        setExpand(old => !old)
        dispatch({ type: "EXPAND", payload:expand?"false":"true" })
    });

    const { width } = useWindowDimensions();
    

    //get the path name
    useEffect(() => {
        setPath(location.pathname)
    }, [location]);


    const _renderMenu = () => {
        return Routes.map((prop: routeInterface, key) => {

            const resize=expand && width >= 768;

            if (prop.layout === '/main') {

                const isPath = path.includes(prop.path);

                const listClasses = `${Styles.menuLink} ${isPath ? Styles.isPath : ''} ${resize ? "" : Styles.center}`

                return (
                    <Link
                        key={key}
                        to={{
                            pathname: `${prop.path}`,
                        }}
                        className={listClasses}
                    >
                        <Row>
                            <div className={resize ? Styles.left : ""}>
                                <img
                                    src={prop.icon}
                                    alt={prop.alt}
                                    style={{ width: resize ? 14 : 20 }}
                                />
                            </div>
                            {
                                resize ? (
                                    <>
                                        <div className={Styles.right}>
                                            <h2 className={Styles.menuText}>{prop.name}</h2>
                                        </div>
                                        <div className={Styles.right}>
                                            <MakeNotificationIndicator menu={prop.name} />
                                        </div>
                                    </>
                                ) : null
                            }

                        </Row>
                    </Link>
                );
            } else {
                return null;
            }
        });
    };

    return (
        <div className={Styles.container} style={{ width: expand ? 220 : 100 }}>

            <div className={Styles.mv}>
                <Row start>

                    <Perfilphoto isExpanded={expand} />

                    <div className={Styles.expandButton} ref={node} style={{ transform: expand ? '' : 'rotate(180deg)' }}>
                        <ExpandButton />
                    </div>

                </Row>
            </div>

            {_renderMenu()}

            <MakeSearchInput isExpanded={expand} />
        </div>
    );
}

export default Sidebar;