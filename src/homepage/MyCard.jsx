import React from "react";
import { Card } from "antd";
const { Meta } = Card;
const MyCard = ({ myImage, myTitle }) => (
  <Card
    hoverable
    style={{
      width: 240,
      height: 200,
      borderRadius: "50%",
      overflow: "hidden",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      textAlign: "center",
    }}
    cover={<img alt="example" src={myImage} />}
  >
    <Meta
      title={myTitle}
      style={{ fontSize: "16px", fontWeight: "bold", marginTop: "-20px" }}
    />
  </Card>
);
export default MyCard;
