"use client";
import { useEffect, useState } from "react";
import LoadingRoutes from "./LoadingRoutes";

export default function DelayWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShow(true), 2000);
    return () => clearTimeout(timer);
  }, []);

  return show ? children : <LoadingRoutes />;
}
