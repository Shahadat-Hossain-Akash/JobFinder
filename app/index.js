import { Redirect, Stack } from "expo-router";
import { useState } from "react";

export default function Index() {

    return (
      <>
      <Redirect href='/splash'/>
      <Redirect href='/home'/>
      </>
    ) ;
}