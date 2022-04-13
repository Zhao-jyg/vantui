import { style } from '../wxs/style'

function barStyle(data: any) {
  const newData: any = {
    'padding-top': data.safeAreaInsetTop
      ? data.statusBarHeight + 'px'
      : data.fromTop + 'px',
    height: data.height + 'px',
  }
  if (data.zIndex) {
    newData['z-index'] = data.zIndex
  }
  return style(newData)
}

export { barStyle }
