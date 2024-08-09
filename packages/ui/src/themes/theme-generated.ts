type Theme = {
  accentBackground: string;
  accentColor: string;
  background0: string;
  background025: string;
  background05: string;
  background075: string;
  color1: string;
  color2: string;
  color3: string;
  color4: string;
  color5: string;
  color6: string;
  color7: string;
  color8: string;
  color9: string;
  color10: string;
  color11: string;
  color12: string;
  color0: string;
  color025: string;
  color05: string;
  color075: string;
  background: string;
  backgroundHover: string;
  backgroundPress: string;
  backgroundFocus: string;
  borderColor: string;
  borderColorHover: string;
  borderColorPress: string;
  borderColorFocus: string;
  color: string;
  colorHover: string;
  colorPress: string;
  colorFocus: string;
  colorTransparent: string;
  placeholderColor: string;
  outlineColor: string;
  blue1: string;
  blue2: string;
  blue3: string;
  blue4: string;
  blue5: string;
  blue6: string;
  blue7: string;
  blue8: string;
  blue9: string;
  blue10: string;
  blue11: string;
  blue12: string;
  gray1: string;
  gray2: string;
  gray3: string;
  gray4: string;
  gray5: string;
  gray6: string;
  gray7: string;
  gray8: string;
  gray9: string;
  gray10: string;
  gray11: string;
  gray12: string;
  green1: string;
  green2: string;
  green3: string;
  green4: string;
  green5: string;
  green6: string;
  green7: string;
  green8: string;
  green9: string;
  green10: string;
  green11: string;
  green12: string;
  orange1: string;
  orange2: string;
  orange3: string;
  orange4: string;
  orange5: string;
  orange6: string;
  orange7: string;
  orange8: string;
  orange9: string;
  orange10: string;
  orange11: string;
  orange12: string;
  pink1: string;
  pink2: string;
  pink3: string;
  pink4: string;
  pink5: string;
  pink6: string;
  pink7: string;
  pink8: string;
  pink9: string;
  pink10: string;
  pink11: string;
  pink12: string;
  purple1: string;
  purple2: string;
  purple3: string;
  purple4: string;
  purple5: string;
  purple6: string;
  purple7: string;
  purple8: string;
  purple9: string;
  purple10: string;
  purple11: string;
  purple12: string;
  red1: string;
  red2: string;
  red3: string;
  red4: string;
  red5: string;
  red6: string;
  red7: string;
  red8: string;
  red9: string;
  red10: string;
  red11: string;
  red12: string;
  teal1: string;
  teal2: string;
  teal3: string;
  teal4: string;
  teal5: string;
  teal6: string;
  teal7: string;
  teal8: string;
  teal9: string;
  teal10: string;
  teal11: string;
  teal12: string;
  yellow1: string;
  yellow2: string;
  yellow3: string;
  yellow4: string;
  yellow5: string;
  yellow6: string;
  yellow7: string;
  yellow8: string;
  yellow9: string;
  yellow10: string;
  yellow11: string;
  yellow12: string;
  shadowColor: string;
  shadowColorHover: string;
  shadowColorPress: string;
  shadowColorFocus: string;

}

function t(a: [number, number][]) {
  let res: Record<string,string> = {}
  for (const [ki, vi] of a) {
    res[ks[ki] as string] = vs[vi] as string
  }
  return res as Theme
}
const vs = [
  'hsl(210, 98.8%, 94.0%)',
  'hsl(214, 65.8%, 17.9%)',
  'rgba(255,255,255,0)',
  'rgba(255,255,255,0.25)',
  'rgba(255,255,255,0.5)',
  'rgba(255,255,255,0.75)',
  '#fff',
  '#f8f8f8',
  'hsl(0, 0%, 96.3%)',
  'hsl(0, 0%, 94.1%)',
  'hsl(0, 0%, 92.0%)',
  'hsl(0, 0%, 90.0%)',
  'hsl(0, 0%, 88.5%)',
  'hsl(0, 0%, 81.0%)',
  'hsl(0, 0%, 56.1%)',
  'hsl(0, 0%, 50.3%)',
  'hsl(0, 0%, 42.5%)',
  'hsl(0, 0%, 9.0%)',
  'rgba(10,10,10,0)',
  'rgba(10,10,10,0.25)',
  'rgba(10,10,10,0.5)',
  'rgba(10,10,10,0.75)',
  'hsl(206, 100%, 99.2%)',
  'hsl(210, 100%, 98.0%)',
  'hsl(209, 100%, 96.5%)',
  'hsl(209, 95.0%, 90.1%)',
  'hsl(209, 81.2%, 84.5%)',
  'hsl(208, 77.5%, 76.9%)',
  'hsl(206, 81.9%, 65.3%)',
  'hsl(206, 100%, 50.0%)',
  'hsl(208, 100%, 47.3%)',
  'hsl(211, 100%, 43.2%)',
  'hsl(211, 100%, 15.0%)',
  'hsl(0, 0%, 99.0%)',
  'hsl(0, 0%, 97.3%)',
  'hsl(0, 0%, 95.1%)',
  'hsl(0, 0%, 93.0%)',
  'hsl(0, 0%, 90.9%)',
  'hsl(0, 0%, 88.7%)',
  'hsl(0, 0%, 85.8%)',
  'hsl(0, 0%, 78.0%)',
  'hsl(0, 0%, 52.3%)',
  'hsl(0, 0%, 43.5%)',
  'hsl(136, 50.0%, 98.9%)',
  'hsl(138, 62.5%, 96.9%)',
  'hsl(139, 55.2%, 94.5%)',
  'hsl(140, 48.7%, 91.0%)',
  'hsl(141, 43.7%, 86.0%)',
  'hsl(143, 40.3%, 79.0%)',
  'hsl(146, 38.5%, 69.0%)',
  'hsl(151, 40.2%, 54.1%)',
  'hsl(151, 55.0%, 41.5%)',
  'hsl(152, 57.5%, 37.6%)',
  'hsl(153, 67.0%, 28.5%)',
  'hsl(155, 40.0%, 14.0%)',
  'hsl(24, 70.0%, 99.0%)',
  'hsl(24, 83.3%, 97.6%)',
  'hsl(24, 100%, 95.3%)',
  'hsl(25, 100%, 92.2%)',
  'hsl(25, 100%, 88.2%)',
  'hsl(25, 100%, 82.8%)',
  'hsl(24, 100%, 75.3%)',
  'hsl(24, 94.5%, 64.3%)',
  'hsl(24, 94.0%, 50.0%)',
  'hsl(24, 100%, 46.5%)',
  'hsl(24, 100%, 37.0%)',
  'hsl(15, 60.0%, 17.0%)',
  'hsl(322, 100%, 99.4%)',
  'hsl(323, 100%, 98.4%)',
  'hsl(323, 86.3%, 96.5%)',
  'hsl(323, 78.7%, 94.2%)',
  'hsl(323, 72.2%, 91.1%)',
  'hsl(323, 66.3%, 86.6%)',
  'hsl(323, 62.0%, 80.1%)',
  'hsl(323, 60.3%, 72.4%)',
  'hsl(322, 65.0%, 54.5%)',
  'hsl(322, 63.9%, 50.7%)',
  'hsl(322, 75.0%, 46.0%)',
  'hsl(320, 70.0%, 13.5%)',
  'hsl(280, 65.0%, 99.4%)',
  'hsl(276, 100%, 99.0%)',
  'hsl(276, 83.1%, 97.0%)',
  'hsl(275, 76.4%, 94.7%)',
  'hsl(275, 70.8%, 91.8%)',
  'hsl(274, 65.4%, 87.8%)',
  'hsl(273, 61.0%, 81.7%)',
  'hsl(272, 60.0%, 73.5%)',
  'hsl(272, 51.0%, 54.0%)',
  'hsl(272, 46.8%, 50.3%)',
  'hsl(272, 50.0%, 45.8%)',
  'hsl(272, 66.0%, 16.0%)',
  'hsl(359, 100%, 99.4%)',
  'hsl(359, 100%, 98.6%)',
  'hsl(360, 100%, 96.8%)',
  'hsl(360, 97.9%, 94.8%)',
  'hsl(360, 90.2%, 91.9%)',
  'hsl(360, 81.7%, 87.8%)',
  'hsl(359, 74.2%, 81.7%)',
  'hsl(359, 69.5%, 74.3%)',
  'hsl(358, 75.0%, 59.0%)',
  'hsl(358, 69.4%, 55.2%)',
  'hsl(358, 65.0%, 48.7%)',
  'hsl(354, 50.0%, 14.6%)',
  'hsl(168, 48.0%, 6.5%)',
  'hsl(169, 77.8%, 7.1%)',
  'hsl(170, 76.1%, 9.2%)',
  'hsl(171, 75.8%, 11.0%)',
  'hsl(171, 75.7%, 12.8%)',
  'hsl(172, 75.8%, 15.1%)',
  'hsl(172, 76.7%, 18.6%)',
  'hsl(173, 80.2%, 23.7%)',
  'hsl(173, 80.0%, 36.0%)',
  'hsl(174, 83.9%, 38.2%)',
  'hsl(174, 90.0%, 40.7%)',
  'hsl(166, 73.0%, 93.1%)',
  'hsl(60, 54.0%, 98.5%)',
  'hsl(52, 100%, 95.5%)',
  'hsl(55, 100%, 90.9%)',
  'hsl(54, 100%, 86.6%)',
  'hsl(52, 97.9%, 82.0%)',
  'hsl(50, 89.4%, 76.1%)',
  'hsl(47, 80.4%, 68.0%)',
  'hsl(48, 100%, 46.1%)',
  'hsl(53, 92.0%, 50.0%)',
  'hsl(50, 100%, 48.5%)',
  'hsl(42, 100%, 29.0%)',
  'hsl(40, 55.0%, 13.5%)',
  'rgba(0,0,0,0.085)',
  'rgba(0,0,0,0.04)',
  '#050505',
  '#151515',
  '#191919',
  '#232323',
  '#282828',
  '#323232',
  '#424242',
  '#494949',
  '#545454',
  '#626262',
  '#a5a5a5',
  'hsl(212, 35.0%, 9.2%)',
  'hsl(216, 50.0%, 11.8%)',
  'hsl(214, 59.4%, 15.3%)',
  'hsl(213, 71.2%, 20.2%)',
  'hsl(212, 77.4%, 23.1%)',
  'hsl(211, 85.1%, 27.4%)',
  'hsl(211, 89.7%, 34.1%)',
  'hsl(209, 100%, 60.6%)',
  'hsl(210, 100%, 66.1%)',
  'hsl(206, 98.0%, 95.8%)',
  'hsl(0, 0%, 8.5%)',
  'hsl(0, 0%, 11.0%)',
  'hsl(0, 0%, 13.6%)',
  'hsl(0, 0%, 15.8%)',
  'hsl(0, 0%, 17.9%)',
  'hsl(0, 0%, 20.5%)',
  'hsl(0, 0%, 24.3%)',
  'hsl(0, 0%, 31.2%)',
  'hsl(0, 0%, 43.9%)',
  'hsl(0, 0%, 49.4%)',
  'hsl(0, 0%, 62.8%)',
  'hsl(146, 30.0%, 7.4%)',
  'hsl(155, 44.2%, 8.4%)',
  'hsl(155, 46.7%, 10.9%)',
  'hsl(154, 48.4%, 12.9%)',
  'hsl(154, 49.7%, 14.9%)',
  'hsl(154, 50.9%, 17.6%)',
  'hsl(153, 51.8%, 21.8%)',
  'hsl(151, 51.7%, 28.4%)',
  'hsl(151, 49.3%, 46.5%)',
  'hsl(151, 50.0%, 53.2%)',
  'hsl(137, 72.0%, 94.0%)',
  'hsl(30, 70.0%, 7.2%)',
  'hsl(28, 100%, 8.4%)',
  'hsl(26, 91.1%, 11.6%)',
  'hsl(25, 88.3%, 14.1%)',
  'hsl(24, 87.6%, 16.6%)',
  'hsl(24, 88.6%, 19.8%)',
  'hsl(24, 92.4%, 24.0%)',
  'hsl(25, 100%, 29.0%)',
  'hsl(24, 100%, 58.5%)',
  'hsl(24, 100%, 62.2%)',
  'hsl(24, 97.0%, 93.2%)',
  'hsl(318, 25.0%, 9.6%)',
  'hsl(319, 32.2%, 11.6%)',
  'hsl(319, 41.0%, 16.0%)',
  'hsl(320, 45.4%, 18.7%)',
  'hsl(320, 49.0%, 21.1%)',
  'hsl(321, 53.6%, 24.4%)',
  'hsl(321, 61.1%, 29.7%)',
  'hsl(322, 74.9%, 37.5%)',
  'hsl(323, 72.8%, 59.2%)',
  'hsl(325, 90.0%, 66.4%)',
  'hsl(322, 90.0%, 95.8%)',
  'hsl(284, 20.0%, 9.6%)',
  'hsl(283, 30.0%, 11.8%)',
  'hsl(281, 37.5%, 16.5%)',
  'hsl(280, 41.2%, 20.0%)',
  'hsl(279, 43.8%, 23.3%)',
  'hsl(277, 46.4%, 27.5%)',
  'hsl(275, 49.3%, 34.6%)',
  'hsl(272, 52.1%, 45.9%)',
  'hsl(273, 57.3%, 59.1%)',
  'hsl(275, 80.0%, 71.0%)',
  'hsl(279, 75.0%, 95.7%)',
  'hsl(353, 23.0%, 9.8%)',
  'hsl(357, 34.4%, 12.0%)',
  'hsl(356, 43.4%, 16.4%)',
  'hsl(356, 47.6%, 19.2%)',
  'hsl(356, 51.1%, 21.9%)',
  'hsl(356, 55.2%, 25.9%)',
  'hsl(357, 60.2%, 31.8%)',
  'hsl(358, 65.0%, 40.4%)',
  'hsl(358, 85.3%, 64.0%)',
  'hsl(358, 100%, 69.5%)',
  'hsl(351, 89.0%, 96.0%)',
  'hsl(45, 100%, 5.5%)',
  'hsl(46, 100%, 6.7%)',
  'hsl(45, 100%, 8.7%)',
  'hsl(45, 100%, 10.4%)',
  'hsl(47, 100%, 12.1%)',
  'hsl(49, 100%, 14.3%)',
  'hsl(49, 90.3%, 18.4%)',
  'hsl(50, 100%, 22.0%)',
  'hsl(54, 100%, 68.0%)',
  'hsl(48, 100%, 47.0%)',
  'hsl(53, 100%, 91.0%)',
  'rgba(0,0,0,0.3)',
  'rgba(0,0,0,0.2)',
  'hsla(24, 70.0%, 99.0%, 0)',
  'hsla(24, 70.0%, 99.0%, 0.25)',
  'hsla(24, 70.0%, 99.0%, 0.5)',
  'hsla(24, 70.0%, 99.0%, 0.75)',
  'hsla(24, 94.0%, 50.0%, 0)',
  'hsla(24, 94.0%, 50.0%, 0.25)',
  'hsla(24, 94.0%, 50.0%, 0.5)',
  'hsla(24, 94.0%, 50.0%, 0.75)',
  'hsla(60, 54.0%, 98.5%, 0)',
  'hsla(60, 54.0%, 98.5%, 0.25)',
  'hsla(60, 54.0%, 98.5%, 0.5)',
  'hsla(60, 54.0%, 98.5%, 0.75)',
  'hsla(53, 92.0%, 50.0%, 0)',
  'hsla(53, 92.0%, 50.0%, 0.25)',
  'hsla(53, 92.0%, 50.0%, 0.5)',
  'hsla(53, 92.0%, 50.0%, 0.75)',
  'hsla(165, 60.0%, 98.8%, 0)',
  'hsla(165, 60.0%, 98.8%, 0.25)',
  'hsla(165, 60.0%, 98.8%, 0.5)',
  'hsla(165, 60.0%, 98.8%, 0.75)',
  'hsl(165, 60.0%, 98.8%)',
  'hsl(169, 64.7%, 96.7%)',
  'hsl(169, 59.8%, 94.0%)',
  'hsl(169, 53.1%, 90.2%)',
  'hsl(170, 47.1%, 85.0%)',
  'hsl(170, 42.6%, 77.9%)',
  'hsl(170, 39.9%, 68.1%)',
  'hsl(172, 42.1%, 52.5%)',
  'hsl(173, 83.4%, 32.5%)',
  'hsl(174, 90.0%, 25.2%)',
  'hsl(170, 50.0%, 12.5%)',
  'hsla(173, 80.0%, 36.0%, 0)',
  'hsla(173, 80.0%, 36.0%, 0.25)',
  'hsla(173, 80.0%, 36.0%, 0.5)',
  'hsla(173, 80.0%, 36.0%, 0.75)',
  'hsla(206, 100%, 99.2%, 0)',
  'hsla(206, 100%, 99.2%, 0.25)',
  'hsla(206, 100%, 99.2%, 0.5)',
  'hsla(206, 100%, 99.2%, 0.75)',
  'hsla(206, 100%, 50.0%, 0)',
  'hsla(206, 100%, 50.0%, 0.25)',
  'hsla(206, 100%, 50.0%, 0.5)',
  'hsla(206, 100%, 50.0%, 0.75)',
  'hsla(280, 65.0%, 99.4%, 0)',
  'hsla(280, 65.0%, 99.4%, 0.25)',
  'hsla(280, 65.0%, 99.4%, 0.5)',
  'hsla(280, 65.0%, 99.4%, 0.75)',
  'hsla(272, 51.0%, 54.0%, 0)',
  'hsla(272, 51.0%, 54.0%, 0.25)',
  'hsla(272, 51.0%, 54.0%, 0.5)',
  'hsla(272, 51.0%, 54.0%, 0.75)',
  'hsla(322, 100%, 99.4%, 0)',
  'hsla(322, 100%, 99.4%, 0.25)',
  'hsla(322, 100%, 99.4%, 0.5)',
  'hsla(322, 100%, 99.4%, 0.75)',
  'hsla(322, 65.0%, 54.5%, 0)',
  'hsla(322, 65.0%, 54.5%, 0.25)',
  'hsla(322, 65.0%, 54.5%, 0.5)',
  'hsla(322, 65.0%, 54.5%, 0.75)',
  'hsla(359, 100%, 99.4%, 0)',
  'hsla(359, 100%, 99.4%, 0.25)',
  'hsla(359, 100%, 99.4%, 0.5)',
  'hsla(359, 100%, 99.4%, 0.75)',
  'hsla(358, 75.0%, 59.0%, 0)',
  'hsla(358, 75.0%, 59.0%, 0.25)',
  'hsla(358, 75.0%, 59.0%, 0.5)',
  'hsla(358, 75.0%, 59.0%, 0.75)',
  'hsla(0, 0%, 99.0%, 0)',
  'hsla(0, 0%, 99.0%, 0.25)',
  'hsla(0, 0%, 99.0%, 0.5)',
  'hsla(0, 0%, 99.0%, 0.75)',
  'hsla(0, 0%, 56.1%, 0)',
  'hsla(0, 0%, 56.1%, 0.25)',
  'hsla(0, 0%, 56.1%, 0.5)',
  'hsla(0, 0%, 56.1%, 0.75)',
  'hsla(136, 50.0%, 98.9%, 0)',
  'hsla(136, 50.0%, 98.9%, 0.25)',
  'hsla(136, 50.0%, 98.9%, 0.5)',
  'hsla(136, 50.0%, 98.9%, 0.75)',
  'hsla(151, 55.0%, 41.5%, 0)',
  'hsla(151, 55.0%, 41.5%, 0.25)',
  'hsla(151, 55.0%, 41.5%, 0.5)',
  'hsla(151, 55.0%, 41.5%, 0.75)',
  'hsla(30, 70.0%, 7.2%, 0)',
  'hsla(30, 70.0%, 7.2%, 0.25)',
  'hsla(30, 70.0%, 7.2%, 0.5)',
  'hsla(30, 70.0%, 7.2%, 0.75)',
  'hsla(45, 100%, 5.5%, 0)',
  'hsla(45, 100%, 5.5%, 0.25)',
  'hsla(45, 100%, 5.5%, 0.5)',
  'hsla(45, 100%, 5.5%, 0.75)',
  'hsla(168, 48.0%, 6.5%, 0)',
  'hsla(168, 48.0%, 6.5%, 0.25)',
  'hsla(168, 48.0%, 6.5%, 0.5)',
  'hsla(168, 48.0%, 6.5%, 0.75)',
  'hsla(212, 35.0%, 9.2%, 0)',
  'hsla(212, 35.0%, 9.2%, 0.25)',
  'hsla(212, 35.0%, 9.2%, 0.5)',
  'hsla(212, 35.0%, 9.2%, 0.75)',
  'hsla(284, 20.0%, 9.6%, 0)',
  'hsla(284, 20.0%, 9.6%, 0.25)',
  'hsla(284, 20.0%, 9.6%, 0.5)',
  'hsla(284, 20.0%, 9.6%, 0.75)',
  'hsla(318, 25.0%, 9.6%, 0)',
  'hsla(318, 25.0%, 9.6%, 0.25)',
  'hsla(318, 25.0%, 9.6%, 0.5)',
  'hsla(318, 25.0%, 9.6%, 0.75)',
  'hsla(353, 23.0%, 9.8%, 0)',
  'hsla(353, 23.0%, 9.8%, 0.25)',
  'hsla(353, 23.0%, 9.8%, 0.5)',
  'hsla(353, 23.0%, 9.8%, 0.75)',
  'hsla(0, 0%, 8.5%, 0)',
  'hsla(0, 0%, 8.5%, 0.25)',
  'hsla(0, 0%, 8.5%, 0.5)',
  'hsla(0, 0%, 8.5%, 0.75)',
  'hsla(0, 0%, 43.9%, 0)',
  'hsla(0, 0%, 43.9%, 0.25)',
  'hsla(0, 0%, 43.9%, 0.5)',
  'hsla(0, 0%, 43.9%, 0.75)',
  'hsla(146, 30.0%, 7.4%, 0)',
  'hsla(146, 30.0%, 7.4%, 0.25)',
  'hsla(146, 30.0%, 7.4%, 0.5)',
  'hsla(146, 30.0%, 7.4%, 0.75)',
  'rgba(0,0,0,0.5)',
  'rgba(0,0,0,0.8)',
]

