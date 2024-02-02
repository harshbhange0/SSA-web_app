import React from "react";
import { useParams } from "react-router-dom";

export default function Dashboard() {
  const { url } = useParams();
  return <div>Dashboard {url}</div>;
}
