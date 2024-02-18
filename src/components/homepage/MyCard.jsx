import React from "react";
import { Card, Button } from "antd";
const { Meta } = Card;
const MyCard = ({ myImage, myDescription, myTitle, buttonText }) => (
  <Card
    hoverable
    style={{
      width: 240,
    }}
    cover={<img alt="example" src={myImage} />}
  >
    <Meta title={myTitle} description={myDescription} />
    <Button type="primary" style={{ marginTop: "10px", marginLeft: "70%" }}>
      {buttonText}
    </Button>
  </Card>
);
export default MyCard;