const ks = [
'accentBackground',
'accentColor',
'background0',
'background025',
'background05',
'background075',
'color1',
'color2',
'color3',
'color4',
'color5',
'color6',
'color7',
'color8',
'color9',
'color10',
'color11',
'color12',
'color0',
'color025',
'color05',
'color075',
'background',
'backgroundHover',
'backgroundPress',
'backgroundFocus',
'borderColor',
'borderColorHover',
'borderColorPress',
'borderColorFocus',
'color',
'colorHover',
'colorPress',
'colorFocus',
'colorTransparent',
'placeholderColor',
'outlineColor',
'blue1',
'blue2',
'blue3',
'blue4',
'blue5',
'blue6',
'blue7',
'blue8',
'blue9',
'blue10',
'blue11',
'blue12',
'gray1',
'gray2',
'gray3',
'gray4',
'gray5',
'gray6',
'gray7',
'gray8',
'gray9',
'gray10',
'gray11',
'gray12',
'green1',
'green2',
'green3',
'green4',
'green5',
'green6',
'green7',
'green8',
'green9',
'green10',
'green11',
'green12',
'orange1',
'orange2',
'orange3',
'orange4',
'orange5',
'orange6',
'orange7',
'orange8',
'orange9',
'orange10',
'orange11',
'orange12',
'pink1',
'pink2',
'pink3',
'pink4',
'pink5',
'pink6',
'pink7',
'pink8',
'pink9',
'pink10',
'pink11',
'pink12',
'purple1',
'purple2',
'purple3',
'purple4',
'purple5',
'purple6',
'purple7',
'purple8',
'purple9',
'purple10',
'purple11',
'purple12',
'red1',
'red2',
'red3',
'red4',
'red5',
'red6',
'red7',
'red8',
'red9',
'red10',
'red11',
'red12',
'teal1',
'teal2',
'teal3',
'teal4',
'teal5',
'teal6',
'teal7',
'teal8',
'teal9',
'teal10',
'teal11',
'teal12',
'yellow1',
'yellow2',
'yellow3',
'yellow4',
'yellow5',
'yellow6',
'yellow7',
'yellow8',
'yellow9',
'yellow10',
'yellow11',
'yellow12',
'shadowColor',
'shadowColorHover',
'shadowColorPress',
'shadowColorFocus']


const n1 = t([[0, 0],[1, 1],[2, 2],[3, 3],[4, 4],[5, 5],[6, 6],[7, 7],[8, 8],[9, 9],[10, 10],[11, 11],[12, 12],[13, 13],[14, 14],[15, 15],[16, 16],[17, 17],[18, 18],[19, 19],[20, 20],[21, 21],[22, 6],[23, 5],[24, 7],[25, 7],[26, 9],[27, 8],[28, 10],[29, 9],[30, 17],[31, 16],[32, 17],[33, 16],[34, 18],[35, 14],[36, 19],[37, 22],[38, 23],[39, 24],[40, 0],[41, 25],[42, 26],[43, 27],[44, 28],[45, 29],[46, 30],[47, 31],[48, 32],[49, 33],[50, 34],[51, 35],[52, 36],[53, 37],[54, 38],[55, 39],[56, 40],[57, 14],[58, 41],[59, 42],[60, 17],[61, 43],[62, 44],[63, 45],[64, 46],[65, 47],[66, 48],[67, 49],[68, 50],[69, 51],[70, 52],[71, 53],[72, 54],[73, 55],[74, 56],[75, 57],[76, 58],[77, 59],[78, 60],[79, 61],[80, 62],[81, 63],[82, 64],[83, 65],[84, 66],[85, 67],[86, 68],[87, 69],[88, 70],[89, 71],[90, 72],[91, 73],[92, 74],[93, 75],[94, 76],[95, 77],[96, 78],[97, 79],[98, 80],[99, 81],[100, 82],[101, 83],[102, 84],[103, 85],[104, 86],[105, 87],[106, 88],[107, 89],[108, 90],[109, 91],[110, 92],[111, 93],[112, 94],[113, 95],[114, 96],[115, 97],[116, 98],[117, 99],[118, 100],[119, 101],[120, 102],[121, 103],[122, 104],[123, 105],[124, 106],[125, 107],[126, 108],[127, 109],[128, 110],[129, 111],[130, 112],[131, 113],[132, 114],[133, 115],[134, 116],[135, 117],[136, 118],[137, 119],[138, 120],[139, 121],[140, 122],[141, 123],[142, 124],[143, 125],[144, 126],[145, 127],[146, 127],[147, 128],[148, 128]])

