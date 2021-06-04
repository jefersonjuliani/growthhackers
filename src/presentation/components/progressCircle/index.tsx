import React from 'react';
import progressCircleInterface from "./progressCircleInterface"
import Color from "@/presentation/styles/colors"

const progressCircle: React.FC<progressCircleInterface> = ({percentage}:progressCircleInterface) => {

    const strokeWidth = 3;
    const diameter = 55;

    const coordinateForCircle = diameter / 2;
    const radius = (diameter - 2 * strokeWidth) / 2;
    const circumference = 2 * Math.PI * radius;

    let percentageValue = percentage;

    if (percentage <= 0) {
        percentageValue = 100;
    } else if (percentage >= 100) {
        percentageValue = 0;
    } else if (percentage + 10 <= 50) {
        percentageValue = (percentage + 10) - 100;
    } else if (percentage + 10 > 50) {
        percentageValue = (percentage + 5) - 100;
    }

    const circlePercentage = percentageValue * (circumference / 100);

    return (
        <div>
            <svg
                width={diameter}
                height={diameter}
                style={{ transform: "rotate(63deg) rotateX(180deg)", overflow: "hidden" }}
            >
                <circle
                    cx={coordinateForCircle}
                    cy={coordinateForCircle}
                    r={radius}
                    fill="none"
                    stroke={Color.grayDark2}
                    strokeWidth={strokeWidth}
                    strokeDasharray={130}
                    style={{
                        strokeDashoffset: 0
                    }}
                />
                <circle
                    cx={coordinateForCircle}
                    cy={coordinateForCircle}
                    r={radius}
                    fill="none"
                    stroke={Color.primary}
                    strokeWidth={strokeWidth}
                    strokeDasharray={circumference}
                    style={{
                        transform: "rotate(0deg)",
                        strokeDashoffset: circlePercentage
                    }}
                />
                <circle
                    cx={coordinateForCircle}
                    cy={coordinateForCircle}
                    r={radius}
                    fill="none"
                    stroke={Color.grayLight}
                    strokeWidth={strokeWidth + 2}
                    strokeDasharray={130}
                    style={{
                        strokeDashoffset: 130,
                    }}
                />

            </svg>
        </div>
    );
}

export default progressCircle;