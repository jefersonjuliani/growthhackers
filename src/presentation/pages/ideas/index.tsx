import React, { Suspense } from "react";

import { Row, Header } from "@/presentation/components"

import Icon from "@/presentation/assets"
import Styles from "./styles.module.scss"

let MakeBoard = React.lazy(() => import("@/main/factories/components/board-factory"));


const Ideas: React.FC = () => {

  return (
    <div>
      <Row start spaceBetween>
        <Row center>
          <img className={Styles.img} src={Icon.ideasIcon} alt="ideas icon" />
          <h1>Ideas</h1>
        </Row>
        <Header />
      </Row>
      <Suspense fallback={<div>Loading... </div>}>
        <MakeBoard />
      </Suspense>

    </div>
  );
}

export default Ideas;