export const light = n1
const n2 = t([[0, 1],[1, 0],[2, 18],[3, 19],[4, 20],[5, 21],[6, 129],[7, 130],[8, 131],[9, 132],[10, 133],[11, 134],[12, 135],[13, 136],[14, 137],[15, 138],[16, 139],[17, 6],[18, 2],[19, 3],[20, 4],[21, 5],[22, 129],[23, 130],[24, 21],[25, 21],[26, 132],[27, 133],[28, 131],[29, 132],[30, 6],[31, 139],[32, 6],[33, 139],[34, 2],[35, 137],[36, 3],[37, 140],[38, 141],[39, 142],[40, 1],[41, 143],[42, 144],[43, 145],[44, 146],[45, 29],[46, 147],[47, 148],[48, 149],[49, 150],[50, 151],[51, 152],[52, 153],[53, 154],[54, 155],[55, 156],[56, 157],[57, 158],[58, 159],[59, 160],[60, 36],[61, 161],[62, 162],[63, 163],[64, 164],[65, 165],[66, 166],[67, 167],[68, 168],[69, 51],[70, 169],[71, 170],[72, 171],[73, 172],[74, 173],[75, 174],[76, 175],[77, 176],[78, 177],[79, 178],[80, 179],[81, 63],[82, 180],[83, 181],[84, 182],[85, 183],[86, 184],[87, 185],[88, 186],[89, 187],[90, 188],[91, 189],[92, 190],[93, 75],[94, 191],[95, 192],[96, 193],[97, 194],[98, 195],[99, 196],[100, 197],[101, 198],[102, 199],[103, 200],[104, 201],[105, 87],[106, 202],[107, 203],[108, 204],[109, 205],[110, 206],[111, 207],[112, 208],[113, 209],[114, 210],[115, 211],[116, 212],[117, 99],[118, 213],[119, 214],[120, 215],[121, 103],[122, 104],[123, 105],[124, 106],[125, 107],[126, 108],[127, 109],[128, 110],[129, 111],[130, 112],[131, 113],[132, 114],[133, 216],[134, 217],[135, 218],[136, 219],[137, 220],[138, 221],[139, 222],[140, 223],[141, 123],[142, 224],[143, 225],[144, 226],[145, 227],[146, 227],[147, 228],[148, 228]])

export const dark = n2
const n3 = t([[0, 67],[1, 78],[2, 229],[3, 230],[4, 231],[5, 232],[6, 55],[7, 56],[8, 57],[9, 58],[10, 59],[11, 60],[12, 61],[13, 62],[14, 63],[15, 64],[16, 65],[17, 66],[18, 233],[19, 234],[20, 235],[21, 236],[22, 55],[23, 232],[24, 56],[25, 56],[26, 58],[27, 57],[28, 59],[29, 58],[30, 66],[31, 65],[32, 66],[33, 65],[34, 233],[35, 63],[36, 234]])

export const light_orange = n3
const n4 = t([[0, 22],[1, 32],[2, 237],[3, 238],[4, 239],[5, 240],[6, 115],[7, 116],[8, 117],[9, 118],[10, 119],[11, 120],[12, 121],[13, 122],[14, 123],[15, 124],[16, 125],[17, 126],[18, 241],[19, 242],[20, 243],[21, 244],[22, 115],[23, 240],[24, 116],[25, 116],[26, 118],[27, 117],[28, 119],[29, 118],[30, 126],[31, 125],[32, 126],[33, 125],[34, 241],[35, 123],[36, 242]])

export const light_yellow = n4
const n5 = t([[0, 115],[1, 126],[2, 245],[3, 246],[4, 247],[5, 248],[6, 249],[7, 250],[8, 251],[9, 252],[10, 253],[11, 254],[12, 255],[13, 256],[14, 111],[15, 257],[16, 258],[17, 259],[18, 260],[19, 261],[20, 262],[21, 263],[22, 249],[23, 248],[24, 250],[25, 250],[26, 252],[27, 251],[28, 253],[29, 252],[30, 259],[31, 258],[32, 259],[33, 258],[34, 260],[35, 111],[36, 261]])

export const light_teal = n5
const n6 = t([[0, 33],[1, 17],[2, 264],[3, 265],[4, 266],[5, 267],[6, 22],[7, 23],[8, 24],[9, 0],[10, 25],[11, 26],[12, 27],[13, 28],[14, 29],[15, 30],[16, 31],[17, 32],[18, 268],[19, 269],[20, 270],[21, 271],[22, 22],[23, 267],[24, 23],[25, 23],[26, 0],[27, 24],[28, 25],[29, 0],[30, 32],[31, 31],[32, 32],[33, 31],[34, 268],[35, 29],[36, 269]])

export const light_blue = n6
const n7 = t([[0, 91],[1, 102],[2, 272],[3, 273],[4, 274],[5, 275],[6, 79],[7, 80],[8, 81],[9, 82],[10, 83],[11, 84],[12, 85],[13, 86],[14, 87],[15, 88],[16, 89],[17, 90],[18, 276],[19, 277],[20, 278],[21, 279],[22, 79],[23, 275],[24, 80],[25, 80],[26, 82],[27, 81],[28, 83],[29, 82],[30, 90],[31, 89],[32, 90],[33, 89],[34, 276],[35, 87],[36, 277]])

export const light_purple = n7
const n8 = t([[0, 79],[1, 90],[2, 280],[3, 281],[4, 282],[5, 283],[6, 67],[7, 68],[8, 69],[9, 70],[10, 71],[11, 72],[12, 73],[13, 74],[14, 75],[15, 76],[16, 77],[17, 78],[18, 284],[19, 285],[20, 286],[21, 287],[22, 67],[23, 283],[24, 68],[25, 68],[26, 70],[27, 69],[28, 71],[29, 70],[30, 78],[31, 77],[32, 78],[33, 77],[34, 284],[35, 75],[36, 285]])

export const light_pink = n8
const n9 = t([[0, 249],[1, 259],[2, 288],[3, 289],[4, 290],[5, 291],[6, 91],[7, 92],[8, 93],[9, 94],[10, 95],[11, 96],[12, 97],[13, 98],[14, 99],[15, 100],[16, 101],[17, 102],[18, 292],[19, 293],[20, 294],[21, 295],[22, 91],[23, 291],[24, 92],[25, 92],[26, 94],[27, 93],[28, 95],[29, 94],[30, 102],[31, 101],[32, 102],[33, 101],[34, 292],[35, 99],[36, 293]])

export const light_red = n9
const n10 = t([[0, 43],[1, 54],[2, 296],[3, 297],[4, 298],[5, 299],[6, 33],[7, 34],[8, 35],[9, 36],[10, 37],[11, 38],[12, 39],[13, 40],[14, 14],[15, 41],[16, 42],[17, 17],[18, 300],[19, 301],[20, 302],[21, 303],[22, 33],[23, 299],[24, 34],[25, 34],[26, 36],[27, 35],[28, 37],[29, 36],[30, 17],[31, 42],[32, 17],[33, 42],[34, 300],[35, 14],[36, 301]])

export const light_gray = n10
const n11 = t([[0, 55],[1, 66],[2, 304],[3, 305],[4, 306],[5, 307],[6, 43],[7, 44],[8, 45],[9, 46],[10, 47],[11, 48],[12, 49],[13, 50],[14, 51],[15, 52],[16, 53],[17, 54],[18, 308],[19, 309],[20, 310],[21, 311],[22, 43],[23, 307],[24, 44],[25, 44],[26, 46],[27, 45],[28, 47],[29, 46],[30, 54],[31, 53],[32, 54],[33, 53],[34, 308],[35, 51],[36, 309]])

export const light_green = n11
const n12 = t([[0, 67],[1, 78],[2, 312],[3, 313],[4, 314],[5, 315],[6, 172],[7, 173],[8, 174],[9, 175],[10, 176],[11, 177],[12, 178],[13, 179],[14, 63],[15, 180],[16, 181],[17, 182],[18, 233],[19, 234],[20, 235],[21, 236],[22, 172],[23, 173],[24, 315],[25, 315],[26, 175],[27, 176],[28, 174],[29, 175],[30, 182],[31, 181],[32, 182],[33, 181],[34, 233],[35, 63],[36, 234]])

export const dark_orange = n12
const n13 = t([[0, 22],[1, 32],[2, 316],[3, 317],[4, 318],[5, 319],[6, 216],[7, 217],[8, 218],[9, 219],[10, 220],[11, 221],[12, 222],[13, 223],[14, 123],[15, 224],[16, 225],[17, 226],[18, 241],[19, 242],[20, 243],[21, 244],[22, 216],[23, 217],[24, 319],[25, 319],[26, 219],[27, 220],[28, 218],[29, 219],[30, 226],[31, 225],[32, 226],[33, 225],[34, 241],[35, 123],[36, 242]])

export const dark_yellow = n13
const n14 = t([[0, 115],[1, 126],[2, 320],[3, 321],[4, 322],[5, 323],[6, 103],[7, 104],[8, 105],[9, 106],[10, 107],[11, 108],[12, 109],[13, 110],[14, 111],[15, 112],[16, 113],[17, 114],[18, 260],[19, 261],[20, 262],[21, 263],[22, 103],[23, 104],[24, 323],[25, 323],[26, 106],[27, 107],[28, 105],[29, 106],[30, 114],[31, 113],[32, 114],[33, 113],[34, 260],[35, 111],[36, 261]])

export const dark_teal = n14
const n15 = t([[0, 33],[1, 17],[2, 324],[3, 325],[4, 326],[5, 327],[6, 140],[7, 141],[8, 142],[9, 1],[10, 143],[11, 144],[12, 145],[13, 146],[14, 29],[15, 147],[16, 148],[17, 149],[18, 268],[19, 269],[20, 270],[21, 271],[22, 140],[23, 141],[24, 327],[25, 327],[26, 1],[27, 143],[28, 142],[29, 1],[30, 149],[31, 148],[32, 149],[33, 148],[34, 268],[35, 29],[36, 269]])

export const dark_blue = n15
const n16 = t([[0, 91],[1, 102],[2, 328],[3, 329],[4, 330],[5, 331],[6, 194],[7, 195],[8, 196],[9, 197],[10, 198],[11, 199],[12, 200],[13, 201],[14, 87],[15, 202],[16, 203],[17, 204],[18, 276],[19, 277],[20, 278],[21, 279],[22, 194],[23, 195],[24, 331],[25, 331],[26, 197],[27, 198],[28, 196],[29, 197],[30, 204],[31, 203],[32, 204],[33, 203],[34, 276],[35, 87],[36, 277]])

export const dark_purple = n16
const n17 = t([[0, 79],[1, 90],[2, 332],[3, 333],[4, 334],[5, 335],[6, 183],[7, 184],[8, 185],[9, 186],[10, 187],[11, 188],[12, 189],[13, 190],[14, 75],[15, 191],[16, 192],[17, 193],[18, 284],[19, 285],[20, 286],[21, 287],[22, 183],[23, 184],[24, 335],[25, 335],[26, 186],[27, 187],[28, 185],[29, 186],[30, 193],[31, 192],[32, 193],[33, 192],[34, 284],[35, 75],[36, 285]])

export const dark_pink = n17
const n18 = t([[0, 249],[1, 259],[2, 336],[3, 337],[4, 338],[5, 339],[6, 205],[7, 206],[8, 207],[9, 208],[10, 209],[11, 210],[12, 211],[13, 212],[14, 99],[15, 213],[16, 214],[17, 215],[18, 292],[19, 293],[20, 294],[21, 295],[22, 205],[23, 206],[24, 339],[25, 339],[26, 208],[27, 209],[28, 207],[29, 208],[30, 215],[31, 214],[32, 215],[33, 214],[34, 292],[35, 99],[36, 293]])

