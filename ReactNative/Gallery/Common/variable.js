import React from 'react';
import { Dimensions } from 'react-native';

const win = Dimensions.get('window')
export const h = win.height;
export const w = win.width;

export const HOME = 'HOME';
export const DETAIL = 'DETAIL';