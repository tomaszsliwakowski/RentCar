import React from "react";
import Car from "./index";
import {
  faEllipsisH,
  faFillDrip,
  faTachometerAlt,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function CarContainer(props) {
  const {
    name,
    thumbnailSrc,
    dailyPrice,
    monthlyPrice,
    kilometers,
    gearType,
    fuel,
  } = props;
  return (
    <Car>
      <Car.Thumbnail>
        <img src={thumbnailSrc} alt="Car" />
      </Car.Thumbnail>
      <Car.Name>{name}</Car.Name>
      <Car.Prices>
        <Car.DailyPrice>
          ${dailyPrice}
          <Car.SmallText>/Day</Car.SmallText>
        </Car.DailyPrice>
        <Car.MonthlyPrice>
          ${monthlyPrice}
          <Car.SmallText>/Month</Car.SmallText>
        </Car.MonthlyPrice>
      </Car.Prices>
      <Car.Separator />
      <Car.CarDetailsContainer>
        <Car.Detail>
          <Car.SmallIcon>
            <FontAwesomeIcon icon={faTachometerAlt} />
          </Car.SmallIcon>
          <Car.Info>{kilometers}</Car.Info>
        </Car.Detail>
        <Car.Detail>
          <Car.SmallIcon>
            <FontAwesomeIcon icon={faEllipsisH} />
          </Car.SmallIcon>
          <Car.Info>{gearType}</Car.Info>
        </Car.Detail>
        <Car.Detail>
          <Car.SmallIcon>
            <FontAwesomeIcon icon={faFillDrip} />
          </Car.SmallIcon>
          <Car.Info>{fuel}</Car.Info>
        </Car.Detail>
      </Car.CarDetailsContainer>
      <Car.Button>Rent Now</Car.Button>
    </Car>
  );
}