export const dark_red = n18
const n19 = t([[0, 43],[1, 54],[2, 340],[3, 341],[4, 342],[5, 343],[6, 150],[7, 151],[8, 152],[9, 153],[10, 154],[11, 155],[12, 156],[13, 157],[14, 158],[15, 159],[16, 160],[17, 36],[18, 344],[19, 345],[20, 346],[21, 347],[22, 150],[23, 151],[24, 343],[25, 343],[26, 153],[27, 154],[28, 152],[29, 153],[30, 36],[31, 160],[32, 36],[33, 160],[34, 344],[35, 158],[36, 345]])

export const dark_gray = n19
const n20 = t([[0, 55],[1, 66],[2, 348],[3, 349],[4, 350],[5, 351],[6, 161],[7, 162],[8, 163],[9, 164],[10, 165],[11, 166],[12, 167],[13, 168],[14, 51],[15, 169],[16, 170],[17, 171],[18, 308],[19, 309],[20, 310],[21, 311],[22, 161],[23, 162],[24, 351],[25, 351],[26, 164],[27, 165],[28, 163],[29, 164],[30, 171],[31, 170],[32, 171],[33, 170],[34, 308],[35, 51],[36, 309]])

export const dark_green = n20
const n21 = t([[30, 16],[31, 15],[32, 16],[33, 15]])

export const light_alt1 = n21
const n22 = t([[30, 15],[31, 14],[32, 15],[33, 14]])

export const light_alt2 = n22
const n23 = t([[22, 9],[23, 8],[24, 10],[25, 10],[26, 12],[27, 11],[29, 12],[28, 13]])

export const light_active = n23
export const light_surface3 = n23
export const light_Button = n23
export const light_SliderTrackActive = n23
export const light_active_SliderTrackActive = n23
const n24 = t([[22, 7],[23, 6],[24, 8],[25, 8],[26, 10],[27, 9],[29, 10],[28, 11]])

export const light_surface1 = n24
export const light_ListItem = n24
export const light_SelectTrigger = n24
export const light_Card = n24
export const light_Progress = n24
export const light_TooltipArrow = n24
export const light_SliderTrack = n24
export const light_Input = n24
export const light_TextArea = n24
export const light_active_ListItem = n24
export const light_active_Progress = n24
export const light_active_TooltipArrow = n24
export const light_active_SliderTrack = n24
const n25 = t([[22, 8],[23, 7],[24, 9],[25, 9],[26, 11],[27, 10],[29, 11],[28, 12]])

export const light_surface2 = n25
export const light_Checkbox = n25
export const light_Switch = n25
export const light_TooltipContent = n25
export const light_RadioGroupItem = n25
const n26 = t([[22, 11],[23, 11],[24, 12],[25, 12],[26, 11],[27, 11],[29, 12],[28, 12]])

export const light_surface4 = n26
export const light_active_SelectTrigger = n26
export const light_active_Card = n26
export const light_active_Button = n26
export const light_active_Checkbox = n26
export const light_active_Switch = n26
export const light_active_TooltipContent = n26
export const light_active_RadioGroupItem = n26
export const light_active_Input = n26
export const light_active_TextArea = n26
const n27 = t([[30, 139],[31, 138],[32, 139],[33, 138]])

export const dark_alt1 = n27
const n28 = t([[30, 138],[31, 137],[32, 138],[33, 137]])

export const dark_alt2 = n28
const n29 = t([[22, 132],[23, 133],[24, 131],[25, 131],[26, 135],[27, 136],[29, 135],[28, 134]])

export const dark_active = n29
export const dark_surface3 = n29
export const dark_Button = n29
export const dark_SliderTrackActive = n29
export const dark_active_SliderTrackActive = n29
const n30 = t([[22, 130],[23, 131],[24, 129],[25, 129],[26, 133],[27, 134],[29, 133],[28, 132]])

export const dark_surface1 = n30
export const dark_ListItem = n30
export const dark_SelectTrigger = n30
export const dark_Card = n30
export const dark_Progress = n30
export const dark_TooltipArrow = n30
export const dark_SliderTrack = n30
export const dark_Input = n30
export const dark_TextArea = n30
export const dark_active_ListItem = n30
export const dark_active_Progress = n30
export const dark_active_TooltipArrow = n30
export const dark_active_SliderTrack = n30
const n31 = t([[22, 131],[23, 132],[24, 130],[25, 130],[26, 134],[27, 135],[29, 134],[28, 133]])

export const dark_surface2 = n31
export const dark_Checkbox = n31
export const dark_Switch = n31
export const dark_TooltipContent = n31
export const dark_RadioGroupItem = n31
const n32 = t([[22, 134],[23, 134],[24, 133],[25, 133],[26, 134],[27, 134],[29, 133],[28, 133]])

export const dark_surface4 = n32
export const dark_active_SelectTrigger = n32
export const dark_active_Card = n32
export const dark_active_Button = n32
export const dark_active_Checkbox = n32
export const dark_active_Switch = n32
export const dark_active_TooltipContent = n32
export const dark_active_RadioGroupItem = n32
export const dark_active_Input = n32
export const dark_active_TextArea = n32
const n33 = t([[30, 65],[31, 64],[32, 65],[33, 64]])

export const light_orange_alt1 = n33
const n34 = t([[30, 64],[31, 63],[32, 64],[33, 63]])

export const light_orange_alt2 = n34
const n35 = t([[22, 58],[23, 57],[24, 59],[25, 59],[26, 61],[27, 60],[29, 61],[28, 62]])

export const light_orange_active = n35
export const light_orange_surface3 = n35
export const light_orange_Button = n35
export const light_orange_SliderTrackActive = n35
export const light_orange_active_SliderTrackActive = n35
const n36 = t([[22, 56],[23, 55],[24, 57],[25, 57],[26, 59],[27, 58],[29, 59],[28, 60]])

export const light_orange_surface1 = n36
export const light_orange_ListItem = n36
export const light_orange_SelectTrigger = n36
export const light_orange_Card = n36
export const light_orange_Progress = n36
export const light_orange_TooltipArrow = n36
export const light_orange_SliderTrack = n36
export const light_orange_Input = n36
export const light_orange_TextArea = n36
export const light_orange_active_ListItem = n36
export const light_orange_active_Progress = n36
export const light_orange_active_TooltipArrow = n36
export const light_orange_active_SliderTrack = n36
const n37 = t([[22, 57],[23, 56],[24, 58],[25, 58],[26, 60],[27, 59],[29, 60],[28, 61]])

export const light_orange_surface2 = n37
export const light_orange_Checkbox = n37
export const light_orange_Switch = n37
export const light_orange_TooltipContent = n37
export const light_orange_RadioGroupItem = n37
const n38 = t([[22, 60],[23, 60],[24, 61],[25, 61],[26, 60],[27, 60],[29, 61],[28, 61]])

export const light_orange_surface4 = n38
export const light_orange_active_SelectTrigger = n38
export const light_orange_active_Card = n38
export const light_orange_active_Button = n38
export const light_orange_active_Checkbox = n38
export const light_orange_active_Switch = n38
export const light_orange_active_TooltipContent = n38
export const light_orange_active_RadioGroupItem = n38
export const light_orange_active_Input = n38
export const light_orange_active_TextArea = n38
const n39 = t([[30, 125],[31, 124],[32, 125],[33, 124]])

export const light_yellow_alt1 = n39
const n40 = t([[30, 124],[31, 123],[32, 124],[33, 123]])

export const light_yellow_alt2 = n40
const n41 = t([[22, 118],[23, 117],[24, 119],[25, 119],[26, 121],[27, 120],[29, 121],[28, 122]])

export const light_yellow_active = n41
export const light_yellow_surface3 = n41
export const light_yellow_Button = n41
export const light_yellow_SliderTrackActive = n41
export const light_yellow_active_SliderTrackActive = n41
const n42 = t([[22, 116],[23, 115],[24, 117],[25, 117],[26, 119],[27, 118],[29, 119],[28, 120]])

export const light_yellow_surface1 = n42
export const light_yellow_ListItem = n42
export const light_yellow_SelectTrigger = n42
export const light_yellow_Card = n42
export const light_yellow_Progress = n42
export const light_yellow_TooltipArrow = n42
export const light_yellow_SliderTrack = n42
export const light_yellow_Input = n42
export const light_yellow_TextArea = n42
export const light_yellow_active_ListItem = n42
export const light_yellow_active_Progress = n42
export const light_yellow_active_TooltipArrow = n42
export const light_yellow_active_SliderTrack = n42
const n43 = t([[22, 117],[23, 116],[24, 118],[25, 118],[26, 120],[27, 119],[29, 120],[28, 121]])

export const light_yellow_surface2 = n43
export const light_yellow_Checkbox = n43
export const light_yellow_Switch = n43
export const light_yellow_TooltipContent = n43
export const light_yellow_RadioGroupItem = n43
const n44 = t([[22, 120],[23, 120],[24, 121],[25, 121],[26, 120],[27, 120],[29, 121],[28, 121]])

export const light_yellow_surface4 = n44
export const light_yellow_active_SelectTrigger = n44
export const light_yellow_active_Card = n44
export const light_yellow_active_Button = n44
export const light_yellow_active_Checkbox = n44
export const light_yellow_active_Switch = n44
export const light_yellow_active_TooltipContent = n44
export const light_yellow_active_RadioGroupItem = n44
export const light_yellow_active_Input = n44
export const light_yellow_active_TextArea = n44
const n45 = t([[30, 258],[31, 257],[32, 258],[33, 257]])

export const light_teal_alt1 = n45
const n46 = t([[30, 257],[31, 111],[32, 257],[33, 111]])

export const light_teal_alt2 = n46
const n47 = t([[22, 252],[23, 251],[24, 253],[25, 253],[26, 255],[27, 254],[29, 255],[28, 256]])

export const light_teal_active = n47
export const light_teal_surface3 = n47
export const light_teal_Button = n47
export const light_teal_SliderTrackActive = n47
export const light_teal_active_SliderTrackActive = n47
const n48 = t([[22, 250],[23, 249],[24, 251],[25, 251],[26, 253],[27, 252],[29, 253],[28, 254]])

export const light_teal_surface1 = n48
export const light_teal_ListItem = n48
export const light_teal_SelectTrigger = n48
export const light_teal_Card = n48
export const light_teal_Progress = n48
export const light_teal_TooltipArrow = n48
export const light_teal_SliderTrack = n48
export const light_teal_Input = n48
export const light_teal_TextArea = n48
export const light_teal_active_ListItem = n48
export const light_teal_active_Progress = n48
export const light_teal_active_TooltipArrow = n48
export const light_teal_active_SliderTrack = n48
const n49 = t([[22, 251],[23, 250],[24, 252],[25, 252],[26, 254],[27, 253],[29, 254],[28, 255]])

export const light_teal_surface2 = n49
export const light_teal_Checkbox = n49
export const light_teal_Switch = n49
export const light_teal_TooltipContent = n49
export const light_teal_RadioGroupItem = n49
const n50 = t([[22, 254],[23, 254],[24, 255],[25, 255],[26, 254],[27, 254],[29, 255],[28, 255]])

export const light_teal_surface4 = n50
export const light_teal_active_SelectTrigger = n50
export const light_teal_active_Card = n50
export const light_teal_active_Button = n50
export const light_teal_active_Checkbox = n50
export const light_teal_active_Switch = n50
export const light_teal_active_TooltipContent = n50
export const light_teal_active_RadioGroupItem = n50
export const light_teal_active_Input = n50
export const light_teal_active_TextArea = n50
const n51 = t([[30, 31],[31, 30],[32, 31],[33, 30]])

export const light_blue_alt1 = n51
const n52 = t([[30, 30],[31, 29],[32, 30],[33, 29]])

export const light_blue_alt2 = n52
const n53 = t([[22, 0],[23, 24],[24, 25],[25, 25],[26, 27],[27, 26],[29, 27],[28, 28]])

export const light_blue_active = n53
export const light_blue_surface3 = n53
export const light_blue_Button = n53
export const light_blue_SliderTrackActive = n53
export const light_blue_active_SliderTrackActive = n53
const n54 = t([[22, 23],[23, 22],[24, 24],[25, 24],[26, 25],[27, 0],[29, 25],[28, 26]])

export const light_blue_surface1 = n54
export const light_blue_ListItem = n54
export const light_blue_SelectTrigger = n54
export const light_blue_Card = n54
export const light_blue_Progress = n54
export const light_blue_TooltipArrow = n54
export const light_blue_SliderTrack = n54
export const light_blue_Input = n54
export const light_blue_TextArea = n54
export const light_blue_active_ListItem = n54
export const light_blue_active_Progress = n54
export const light_blue_active_TooltipArrow = n54
export const light_blue_active_SliderTrack = n54
const n55 = t([[22, 24],[23, 23],[24, 0],[25, 0],[26, 26],[27, 25],[29, 26],[28, 27]])

export const light_blue_surface2 = n55
export const light_blue_Checkbox = n55
export const light_blue_Switch = n55
export const light_blue_TooltipContent = n55
export const light_blue_RadioGroupItem = n55
const n56 = t([[22, 26],[23, 26],[24, 27],[25, 27],[26, 26],[27, 26],[29, 27],[28, 27]])

