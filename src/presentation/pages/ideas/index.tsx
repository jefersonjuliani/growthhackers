import React, { Suspense } from "react";
import useWindowDimensions from "@/presentation/hooks/useWindowDimensions"
import { Row, Header } from "@/presentation/components"

import Icon from "@/presentation/assets"
import Styles from "./styles.module.scss"

let MakeBoard = React.lazy(() => import("@/main/factories/components/board-factory"));


const Ideas: React.FC = () => {

  const { width } = useWindowDimensions();

  return (
    <div>
      <Row start={width >= 768} spaceBetween>
        <Row center>
          <img className={Styles.img} src={Icon.ideasIcon} alt="ideas icon" />
          <h1>Ideas</h1>
        </Row>
        <Header />
      </Row>

      <div className={Styles.contentContainer}>
        <Suspense fallback={<div>Loading... </div>}>
          <MakeBoard />
        </Suspense>
      </div>
    </div>
  );
}

export default Ideas;