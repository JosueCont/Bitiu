import React from "react";
import { PixelRatio } from "react-native";

const fontScale = PixelRatio.getFontScale();
export const getFontSize = size => size/fontScale;