export const light_blue_surface4 = n56
export const light_blue_active_SelectTrigger = n56
export const light_blue_active_Card = n56
export const light_blue_active_Button = n56
export const light_blue_active_Checkbox = n56
export const light_blue_active_Switch = n56
export const light_blue_active_TooltipContent = n56
export const light_blue_active_RadioGroupItem = n56
export const light_blue_active_Input = n56
export const light_blue_active_TextArea = n56
const n57 = t([[30, 89],[31, 88],[32, 89],[33, 88]])

export const light_purple_alt1 = n57
const n58 = t([[30, 88],[31, 87],[32, 88],[33, 87]])

export const light_purple_alt2 = n58
const n59 = t([[22, 82],[23, 81],[24, 83],[25, 83],[26, 85],[27, 84],[29, 85],[28, 86]])

export const light_purple_active = n59
export const light_purple_surface3 = n59
export const light_purple_Button = n59
export const light_purple_SliderTrackActive = n59
export const light_purple_active_SliderTrackActive = n59
const n60 = t([[22, 80],[23, 79],[24, 81],[25, 81],[26, 83],[27, 82],[29, 83],[28, 84]])

export const light_purple_surface1 = n60
export const light_purple_ListItem = n60
export const light_purple_SelectTrigger = n60
export const light_purple_Card = n60
export const light_purple_Progress = n60
export const light_purple_TooltipArrow = n60
export const light_purple_SliderTrack = n60
export const light_purple_Input = n60
export const light_purple_TextArea = n60
export const light_purple_active_ListItem = n60
export const light_purple_active_Progress = n60
export const light_purple_active_TooltipArrow = n60
export const light_purple_active_SliderTrack = n60
const n61 = t([[22, 81],[23, 80],[24, 82],[25, 82],[26, 84],[27, 83],[29, 84],[28, 85]])

export const light_purple_surface2 = n61
export const light_purple_Checkbox = n61
export const light_purple_Switch = n61
export const light_purple_TooltipContent = n61
export const light_purple_RadioGroupItem = n61
const n62 = t([[22, 84],[23, 84],[24, 85],[25, 85],[26, 84],[27, 84],[29, 85],[28, 85]])

export const light_purple_surface4 = n62
export const light_purple_active_SelectTrigger = n62
export const light_purple_active_Card = n62
export const light_purple_active_Button = n62
export const light_purple_active_Checkbox = n62
export const light_purple_active_Switch = n62
export const light_purple_active_TooltipContent = n62
export const light_purple_active_RadioGroupItem = n62
export const light_purple_active_Input = n62
export const light_purple_active_TextArea = n62
const n63 = t([[30, 77],[31, 76],[32, 77],[33, 76]])

export const light_pink_alt1 = n63
const n64 = t([[30, 76],[31, 75],[32, 76],[33, 75]])

export const light_pink_alt2 = n64
const n65 = t([[22, 70],[23, 69],[24, 71],[25, 71],[26, 73],[27, 72],[29, 73],[28, 74]])

export const light_pink_active = n65
export const light_pink_surface3 = n65
export const light_pink_Button = n65
export const light_pink_SliderTrackActive = n65
export const light_pink_active_SliderTrackActive = n65
const n66 = t([[22, 68],[23, 67],[24, 69],[25, 69],[26, 71],[27, 70],[29, 71],[28, 72]])

export const light_pink_surface1 = n66
export const light_pink_ListItem = n66
export const light_pink_SelectTrigger = n66
export const light_pink_Card = n66
export const light_pink_Progress = n66
export const light_pink_TooltipArrow = n66
export const light_pink_SliderTrack = n66
export const light_pink_Input = n66
export const light_pink_TextArea = n66
export const light_pink_active_ListItem = n66
export const light_pink_active_Progress = n66
export const light_pink_active_TooltipArrow = n66
export const light_pink_active_SliderTrack = n66
const n67 = t([[22, 69],[23, 68],[24, 70],[25, 70],[26, 72],[27, 71],[29, 72],[28, 73]])

export const light_pink_surface2 = n67
export const light_pink_Checkbox = n67
export const light_pink_Switch = n67
export const light_pink_TooltipContent = n67
export const light_pink_RadioGroupItem = n67
const n68 = t([[22, 72],[23, 72],[24, 73],[25, 73],[26, 72],[27, 72],[29, 73],[28, 73]])

export const light_pink_surface4 = n68
export const light_pink_active_SelectTrigger = n68
export const light_pink_active_Card = n68
export const light_pink_active_Button = n68
export const light_pink_active_Checkbox = n68
export const light_pink_active_Switch = n68
export const light_pink_active_TooltipContent = n68
export const light_pink_active_RadioGroupItem = n68
export const light_pink_active_Input = n68
export const light_pink_active_TextArea = n68
const n69 = t([[30, 101],[31, 100],[32, 101],[33, 100]])

export const light_red_alt1 = n69
const n70 = t([[30, 100],[31, 99],[32, 100],[33, 99]])

export const light_red_alt2 = n70
const n71 = t([[22, 94],[23, 93],[24, 95],[25, 95],[26, 97],[27, 96],[29, 97],[28, 98]])

export const light_red_active = n71
export const light_red_surface3 = n71
export const light_red_Button = n71
export const light_red_SliderTrackActive = n71
export const light_red_active_SliderTrackActive = n71
const n72 = t([[22, 92],[23, 91],[24, 93],[25, 93],[26, 95],[27, 94],[29, 95],[28, 96]])

export const light_red_surface1 = n72
export const light_red_ListItem = n72
export const light_red_SelectTrigger = n72
export const light_red_Card = n72
export const light_red_Progress = n72
export const light_red_TooltipArrow = n72
export const light_red_SliderTrack = n72
export const light_red_Input = n72
export const light_red_TextArea = n72
export const light_red_active_ListItem = n72
export const light_red_active_Progress = n72
export const light_red_active_TooltipArrow = n72
export const light_red_active_SliderTrack = n72
const n73 = t([[22, 93],[23, 92],[24, 94],[25, 94],[26, 96],[27, 95],[29, 96],[28, 97]])

export const light_red_surface2 = n73
export const light_red_Checkbox = n73
export const light_red_Switch = n73
export const light_red_TooltipContent = n73
export const light_red_RadioGroupItem = n73
const n74 = t([[22, 96],[23, 96],[24, 97],[25, 97],[26, 96],[27, 96],[29, 97],[28, 97]])

export const light_red_surface4 = n74
export const light_red_active_SelectTrigger = n74
export const light_red_active_Card = n74
export const light_red_active_Button = n74
export const light_red_active_Checkbox = n74
export const light_red_active_Switch = n74
export const light_red_active_TooltipContent = n74
export const light_red_active_RadioGroupItem = n74
export const light_red_active_Input = n74
export const light_red_active_TextArea = n74
const n75 = t([[30, 42],[31, 41],[32, 42],[33, 41]])

export const light_gray_alt1 = n75
const n76 = t([[30, 41],[31, 14],[32, 41],[33, 14]])

export const light_gray_alt2 = n76
const n77 = t([[22, 36],[23, 35],[24, 37],[25, 37],[26, 39],[27, 38],[29, 39],[28, 40]])

export const light_gray_active = n77
export const light_gray_surface3 = n77
export const light_gray_Button = n77
export const light_gray_SliderTrackActive = n77
export const light_gray_active_SliderTrackActive = n77
const n78 = t([[22, 34],[23, 33],[24, 35],[25, 35],[26, 37],[27, 36],[29, 37],[28, 38]])

export const light_gray_surface1 = n78
export const light_gray_ListItem = n78
export const light_gray_SelectTrigger = n78
export const light_gray_Card = n78
export const light_gray_Progress = n78
export const light_gray_TooltipArrow = n78
export const light_gray_SliderTrack = n78
export const light_gray_Input = n78
export const light_gray_TextArea = n78
export const light_gray_active_ListItem = n78
export const light_gray_active_Progress = n78
export const light_gray_active_TooltipArrow = n78
export const light_gray_active_SliderTrack = n78
const n79 = t([[22, 35],[23, 34],[24, 36],[25, 36],[26, 38],[27, 37],[29, 38],[28, 39]])

export const light_gray_surface2 = n79
export const light_gray_Checkbox = n79
export const light_gray_Switch = n79
export const light_gray_TooltipContent = n79
export const light_gray_RadioGroupItem = n79
const n80 = t([[22, 38],[23, 38],[24, 39],[25, 39],[26, 38],[27, 38],[29, 39],[28, 39]])

export const light_gray_surface4 = n80
export const light_gray_active_SelectTrigger = n80
export const light_gray_active_Card = n80
export const light_gray_active_Button = n80
export const light_gray_active_Checkbox = n80
export const light_gray_active_Switch = n80
export const light_gray_active_TooltipContent = n80
export const light_gray_active_RadioGroupItem = n80
export const light_gray_active_Input = n80
export const light_gray_active_TextArea = n80
const n81 = t([[30, 53],[31, 52],[32, 53],[33, 52]])

export const light_green_alt1 = n81
const n82 = t([[30, 52],[31, 51],[32, 52],[33, 51]])

export const light_green_alt2 = n82
const n83 = t([[22, 46],[23, 45],[24, 47],[25, 47],[26, 49],[27, 48],[29, 49],[28, 50]])

export const light_green_active = n83
export const light_green_surface3 = n83
export const light_green_Button = n83
export const light_green_SliderTrackActive = n83
export const light_green_active_SliderTrackActive = n83
const n84 = t([[22, 44],[23, 43],[24, 45],[25, 45],[26, 47],[27, 46],[29, 47],[28, 48]])

export const light_green_surface1 = n84
export const light_green_ListItem = n84
export const light_green_SelectTrigger = n84
export const light_green_Card = n84
export const light_green_Progress = n84
export const light_green_TooltipArrow = n84
export const light_green_SliderTrack = n84
export const light_green_Input = n84
export const light_green_TextArea = n84
export const light_green_active_ListItem = n84
export const light_green_active_Progress = n84
export const light_green_active_TooltipArrow = n84
export const light_green_active_SliderTrack = n84
const n85 = t([[22, 45],[23, 44],[24, 46],[25, 46],[26, 48],[27, 47],[29, 48],[28, 49]])

export const light_green_surface2 = n85
export const light_green_Checkbox = n85
export const light_green_Switch = n85
export const light_green_TooltipContent = n85
export const light_green_RadioGroupItem = n85
const n86 = t([[22, 48],[23, 48],[24, 49],[25, 49],[26, 48],[27, 48],[29, 49],[28, 49]])

export const light_green_surface4 = n86
export const light_green_active_SelectTrigger = n86
export const light_green_active_Card = n86
export const light_green_active_Button = n86
export const light_green_active_Checkbox = n86
export const light_green_active_Switch = n86
export const light_green_active_TooltipContent = n86
export const light_green_active_RadioGroupItem = n86
export const light_green_active_Input = n86
export const light_green_active_TextArea = n86
const n87 = t([[30, 181],[31, 180],[32, 181],[33, 180]])

export const dark_orange_alt1 = n87
const n88 = t([[30, 180],[31, 63],[32, 180],[33, 63]])

export const dark_orange_alt2 = n88
const n89 = t([[22, 175],[23, 176],[24, 174],[25, 174],[26, 178],[27, 179],[29, 178],[28, 177]])

export const dark_orange_active = n89
export const dark_orange_surface3 = n89
export const dark_orange_Button = n89
export const dark_orange_SliderTrackActive = n89
export const dark_orange_active_SliderTrackActive = n89
const n90 = t([[22, 173],[23, 174],[24, 172],[25, 172],[26, 176],[27, 177],[29, 176],[28, 175]])

export const dark_orange_surface1 = n90
export const dark_orange_ListItem = n90
export const dark_orange_SelectTrigger = n90
export const dark_orange_Card = n90
export const dark_orange_Progress = n90
export const dark_orange_TooltipArrow = n90
export const dark_orange_SliderTrack = n90
export const dark_orange_Input = n90
export const dark_orange_TextArea = n90
export const dark_orange_active_ListItem = n90
export const dark_orange_active_Progress = n90
export const dark_orange_active_TooltipArrow = n90
export const dark_orange_active_SliderTrack = n90
const n91 = t([[22, 174],[23, 175],[24, 173],[25, 173],[26, 177],[27, 178],[29, 177],[28, 176]])

export const dark_orange_surface2 = n91
export const dark_orange_Checkbox = n91
export const dark_orange_Switch = n91
export const dark_orange_TooltipContent = n91
export const dark_orange_RadioGroupItem = n91
const n92 = t([[22, 177],[23, 177],[24, 176],[25, 176],[26, 177],[27, 177],[29, 176],[28, 176]])

