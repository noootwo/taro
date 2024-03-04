import ConfigurationConstant from '@ohos.app.ability.ConfigurationConstant'
// 设备信息,从 API Version 6 开始支持
import deviceInfo from '@ohos.deviceInfo'
// 显示设备属性,从 API Version 7 开始支持
import _display from '@ohos.display'
// 从 API Version 7 开始支持
import i18n from '@ohos.i18n'

import { callAsyncFail, callAsyncSuccess } from '../utils'

import type Taro from '@tarojs/taro/types'

let display
let safeArea: TaroGeneral.SafeAreaResult | null = null
try {
  display = _display.getDefaultDisplaySync()
  // @ts-ignore
  display.getCutoutInfo((err, { boundingRects = [], waterfallDisplayAreaRects = {} }: _display.CutoutInfo = {}) => {
    if (err?.code) {
      console.error('Failed to get cutout info', JSON.stringify(err))
      return
    }

    const top = Math.max(...boundingRects.map(rect => rect.top * 2 + rect.height), waterfallDisplayAreaRects.top?.top + waterfallDisplayAreaRects.top?.height)
    const bottom = (waterfallDisplayAreaRects.bottom?.top + waterfallDisplayAreaRects.bottom?.height) || display.height
    const left = waterfallDisplayAreaRects.left?.left + waterfallDisplayAreaRects.left?.width
    const right = (waterfallDisplayAreaRects.right?.left + waterfallDisplayAreaRects.right?.width) || display.width
    safeArea = {
      top,
      bottom,
      left,
      right,
      height: bottom - top,
      width: right - left,
    }
  })
} catch (e) {
  console.error('Failed to get display', e)
}

/* 同步版本 */
export const getSystemInfoSync: typeof Taro.getSystemInfoSync = function () {
  const res: any = {}
  res.SDKVersion = deviceInfo && deviceInfo.sdkApiVersion // 客户端基础库版本 string
  res.albumAuthorized = false // 允许使用相册的开关（仅 iOS 有效） boolean
  res.benchmarkLevel = null // 设备性能等级 number
  res.bluetoothEnabled = null // 蓝牙的系统开关 boolean
  res.brand = deviceInfo && deviceInfo.brand // 设备品牌 string
  res.cameraAuthorized = null // 允许使用摄像头的开关 boolean
  res.enableDebug = null // 是否已打开调试 boolean
  res.fontSizeSetting = null // 用户字体大小（单位px） number
  res.language = i18n?.getSystemLanguage?.() // string
  res.locationAuthorized = null // 定位的开关 boolean
  res.locationEnabled = null // 地理位置的系统开关 boolean
  res.microphoneAuthorized = null // 麦克风的开关 boolean
  res.model = deviceInfo && deviceInfo.deviceType // 设备型号 string
  res.notificationAuthorized = null // 通知的开关 boolean
  res.notificationAlertAuthorized = false // 通知带有提醒的开关（仅 iOS 有效） boolean
  res.notificationBadgeAuthorized = false // 通知带有标记的开关（仅 iOS 有效） boolean
  res.notificationSoundAuthorized = false // 通知带有声音的开关（仅 iOS 有效）boolean
  res.phoneCalendarAuthorized = null // 使用日历的开关 boolean
  res.wifiEnabled = false // Wi-Fi 的系统开关 boolean
  res.pixelRatio = display && (Math.round(display.xDPI / display.width * 100) / 100) // 设备像素比,number
  res.platform = 'harmony' // 客户端平台 string
  res.safeArea = safeArea // 在竖屏正方向下的安全区域 General.SafeAreaResult
  res.screenHeight = display?.height // 屏幕高度，单位px number
  res.screenWidth = display?.width // 屏幕宽度，单位px number
  res.statusBarHeight = safeArea?.top // 状态栏的高度，单位px number
  res.system = deviceInfo?.osFullName // 操作系统及版本 string
  // Note: 更新配置时才能记录
  res.theme = AppStorage.get('__TARO_APP_CONFIG')?.colorMode === ConfigurationConstant.ColorMode.COLOR_MODE_DARK ? 'dark' : 'light' // 系统当前主题，取值为light或dark 'light' | 'dark'
  res.windowHeight = display?.height // 可使用窗口高度，单位px number
  res.windowWidth = display?.width // 可使用窗口宽度，单位px number
  res.version = deviceInfo?.displayVersion // 版本号 string

  return res
}
/* 异步版本 */
export const getSystemInfo: typeof Taro.getSystemInfo = function (options) {
  let res = {}
  return new Promise((resolve, reject) => {
    try {
      res = getSystemInfoSync()
      callAsyncSuccess(resolve, res, options)
    } catch (error) {
      res = {
        errMsg: `getSystemInfo:fail ${error && error.toString && error.toString()}`,
        error: error
      }
      callAsyncFail(reject, res, options)
    }
  })
}

globalThis.getSystemInfoSync = getSystemInfoSync