export const dark_orange_surface4 = n92
export const dark_orange_active_SelectTrigger = n92
export const dark_orange_active_Card = n92
export const dark_orange_active_Button = n92
export const dark_orange_active_Checkbox = n92
export const dark_orange_active_Switch = n92
export const dark_orange_active_TooltipContent = n92
export const dark_orange_active_RadioGroupItem = n92
export const dark_orange_active_Input = n92
export const dark_orange_active_TextArea = n92
const n93 = t([[30, 225],[31, 224],[32, 225],[33, 224]])

export const dark_yellow_alt1 = n93
const n94 = t([[30, 224],[31, 123],[32, 224],[33, 123]])

export const dark_yellow_alt2 = n94
const n95 = t([[22, 219],[23, 220],[24, 218],[25, 218],[26, 222],[27, 223],[29, 222],[28, 221]])

export const dark_yellow_active = n95
export const dark_yellow_surface3 = n95
export const dark_yellow_Button = n95
export const dark_yellow_SliderTrackActive = n95
export const dark_yellow_active_SliderTrackActive = n95
const n96 = t([[22, 217],[23, 218],[24, 216],[25, 216],[26, 220],[27, 221],[29, 220],[28, 219]])

export const dark_yellow_surface1 = n96
export const dark_yellow_ListItem = n96
export const dark_yellow_SelectTrigger = n96
export const dark_yellow_Card = n96
export const dark_yellow_Progress = n96
export const dark_yellow_TooltipArrow = n96
export const dark_yellow_SliderTrack = n96
export const dark_yellow_Input = n96
export const dark_yellow_TextArea = n96
export const dark_yellow_active_ListItem = n96
export const dark_yellow_active_Progress = n96
export const dark_yellow_active_TooltipArrow = n96
export const dark_yellow_active_SliderTrack = n96
const n97 = t([[22, 218],[23, 219],[24, 217],[25, 217],[26, 221],[27, 222],[29, 221],[28, 220]])

export const dark_yellow_surface2 = n97
export const dark_yellow_Checkbox = n97
export const dark_yellow_Switch = n97
export const dark_yellow_TooltipContent = n97
export const dark_yellow_RadioGroupItem = n97
const n98 = t([[22, 221],[23, 221],[24, 220],[25, 220],[26, 221],[27, 221],[29, 220],[28, 220]])

export const dark_yellow_surface4 = n98
export const dark_yellow_active_SelectTrigger = n98
export const dark_yellow_active_Card = n98
export const dark_yellow_active_Button = n98
export const dark_yellow_active_Checkbox = n98
export const dark_yellow_active_Switch = n98
export const dark_yellow_active_TooltipContent = n98
export const dark_yellow_active_RadioGroupItem = n98
export const dark_yellow_active_Input = n98
export const dark_yellow_active_TextArea = n98
const n99 = t([[30, 113],[31, 112],[32, 113],[33, 112]])

export const dark_teal_alt1 = n99
const n100 = t([[30, 112],[31, 111],[32, 112],[33, 111]])

export const dark_teal_alt2 = n100
const n101 = t([[22, 106],[23, 107],[24, 105],[25, 105],[26, 109],[27, 110],[29, 109],[28, 108]])

export const dark_teal_active = n101
export const dark_teal_surface3 = n101
export const dark_teal_Button = n101
export const dark_teal_SliderTrackActive = n101
export const dark_teal_active_SliderTrackActive = n101
const n102 = t([[22, 104],[23, 105],[24, 103],[25, 103],[26, 107],[27, 108],[29, 107],[28, 106]])

export const dark_teal_surface1 = n102
export const dark_teal_ListItem = n102
export const dark_teal_SelectTrigger = n102
export const dark_teal_Card = n102
export const dark_teal_Progress = n102
export const dark_teal_TooltipArrow = n102
export const dark_teal_SliderTrack = n102
export const dark_teal_Input = n102
export const dark_teal_TextArea = n102
export const dark_teal_active_ListItem = n102
export const dark_teal_active_Progress = n102
export const dark_teal_active_TooltipArrow = n102
export const dark_teal_active_SliderTrack = n102
const n103 = t([[22, 105],[23, 106],[24, 104],[25, 104],[26, 108],[27, 109],[29, 108],[28, 107]])

export const dark_teal_surface2 = n103
export const dark_teal_Checkbox = n103
export const dark_teal_Switch = n103
export const dark_teal_TooltipContent = n103
export const dark_teal_RadioGroupItem = n103
const n104 = t([[22, 108],[23, 108],[24, 107],[25, 107],[26, 108],[27, 108],[29, 107],[28, 107]])

export const dark_teal_surface4 = n104
export const dark_teal_active_SelectTrigger = n104
export const dark_teal_active_Card = n104
export const dark_teal_active_Button = n104
export const dark_teal_active_Checkbox = n104
export const dark_teal_active_Switch = n104
export const dark_teal_active_TooltipContent = n104
export const dark_teal_active_RadioGroupItem = n104
export const dark_teal_active_Input = n104
export const dark_teal_active_TextArea = n104
const n105 = t([[30, 148],[31, 147],[32, 148],[33, 147]])

export const dark_blue_alt1 = n105
const n106 = t([[30, 147],[31, 29],[32, 147],[33, 29]])

export const dark_blue_alt2 = n106
const n107 = t([[22, 1],[23, 143],[24, 142],[25, 142],[26, 145],[27, 146],[29, 145],[28, 144]])

export const dark_blue_active = n107
export const dark_blue_surface3 = n107
export const dark_blue_Button = n107
export const dark_blue_SliderTrackActive = n107
export const dark_blue_active_SliderTrackActive = n107
const n108 = t([[22, 141],[23, 142],[24, 140],[25, 140],[26, 143],[27, 144],[29, 143],[28, 1]])

export const dark_blue_surface1 = n108
export const dark_blue_ListItem = n108
export const dark_blue_SelectTrigger = n108
export const dark_blue_Card = n108
export const dark_blue_Progress = n108
export const dark_blue_TooltipArrow = n108
export const dark_blue_SliderTrack = n108
export const dark_blue_Input = n108
export const dark_blue_TextArea = n108
export const dark_blue_active_ListItem = n108
export const dark_blue_active_Progress = n108
export const dark_blue_active_TooltipArrow = n108
export const dark_blue_active_SliderTrack = n108
const n109 = t([[22, 142],[23, 1],[24, 141],[25, 141],[26, 144],[27, 145],[29, 144],[28, 143]])

export const dark_blue_surface2 = n109
export const dark_blue_Checkbox = n109
export const dark_blue_Switch = n109
export const dark_blue_TooltipContent = n109
export const dark_blue_RadioGroupItem = n109
const n110 = t([[22, 144],[23, 144],[24, 143],[25, 143],[26, 144],[27, 144],[29, 143],[28, 143]])

export const dark_blue_surface4 = n110
export const dark_blue_active_SelectTrigger = n110
export const dark_blue_active_Card = n110
export const dark_blue_active_Button = n110
export const dark_blue_active_Checkbox = n110
export const dark_blue_active_Switch = n110
export const dark_blue_active_TooltipContent = n110
export const dark_blue_active_RadioGroupItem = n110
export const dark_blue_active_Input = n110
export const dark_blue_active_TextArea = n110
const n111 = t([[30, 203],[31, 202],[32, 203],[33, 202]])

export const dark_purple_alt1 = n111
const n112 = t([[30, 202],[31, 87],[32, 202],[33, 87]])

export const dark_purple_alt2 = n112
const n113 = t([[22, 197],[23, 198],[24, 196],[25, 196],[26, 200],[27, 201],[29, 200],[28, 199]])

export const dark_purple_active = n113
export const dark_purple_surface3 = n113
export const dark_purple_Button = n113
export const dark_purple_SliderTrackActive = n113
export const dark_purple_active_SliderTrackActive = n113
const n114 = t([[22, 195],[23, 196],[24, 194],[25, 194],[26, 198],[27, 199],[29, 198],[28, 197]])

export const dark_purple_surface1 = n114
export const dark_purple_ListItem = n114
export const dark_purple_SelectTrigger = n114
export const dark_purple_Card = n114
export const dark_purple_Progress = n114
export const dark_purple_TooltipArrow = n114
export const dark_purple_SliderTrack = n114
export const dark_purple_Input = n114
export const dark_purple_TextArea = n114
export const dark_purple_active_ListItem = n114
export const dark_purple_active_Progress = n114
export const dark_purple_active_TooltipArrow = n114
export const dark_purple_active_SliderTrack = n114
const n115 = t([[22, 196],[23, 197],[24, 195],[25, 195],[26, 199],[27, 200],[29, 199],[28, 198]])

export const dark_purple_surface2 = n115
export const dark_purple_Checkbox = n115
export const dark_purple_Switch = n115
export const dark_purple_TooltipContent = n115
export const dark_purple_RadioGroupItem = n115
const n116 = t([[22, 199],[23, 199],[24, 198],[25, 198],[26, 199],[27, 199],[29, 198],[28, 198]])

export const dark_purple_surface4 = n116
export const dark_purple_active_SelectTrigger = n116
export const dark_purple_active_Card = n116
export const dark_purple_active_Button = n116
export const dark_purple_active_Checkbox = n116
export const dark_purple_active_Switch = n116
export const dark_purple_active_TooltipContent = n116
export const dark_purple_active_RadioGroupItem = n116
export const dark_purple_active_Input = n116
export const dark_purple_active_TextArea = n116
const n117 = t([[30, 192],[31, 191],[32, 192],[33, 191]])

export const dark_pink_alt1 = n117
const n118 = t([[30, 191],[31, 75],[32, 191],[33, 75]])

export const dark_pink_alt2 = n118
const n119 = t([[22, 186],[23, 187],[24, 185],[25, 185],[26, 189],[27, 190],[29, 189],[28, 188]])

export const dark_pink_active = n119
export const dark_pink_surface3 = n119
export const dark_pink_Button = n119
export const dark_pink_SliderTrackActive = n119
export const dark_pink_active_SliderTrackActive = n119
const n120 = t([[22, 184],[23, 185],[24, 183],[25, 183],[26, 187],[27, 188],[29, 187],[28, 186]])

export const dark_pink_surface1 = n120
export const dark_pink_ListItem = n120
export const dark_pink_SelectTrigger = n120
export const dark_pink_Card = n120
export const dark_pink_Progress = n120
export const dark_pink_TooltipArrow = n120
export const dark_pink_SliderTrack = n120
export const dark_pink_Input = n120
export const dark_pink_TextArea = n120
export const dark_pink_active_ListItem = n120
export const dark_pink_active_Progress = n120
export const dark_pink_active_TooltipArrow = n120
export const dark_pink_active_SliderTrack = n120
const n121 = t([[22, 185],[23, 186],[24, 184],[25, 184],[26, 188],[27, 189],[29, 188],[28, 187]])

export const dark_pink_surface2 = n121
export const dark_pink_Checkbox = n121
export const dark_pink_Switch = n121
export const dark_pink_TooltipContent = n121
export const dark_pink_RadioGroupItem = n121
const n122 = t([[22, 188],[23, 188],[24, 187],[25, 187],[26, 188],[27, 188],[29, 187],[28, 187]])

export const dark_pink_surface4 = n122
export const dark_pink_active_SelectTrigger = n122
export const dark_pink_active_Card = n122
export const dark_pink_active_Button = n122
export const dark_pink_active_Checkbox = n122
export const dark_pink_active_Switch = n122
export const dark_pink_active_TooltipContent = n122
export const dark_pink_active_RadioGroupItem = n122
export const dark_pink_active_Input = n122
export const dark_pink_active_TextArea = n122
const n123 = t([[30, 214],[31, 213],[32, 214],[33, 213]])

export const dark_red_alt1 = n123
const n124 = t([[30, 213],[31, 99],[32, 213],[33, 99]])

export const dark_red_alt2 = n124
const n125 = t([[22, 208],[23, 209],[24, 207],[25, 207],[26, 211],[27, 212],[29, 211],[28, 210]])

export const dark_red_active = n125
export const dark_red_surface3 = n125
export const dark_red_Button = n125
export const dark_red_SliderTrackActive = n125
export const dark_red_active_SliderTrackActive = n125
const n126 = t([[22, 206],[23, 207],[24, 205],[25, 205],[26, 209],[27, 210],[29, 209],[28, 208]])

export const dark_red_surface1 = n126
export const dark_red_ListItem = n126
export const dark_red_SelectTrigger = n126
export const dark_red_Card = n126
export const dark_red_Progress = n126
export const dark_red_TooltipArrow = n126
export const dark_red_SliderTrack = n126
export const dark_red_Input = n126
export const dark_red_TextArea = n126
export const dark_red_active_ListItem = n126
export const dark_red_active_Progress = n126
export const dark_red_active_TooltipArrow = n126
export const dark_red_active_SliderTrack = n126
const n127 = t([[22, 207],[23, 208],[24, 206],[25, 206],[26, 210],[27, 211],[29, 210],[28, 209]])

export const dark_red_surface2 = n127
export const dark_red_Checkbox = n127
export const dark_red_Switch = n127
export const dark_red_TooltipContent = n127
export const dark_red_RadioGroupItem = n127
const n128 = t([[22, 210],[23, 210],[24, 209],[25, 209],[26, 210],[27, 210],[29, 209],[28, 209]])

export const dark_red_surface4 = n128
export const dark_red_active_SelectTrigger = n128
export const dark_red_active_Card = n128
export const dark_red_active_Button = n128
export const dark_red_active_Checkbox = n128
export const dark_red_active_Switch = n128
export const dark_red_active_TooltipContent = n128
export const dark_red_active_RadioGroupItem = n128
export const dark_red_active_Input = n128
export const dark_red_active_TextArea = n128
const n129 = t([[30, 160],[31, 159],[32, 160],[33, 159]])

export const dark_gray_alt1 = n129
const n130 = t([[30, 159],[31, 158],[32, 159],[33, 158]])

export const dark_gray_alt2 = n130
const n131 = t([[22, 153],[23, 154],[24, 152],[25, 152],[26, 156],[27, 157],[29, 156],[28, 155]])

export const dark_gray_active = n131
export const dark_gray_surface3 = n131
export const dark_gray_Button = n131
export const dark_gray_SliderTrackActive = n131
export const dark_gray_active_SliderTrackActive = n131
const n132 = t([[22, 151],[23, 152],[24, 150],[25, 150],[26, 154],[27, 155],[29, 154],[28, 153]])

export const dark_gray_surface1 = n132
export const dark_gray_ListItem = n132
export const dark_gray_SelectTrigger = n132
export const dark_gray_Card = n132
export const dark_gray_Progress = n132
export const dark_gray_TooltipArrow = n132
export const dark_gray_SliderTrack = n132
export const dark_gray_Input = n132
export const dark_gray_TextArea = n132
export const dark_gray_active_ListItem = n132
export const dark_gray_active_Progress = n132
export const dark_gray_active_TooltipArrow = n132
export const dark_gray_active_SliderTrack = n132
const n133 = t([[22, 152],[23, 153],[24, 151],[25, 151],[26, 155],[27, 156],[29, 155],[28, 154]])

export const dark_gray_surface2 = n133
export const dark_gray_Checkbox = n133
export const dark_gray_Switch = n133
export const dark_gray_TooltipContent = n133
export const dark_gray_RadioGroupItem = n133
const n134 = t([[22, 155],[23, 155],[24, 154],[25, 154],[26, 155],[27, 155],[29, 154],[28, 154]])

export const dark_gray_surface4 = n134
export const dark_gray_active_SelectTrigger = n134
export const dark_gray_active_Card = n134
export const dark_gray_active_Button = n134
export const dark_gray_active_Checkbox = n134
export const dark_gray_active_Switch = n134
export const dark_gray_active_TooltipContent = n134
export const dark_gray_active_RadioGroupItem = n134
export const dark_gray_active_Input = n134
export const dark_gray_active_TextArea = n134
const n135 = t([[30, 170],[31, 169],[32, 170],[33, 169]])

export const dark_green_alt1 = n135
const n136 = t([[30, 169],[31, 51],[32, 169],[33, 51]])

export const dark_green_alt2 = n136
const n137 = t([[22, 164],[23, 165],[24, 163],[25, 163],[26, 167],[27, 168],[29, 167],[28, 166]])

export const dark_green_active = n137
export const dark_green_surface3 = n137
export const dark_green_Button = n137
export const dark_green_SliderTrackActive = n137
export const dark_green_active_SliderTrackActive = n137
const n138 = t([[22, 162],[23, 163],[24, 161],[25, 161],[26, 165],[27, 166],[29, 165],[28, 164]])

export const dark_green_surface1 = n138
export const dark_green_ListItem = n138
export const dark_green_SelectTrigger = n138
export const dark_green_Card = n138
export const dark_green_Progress = n138
export const dark_green_TooltipArrow = n138
export const dark_green_SliderTrack = n138
export const dark_green_Input = n138
export const dark_green_TextArea = n138
export const dark_green_active_ListItem = n138
export const dark_green_active_Progress = n138
export const dark_green_active_TooltipArrow = n138
export const dark_green_active_SliderTrack = n138
const n139 = t([[22, 163],[23, 164],[24, 162],[25, 162],[26, 166],[27, 167],[29, 166],[28, 165]])

export const dark_green_surface2 = n139
export const dark_green_Checkbox = n139
export const dark_green_Switch = n139
export const dark_green_TooltipContent = n139
export const dark_green_RadioGroupItem = n139
const n140 = t([[22, 166],[23, 166],[24, 165],[25, 165],[26, 166],[27, 166],[29, 165],[28, 165]])

export const dark_green_surface4 = n140
export const dark_green_active_SelectTrigger = n140
export const dark_green_active_Card = n140
export const dark_green_active_Button = n140
export const dark_green_active_Checkbox = n140
export const dark_green_active_Switch = n140
export const dark_green_active_TooltipContent = n140
export const dark_green_active_RadioGroupItem = n140
export const dark_green_active_Input = n140
export const dark_green_active_TextArea = n140
const n141 = t([[30, 7],[31, 6],[32, 8],[33, 8],[22, 17],[23, 16],[24, 17],[25, 16],[26, 15],[27, 14],[29, 13],[28, 12]])

export const light_SwitchThumb = n141
export const light_SliderThumb = n141
export const light_Tooltip = n141
export const light_ProgressIndicator = n141
const n142 = t([[22, 352]])

export const light_SheetOverlay = n142
export const light_DialogOverlay = n142
export const light_ModalOverlay = n142
export const light_orange_SheetOverlay = n142
export const light_orange_DialogOverlay = n142
export const light_orange_ModalOverlay = n142
export const light_yellow_SheetOverlay = n142
export const light_yellow_DialogOverlay = n142
export const light_yellow_ModalOverlay = n142
export const light_teal_SheetOverlay = n142
export const light_teal_DialogOverlay = n142
export const light_teal_ModalOverlay = n142
export const light_blue_SheetOverlay = n142
export const light_blue_DialogOverlay = n142
export const light_blue_ModalOverlay = n142
export const light_purple_SheetOverlay = n142
export const light_purple_DialogOverlay = n142
export const light_purple_ModalOverlay = n142
export const light_pink_SheetOverlay = n142
export const light_pink_DialogOverlay = n142
export const light_pink_ModalOverlay = n142
export const light_red_SheetOverlay = n142
export const light_red_DialogOverlay = n142
export const light_red_ModalOverlay = n142
export const light_gray_SheetOverlay = n142
export const light_gray_DialogOverlay = n142
export const light_gray_ModalOverlay = n142
export const light_green_SheetOverlay = n142
export const light_green_DialogOverlay = n142
export const light_green_ModalOverlay = n142
export const light_active_SheetOverlay = n142
export const light_active_DialogOverlay = n142
export const light_active_ModalOverlay = n142
export const light_orange_active_SheetOverlay = n142
export const light_orange_active_DialogOverlay = n142
export const light_orange_active_ModalOverlay = n142
export const light_yellow_active_SheetOverlay = n142
export const light_yellow_active_DialogOverlay = n142
export const light_yellow_active_ModalOverlay = n142
export const light_teal_active_SheetOverlay = n142
export const light_teal_active_DialogOverlay = n142
export const light_teal_active_ModalOverlay = n142
export const light_blue_active_SheetOverlay = n142
export const light_blue_active_DialogOverlay = n142
export const light_blue_active_ModalOverlay = n142
export const light_purple_active_SheetOverlay = n142
export const light_purple_active_DialogOverlay = n142
export const light_purple_active_ModalOverlay = n142
export const light_pink_active_SheetOverlay = n142
export const light_pink_active_DialogOverlay = n142
export const light_pink_active_ModalOverlay = n142
export const light_red_active_SheetOverlay = n142
export const light_red_active_DialogOverlay = n142
export const light_red_active_ModalOverlay = n142
export const light_gray_active_SheetOverlay = n142
export const light_gray_active_DialogOverlay = n142
export const light_gray_active_ModalOverlay = n142
export const light_green_active_SheetOverlay = n142
export const light_green_active_DialogOverlay = n142
export const light_green_active_ModalOverlay = n142
const n143 = t([[30, 130],[31, 131],[32, 129],[33, 129],[22, 6],[23, 139],[24, 6],[25, 139],[26, 138],[27, 137],[29, 136],[28, 135]])

export const dark_SwitchThumb = n143
export const dark_SliderThumb = n143
export const dark_Tooltip = n143
export const dark_ProgressIndicator = n143
const n144 = t([[22, 353]])

export const dark_SheetOverlay = n144
export const dark_DialogOverlay = n144
export const dark_ModalOverlay = n144
export const dark_orange_SheetOverlay = n144
export const dark_orange_DialogOverlay = n144
export const dark_orange_ModalOverlay = n144
export const dark_yellow_SheetOverlay = n144
export const dark_yellow_DialogOverlay = n144
export const dark_yellow_ModalOverlay = n144
export const dark_teal_SheetOverlay = n144
export const dark_teal_DialogOverlay = n144
export const dark_teal_ModalOverlay = n144
export const dark_blue_SheetOverlay = n144
export const dark_blue_DialogOverlay = n144
export const dark_blue_ModalOverlay = n144
export const dark_purple_SheetOverlay = n144
export const dark_purple_DialogOverlay = n144
export const dark_purple_ModalOverlay = n144
export const dark_pink_SheetOverlay = n144
export const dark_pink_DialogOverlay = n144
export const dark_pink_ModalOverlay = n144
export const dark_red_SheetOverlay = n144
export const dark_red_DialogOverlay = n144
export const dark_red_ModalOverlay = n144
export const dark_gray_SheetOverlay = n144
export const dark_gray_DialogOverlay = n144
export const dark_gray_ModalOverlay = n144
export const dark_green_SheetOverlay = n144
export const dark_green_DialogOverlay = n144
export const dark_green_ModalOverlay = n144
export const dark_active_SheetOverlay = n144
export const dark_active_DialogOverlay = n144
export const dark_active_ModalOverlay = n144
export const dark_orange_active_SheetOverlay = n144
export const dark_orange_active_DialogOverlay = n144
export const dark_orange_active_ModalOverlay = n144
export const dark_yellow_active_SheetOverlay = n144
export const dark_yellow_active_DialogOverlay = n144
export const dark_yellow_active_ModalOverlay = n144
export const dark_teal_active_SheetOverlay = n144
export const dark_teal_active_DialogOverlay = n144
export const dark_teal_active_ModalOverlay = n144
export const dark_blue_active_SheetOverlay = n144
export const dark_blue_active_DialogOverlay = n144
export const dark_blue_active_ModalOverlay = n144
export const dark_purple_active_SheetOverlay = n144
export const dark_purple_active_DialogOverlay = n144
export const dark_purple_active_ModalOverlay = n144
export const dark_pink_active_SheetOverlay = n144
export const dark_pink_active_DialogOverlay = n144
export const dark_pink_active_ModalOverlay = n144
export const dark_red_active_SheetOverlay = n144
export const dark_red_active_DialogOverlay = n144
export const dark_red_active_ModalOverlay = n144
export const dark_gray_active_SheetOverlay = n144
export const dark_gray_active_DialogOverlay = n144
export const dark_gray_active_ModalOverlay = n144
export const dark_green_active_SheetOverlay = n144
export const dark_green_active_DialogOverlay = n144
export const dark_green_active_ModalOverlay = n144
const n145 = t([[30, 56],[31, 55],[32, 57],[33, 57],[22, 66],[23, 65],[24, 66],[25, 65],[26, 64],[27, 63],[29, 62],[28, 61]])

export const light_orange_SwitchThumb = n145
export const light_orange_SliderThumb = n145
export const light_orange_Tooltip = n145
export const light_orange_ProgressIndicator = n145
const n146 = t([[30, 116],[31, 115],[32, 117],[33, 117],[22, 126],[23, 125],[24, 126],[25, 125],[26, 124],[27, 123],[29, 122],[28, 121]])

export const light_yellow_SwitchThumb = n146
export const light_yellow_SliderThumb = n146
export const light_yellow_Tooltip = n146
export const light_yellow_ProgressIndicator = n146
const n147 = t([[30, 250],[31, 249],[32, 251],[33, 251],[22, 259],[23, 258],[24, 259],[25, 258],[26, 257],[27, 111],[29, 256],[28, 255]])

export const light_teal_SwitchThumb = n147
export const light_teal_SliderThumb = n147
export const light_teal_Tooltip = n147
export const light_teal_ProgressIndicator = n147
const n148 = t([[30, 23],[31, 22],[32, 24],[33, 24],[22, 32],[23, 31],[24, 32],[25, 31],[26, 30],[27, 29],[29, 28],[28, 27]])

export const light_blue_SwitchThumb = n148
export const light_blue_SliderThumb = n148
export const light_blue_Tooltip = n148
export const light_blue_ProgressIndicator = n148
const n149 = t([[30, 80],[31, 79],[32, 81],[33, 81],[22, 90],[23, 89],[24, 90],[25, 89],[26, 88],[27, 87],[29, 86],[28, 85]])

export const light_purple_SwitchThumb = n149
export const light_purple_SliderThumb = n149
export const light_purple_Tooltip = n149
export const light_purple_ProgressIndicator = n149
const n150 = t([[30, 68],[31, 67],[32, 69],[33, 69],[22, 78],[23, 77],[24, 78],[25, 77],[26, 76],[27, 75],[29, 74],[28, 73]])

export const light_pink_SwitchThumb = n150
export const light_pink_SliderThumb = n150
export const light_pink_Tooltip = n150
export const light_pink_ProgressIndicator = n150
const n151 = t([[30, 92],[31, 91],[32, 93],[33, 93],[22, 102],[23, 101],[24, 102],[25, 101],[26, 100],[27, 99],[29, 98],[28, 97]])

export const light_red_SwitchThumb = n151
export const light_red_SliderThumb = n151
export const light_red_Tooltip = n151
export const light_red_ProgressIndicator = n151
const n152 = t([[30, 34],[31, 33],[32, 35],[33, 35],[22, 17],[23, 42],[24, 17],[25, 42],[26, 41],[27, 14],[29, 40],[28, 39]])

export const light_gray_SwitchThumb = n152
export const light_gray_SliderThumb = n152
export const light_gray_Tooltip = n152
export const light_gray_ProgressIndicator = n152
const n153 = t([[30, 44],[31, 43],[32, 45],[33, 45],[22, 54],[23, 53],[24, 54],[25, 53],[26, 52],[27, 51],[29, 50],[28, 49]])

export const light_green_SwitchThumb = n153
export const light_green_SliderThumb = n153
export const light_green_Tooltip = n153
export const light_green_ProgressIndicator = n153
const n154 = t([[30, 173],[31, 174],[32, 172],[33, 172],[22, 182],[23, 181],[24, 182],[25, 181],[26, 180],[27, 63],[29, 179],[28, 178]])

export const dark_orange_SwitchThumb = n154
export const dark_orange_SliderThumb = n154
export const dark_orange_Tooltip = n154
export const dark_orange_ProgressIndicator = n154
const n155 = t([[30, 217],[31, 218],[32, 216],[33, 216],[22, 226],[23, 225],[24, 226],[25, 225],[26, 224],[27, 123],[29, 223],[28, 222]])

export const dark_yellow_SwitchThumb = n155
export const dark_yellow_SliderThumb = n155
export const dark_yellow_Tooltip = n155
export const dark_yellow_ProgressIndicator = n155
const n156 = t([[30, 104],[31, 105],[32, 103],[33, 103],[22, 114],[23, 113],[24, 114],[25, 113],[26, 112],[27, 111],[29, 110],[28, 109]])

export const dark_teal_SwitchThumb = n156
export const dark_teal_SliderThumb = n156
export const dark_teal_Tooltip = n156
export const dark_teal_ProgressIndicator = n156
const n157 = t([[30, 141],[31, 142],[32, 140],[33, 140],[22, 149],[23, 148],[24, 149],[25, 148],[26, 147],[27, 29],[29, 146],[28, 145]])

export const dark_blue_SwitchThumb = n157
export const dark_blue_SliderThumb = n157
export const dark_blue_Tooltip = n157
export const dark_blue_ProgressIndicator = n157
const n158 = t([[30, 195],[31, 196],[32, 194],[33, 194],[22, 204],[23, 203],[24, 204],[25, 203],[26, 202],[27, 87],[29, 201],[28, 200]])

export const dark_purple_SwitchThumb = n158
export const dark_purple_SliderThumb = n158
export const dark_purple_Tooltip = n158
export const dark_purple_ProgressIndicator = n158
const n159 = t([[30, 184],[31, 185],[32, 183],[33, 183],[22, 193],[23, 192],[24, 193],[25, 192],[26, 191],[27, 75],[29, 190],[28, 189]])

export const dark_pink_SwitchThumb = n159
export const dark_pink_SliderThumb = n159
export const dark_pink_Tooltip = n159
export const dark_pink_ProgressIndicator = n159
const n160 = t([[30, 206],[31, 207],[32, 205],[33, 205],[22, 215],[23, 214],[24, 215],[25, 214],[26, 213],[27, 99],[29, 212],[28, 211]])

export const dark_red_SwitchThumb = n160
export const dark_red_SliderThumb = n160
export const dark_red_Tooltip = n160
export const dark_red_ProgressIndicator = n160
const n161 = t([[30, 151],[31, 152],[32, 150],[33, 150],[22, 36],[23, 160],[24, 36],[25, 160],[26, 159],[27, 158],[29, 157],[28, 156]])

export const dark_gray_SwitchThumb = n161
export const dark_gray_SliderThumb = n161
export const dark_gray_Tooltip = n161
export const dark_gray_ProgressIndicator = n161
const n162 = t([[30, 162],[31, 163],[32, 161],[33, 161],[22, 171],[23, 170],[24, 171],[25, 170],[26, 169],[27, 51],[29, 168],[28, 167]])

export const dark_green_SwitchThumb = n162
export const dark_green_SliderThumb = n162
export const dark_green_Tooltip = n162
export const dark_green_ProgressIndicator = n162
const n163 = t([[30, 7],[31, 6],[32, 8],[33, 8],[22, 15],[23, 14],[24, 15],[25, 14],[26, 13],[27, 12],[29, 11],[28, 10]])

export const light_active_SwitchThumb = n163
export const light_active_SliderThumb = n163
export const light_active_Tooltip = n163
export const light_active_ProgressIndicator = n163
const n164 = t([[30, 130],[31, 131],[32, 129],[33, 129],[22, 138],[23, 137],[24, 138],[25, 137],[26, 136],[27, 135],[29, 134],[28, 133]])

export const dark_active_SwitchThumb = n164
export const dark_active_SliderThumb = n164
export const dark_active_Tooltip = n164
export const dark_active_ProgressIndicator = n164
const n165 = t([[30, 56],[31, 55],[32, 57],[33, 57],[22, 64],[23, 63],[24, 64],[25, 63],[26, 62],[27, 61],[29, 60],[28, 59]])

export const light_orange_active_SwitchThumb = n165
export const light_orange_active_SliderThumb = n165
export const light_orange_active_Tooltip = n165
export const light_orange_active_ProgressIndicator = n165
const n166 = t([[30, 116],[31, 115],[32, 117],[33, 117],[22, 124],[23, 123],[24, 124],[25, 123],[26, 122],[27, 121],[29, 120],[28, 119]])

export const light_yellow_active_SwitchThumb = n166
export const light_yellow_active_SliderThumb = n166
export const light_yellow_active_Tooltip = n166
export const light_yellow_active_ProgressIndicator = n166
const n167 = t([[30, 250],[31, 249],[32, 251],[33, 251],[22, 257],[23, 111],[24, 257],[25, 111],[26, 256],[27, 255],[29, 254],[28, 253]])

export const light_teal_active_SwitchThumb = n167
export const light_teal_active_SliderThumb = n167
export const light_teal_active_Tooltip = n167
export const light_teal_active_ProgressIndicator = n167
const n168 = t([[30, 23],[31, 22],[32, 24],[33, 24],[22, 30],[23, 29],[24, 30],[25, 29],[26, 28],[27, 27],[29, 26],[28, 25]])

export const light_blue_active_SwitchThumb = n168
export const light_blue_active_SliderThumb = n168
export const light_blue_active_Tooltip = n168
export const light_blue_active_ProgressIndicator = n168
const n169 = t([[30, 80],[31, 79],[32, 81],[33, 81],[22, 88],[23, 87],[24, 88],[25, 87],[26, 86],[27, 85],[29, 84],[28, 83]])

export const light_purple_active_SwitchThumb = n169
export const light_purple_active_SliderThumb = n169
export const light_purple_active_Tooltip = n169
export const light_purple_active_ProgressIndicator = n169
const n170 = t([[30, 68],[31, 67],[32, 69],[33, 69],[22, 76],[23, 75],[24, 76],[25, 75],[26, 74],[27, 73],[29, 72],[28, 71]])

export const light_pink_active_SwitchThumb = n170
export const light_pink_active_SliderThumb = n170
export const light_pink_active_Tooltip = n170
export const light_pink_active_ProgressIndicator = n170
const n171 = t([[30, 92],[31, 91],[32, 93],[33, 93],[22, 100],[23, 99],[24, 100],[25, 99],[26, 98],[27, 97],[29, 96],[28, 95]])

export const light_red_active_SwitchThumb = n171
export const light_red_active_SliderThumb = n171
export const light_red_active_Tooltip = n171
export const light_red_active_ProgressIndicator = n171
const n172 = t([[30, 34],[31, 33],[32, 35],[33, 35],[22, 41],[23, 14],[24, 41],[25, 14],[26, 40],[27, 39],[29, 38],[28, 37]])

export const light_gray_active_SwitchThumb = n172
export const light_gray_active_SliderThumb = n172
export const light_gray_active_Tooltip = n172
export const light_gray_active_ProgressIndicator = n172
const n173 = t([[30, 44],[31, 43],[32, 45],[33, 45],[22, 52],[23, 51],[24, 52],[25, 51],[26, 50],[27, 49],[29, 48],[28, 47]])

export const light_green_active_SwitchThumb = n173
export const light_green_active_SliderThumb = n173
export const light_green_active_Tooltip = n173
export const light_green_active_ProgressIndicator = n173
const n174 = t([[30, 173],[31, 174],[32, 172],[33, 172],[22, 180],[23, 63],[24, 180],[25, 63],[26, 179],[27, 178],[29, 177],[28, 176]])

export const dark_orange_active_SwitchThumb = n174
export const dark_orange_active_SliderThumb = n174
export const dark_orange_active_Tooltip = n174
export const dark_orange_active_ProgressIndicator = n174
const n175 = t([[30, 217],[31, 218],[32, 216],[33, 216],[22, 224],[23, 123],[24, 224],[25, 123],[26, 223],[27, 222],[29, 221],[28, 220]])

export const dark_yellow_active_SwitchThumb = n175
export const dark_yellow_active_SliderThumb = n175
export const dark_yellow_active_Tooltip = n175
export const dark_yellow_active_ProgressIndicator = n175
const n176 = t([[30, 104],[31, 105],[32, 103],[33, 103],[22, 112],[23, 111],[24, 112],[25, 111],[26, 110],[27, 109],[29, 108],[28, 107]])

export const dark_teal_active_SwitchThumb = n176
export const dark_teal_active_SliderThumb = n176
export const dark_teal_active_Tooltip = n176
export const dark_teal_active_ProgressIndicator = n176
const n177 = t([[30, 141],[31, 142],[32, 140],[33, 140],[22, 147],[23, 29],[24, 147],[25, 29],[26, 146],[27, 145],[29, 144],[28, 143]])

export const dark_blue_active_SwitchThumb = n177
export const dark_blue_active_SliderThumb = n177
export const dark_blue_active_Tooltip = n177
export const dark_blue_active_ProgressIndicator = n177
const n178 = t([[30, 195],[31, 196],[32, 194],[33, 194],[22, 202],[23, 87],[24, 202],[25, 87],[26, 201],[27, 200],[29, 199],[28, 198]])

export const dark_purple_active_SwitchThumb = n178
export const dark_purple_active_SliderThumb = n178
export const dark_purple_active_Tooltip = n178
export const dark_purple_active_ProgressIndicator = n178
const n179 = t([[30, 184],[31, 185],[32, 183],[33, 183],[22, 191],[23, 75],[24, 191],[25, 75],[26, 190],[27, 189],[29, 188],[28, 187]])

export const dark_pink_active_SwitchThumb = n179
export const dark_pink_active_SliderThumb = n179
export const dark_pink_active_Tooltip = n179
export const dark_pink_active_ProgressIndicator = n179
const n180 = t([[30, 206],[31, 207],[32, 205],[33, 205],[22, 213],[23, 99],[24, 213],[25, 99],[26, 212],[27, 211],[29, 210],[28, 209]])

export const dark_red_active_SwitchThumb = n180
export const dark_red_active_SliderThumb = n180
export const dark_red_active_Tooltip = n180
export const dark_red_active_ProgressIndicator = n180
const n181 = t([[30, 151],[31, 152],[32, 150],[33, 150],[22, 159],[23, 158],[24, 159],[25, 158],[26, 157],[27, 156],[29, 155],[28, 154]])

export const dark_gray_active_SwitchThumb = n181
export const dark_gray_active_SliderThumb = n181
export const dark_gray_active_Tooltip = n181
export const dark_gray_active_ProgressIndicator = n181
const n182 = t([[30, 162],[31, 163],[32, 161],[33, 161],[22, 169],[23, 51],[24, 169],[25, 51],[26, 168],[27, 167],[29, 166],[28, 165]])

export const dark_green_active_SwitchThumb = n182
export const dark_green_active_SliderThumb = n182
export const dark_green_active_Tooltip = n182
export const dark_green_active_ProgressIndicator = n182