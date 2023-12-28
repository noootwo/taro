const TARO_TEMPLATES_f0t0 = `import { createLazyChildren, createChildItem } from '../render'
import { FlexManager } from '../utils/FlexManager'
import { TOUCH_EVENT_MAP } from '../utils/constant/event'
import { getNodeThresholds, getNormalAttributes, getFontAttributes } from '../utils/helper'
import { TaroElement, eventHandler, getComponentEventCallback, AREA_CHANGE_EVENT_NAME, VISIBLE_CHANGE_EVENT_NAME } from '../../runtime'
import { DynamicCenter } from '../utils/DynamicCenter'

import type { TaroViewElement, TaroAny, TaroStyleType, TaroTextStyleType } from '../../runtime'

@Extend(Flex)
function attrs (style: TaroStyleType) {
  .id(style.id)
  .key(style.id)
  .flexGrow(style.flexGrow)
  .flexShrink(style.flexShrink)
  .flexBasis(style.flexBasis)
  .alignSelf(style.alignSelf)
  .padding({
    top: style.paddingTop,
    right: style.paddingRight,
    bottom: style.paddingBottom,
    left: style.paddingLeft
  })
  .margin({
    top: style.marginTop,
    right: style.marginRight,
    bottom: style.marginBottom,
    left: style.marginLeft
  })
  .width(style.width)
  .height(style.height)
  .constraintSize({
    minWidth: style.minWidth,
    maxWidth: style.maxWidth,
    minHeight: style.minHeight,
    maxHeight: style.maxHeight
  })
  .backgroundColor(style.backgroundColor)
  .backgroundImage(style.backgroundImage?.src, style.backgroundRepeat)
  .backgroundImageSize(style.backgroundSize)
  .backgroundImagePosition(style.backgroundPosition)
  .borderStyle({
    top: style.borderTopStyle,
    right: style.borderRightStyle,
    bottom: style.borderBottomStyle,
    left: style.borderLeftStyle
  })
  .borderWidth({
    top: style.borderTopWidth,
    right: style.borderRightWidth,
    bottom: style.borderBottomWidth,
    left: style.borderLeftWidth
  })
  .borderColor({
    top: style.borderTopColor,
    right: style.borderRightColor,
    bottom: style.borderBottomColor,
    left: style.borderLeftColor
  })
  .borderRadius({
    topLeft: style.borderTopLeftRadius,
    topRight: style.borderTopRightRadius,
    bottomLeft: style.borderBottomLeftRadius,
    bottomRight: style.borderBottomRightRadius
  })
  .zIndex(style.zIndex)
  .opacity(style.opacity)
  .linearGradient(style.linearGradient)
  .clip(style.overflow)
  .rotate({ centerX: style.transformOrigin?.x, centerY: style.transformOrigin?.y, angle: 0 })
  .scale({ centerX: style.transformOrigin?.x, centerY: style.transformOrigin?.y })
  .transform(style.transform)
}
@Extend(Text)
function textStyle (style: TaroStyleType) {
  .id(style.id)
  .key(style.id)
  .flexGrow(style.flexGrow)
  .flexShrink(style.flexShrink)
  .flexBasis(style.flexBasis)
  .alignSelf(style.alignSelf)
  .padding({
    top: style.paddingTop,
    right: style.paddingRight,
    bottom: style.paddingBottom,
    left: style.paddingLeft
  })
  .margin({
    top: style.marginTop,
    right: style.marginRight,
    bottom: style.marginBottom,
    left: style.marginLeft
  })
  .width(style.width)
  .height(style.height)
  .constraintSize({
    minWidth: style.minWidth,
    maxWidth: style.maxWidth,
    minHeight: style.minHeight,
    maxHeight: style.maxHeight
  })
  .backgroundColor(style.backgroundColor)
  .backgroundImage(style.backgroundImage?.src, style.backgroundRepeat)
  .backgroundImageSize(style.backgroundSize)
  .backgroundImagePosition(style.backgroundPosition)
  .borderStyle({
    top: style.borderTopStyle,
    right: style.borderRightStyle,
    bottom: style.borderBottomStyle,
    left: style.borderLeftStyle
  })
  .borderWidth({
    top: style.borderTopWidth,
    right: style.borderRightWidth,
    bottom: style.borderBottomWidth,
    left: style.borderLeftWidth
  })
  .borderColor({
    top: style.borderTopColor,
    right: style.borderRightColor,
    bottom: style.borderBottomColor,
    left: style.borderLeftColor
  })
  .borderRadius({
    topLeft: style.borderTopLeftRadius,
    topRight: style.borderTopRightRadius,
    bottomLeft: style.borderBottomLeftRadius,
    bottomRight: style.borderBottomRightRadius
  })
  .zIndex(style.zIndex)
  .opacity(style.opacity)
  .linearGradient(style.linearGradient)
  .clip(style.overflow)
  .rotate({ centerX: style.transformOrigin?.x, centerY: style.transformOrigin?.y, angle: 0 })
  .scale({ centerX: style.transformOrigin?.x, centerY: style.transformOrigin?.y })
  .transform(style.transform)
  .fontColor(style.color)
  .fontSize(style.fontSize)
  .fontWeight(style.fontWeight)
  .fontStyle(style.fontStyle)
  .fontFamily(style.fontFamily)
  .lineHeight(style.lineHeight)
  .decoration({
    type: style.textDecoration,
    color: style.color
  })
}

@Extend(Text)
function textAttr(attr: TaroTextStyleType) {
  .textAlign(attr.textAlign)
  .textOverflow(attr.textOverflow)
  .maxLines(attr.WebkitLineClamp)
  .letterSpacing(attr.letterSpacing)
}
@Component
export default struct TARO_TEMPLATES_f0t0 {
  node: TaroViewElement = new TaroElement('Ignore')

  dynamicCenter: DynamicCenter = new DynamicCenter()

  aboutToAppear () {
    this.dynamicCenter.bindComponentToNodeWithDFS(this.node, this)
  }

  @State node0: TaroElement = new TaroElement('Ignore')
  @State node1: TaroElement = new TaroElement('Ignore')
  @State node2: TaroElement = new TaroElement('Ignore')
  @State node3: TaroElement = new TaroElement('Ignore')
  @State node4: TaroElement = new TaroElement('Ignore')
  @State node5: TaroElement = new TaroElement('Ignore')
  @State node6: TaroElement = new TaroElement('Ignore')
  @State node7: TaroElement = new TaroElement('Ignore')
  @State node8: TaroElement = new TaroElement('Ignore')
  @State node9: TaroElement = new TaroElement('Ignore')
  @State node10: TaroElement = new TaroElement('Ignore')
  @State node11: TaroElement = new TaroElement('Ignore')
  
  build() {
    Flex(FlexManager.flexOptions(this.node0 as TaroElement)) {
      if ((this.node0.childNodes[0] as TaroElement)._attrs.compileIf) {
        Flex(FlexManager.flexOptions(this.node1 as TaroElement)) {
          Text(this.node1.childNodes[0].textContent)
          .textStyle(getNormalAttributes(this.node1.childNodes[0] as TaroElement))
          .textAttr(getFontAttributes(this.node1.childNodes[0] as TaroElement))
          .onVisibleAreaChange(getNodeThresholds(this.node1.childNodes[0] as TaroElement) || [0.0, 1.0], getComponentEventCallback(this.node1.childNodes[0] as TaroElement, VISIBLE_CHANGE_EVENT_NAME))
          .onAreaChange(getComponentEventCallback(this.node1.childNodes[0] as TaroElement, AREA_CHANGE_EVENT_NAME, (res: TaroAny) => {
            (this.node1.childNodes[0] as TaroElement)._nodeInfo.areaInfo = res[1]
          }))
        }
        .attrs(getNormalAttributes(this.node1 as TaroElement))
        .onVisibleAreaChange(getNodeThresholds(this.node1 as TaroElement) || [0.0, 1.0], getComponentEventCallback(this.node1 as TaroElement, VISIBLE_CHANGE_EVENT_NAME))
        .onAreaChange(getComponentEventCallback(this.node1 as TaroElement, AREA_CHANGE_EVENT_NAME, (res: TaroAny) => {
          (this.node1 as TaroElement)._nodeInfo.areaInfo = res[1]
        }))
      } else {
        Text(this.node0.childNodes[0].textContent)
        .textStyle(getNormalAttributes(this.node0.childNodes[0] as TaroElement))
        .textAttr(getFontAttributes(this.node0.childNodes[0] as TaroElement))
        .onVisibleAreaChange(getNodeThresholds(this.node0.childNodes[0] as TaroElement) || [0.0, 1.0], getComponentEventCallback(this.node0.childNodes[0] as TaroElement, VISIBLE_CHANGE_EVENT_NAME))
        .onAreaChange(getComponentEventCallback(this.node0.childNodes[0] as TaroElement, AREA_CHANGE_EVENT_NAME, (res: TaroAny) => {
          (this.node0.childNodes[0] as TaroElement)._nodeInfo.areaInfo = res[1]
        }))
      }
      if ((this.node0.childNodes[1] as TaroElement)._attrs.compileIf) {
        if ((this.node0.childNodes[1] as TaroElement)._attrs.compileIf) {
          Flex(FlexManager.flexOptions(this.node4 as TaroElement)) {
            Text(this.node4.childNodes[0].textContent)
            .textStyle(getNormalAttributes(this.node4.childNodes[0] as TaroElement))
            .textAttr(getFontAttributes(this.node4.childNodes[0] as TaroElement))
            .onVisibleAreaChange(getNodeThresholds(this.node4.childNodes[0] as TaroElement) || [0.0, 1.0], getComponentEventCallback(this.node4.childNodes[0] as TaroElement, VISIBLE_CHANGE_EVENT_NAME))
            .onAreaChange(getComponentEventCallback(this.node4.childNodes[0] as TaroElement, AREA_CHANGE_EVENT_NAME, (res: TaroAny) => {
              (this.node4.childNodes[0] as TaroElement)._nodeInfo.areaInfo = res[1]
            }))
          }
          .attrs(getNormalAttributes(this.node4 as TaroElement))
          .onVisibleAreaChange(getNodeThresholds(this.node4 as TaroElement) || [0.0, 1.0], getComponentEventCallback(this.node4 as TaroElement, VISIBLE_CHANGE_EVENT_NAME))
          .onAreaChange(getComponentEventCallback(this.node4 as TaroElement, AREA_CHANGE_EVENT_NAME, (res: TaroAny) => {
            (this.node4 as TaroElement)._nodeInfo.areaInfo = res[1]
          }))
        } else {
          Text(this.node3.textContent)
          .textStyle(getNormalAttributes(this.node3 as TaroElement))
          .textAttr(getFontAttributes(this.node3 as TaroElement))
          .onVisibleAreaChange(getNodeThresholds(this.node3 as TaroElement) || [0.0, 1.0], getComponentEventCallback(this.node3 as TaroElement, VISIBLE_CHANGE_EVENT_NAME))
          .onAreaChange(getComponentEventCallback(this.node3 as TaroElement, AREA_CHANGE_EVENT_NAME, (res: TaroAny) => {
            (this.node3 as TaroElement)._nodeInfo.areaInfo = res[1]
          }))
        }
      } else {
        Flex(FlexManager.flexOptions(this.node2 as TaroElement)) {
          Text(this.node2.childNodes[0].textContent)
          .textStyle(getNormalAttributes(this.node2.childNodes[0] as TaroElement))
          .textAttr(getFontAttributes(this.node2.childNodes[0] as TaroElement))
          .onVisibleAreaChange(getNodeThresholds(this.node2.childNodes[0] as TaroElement) || [0.0, 1.0], getComponentEventCallback(this.node2.childNodes[0] as TaroElement, VISIBLE_CHANGE_EVENT_NAME))
          .onAreaChange(getComponentEventCallback(this.node2.childNodes[0] as TaroElement, AREA_CHANGE_EVENT_NAME, (res: TaroAny) => {
            (this.node2.childNodes[0] as TaroElement)._nodeInfo.areaInfo = res[1]
          }))
        }
        .attrs(getNormalAttributes(this.node2 as TaroElement))
        .onVisibleAreaChange(getNodeThresholds(this.node2 as TaroElement) || [0.0, 1.0], getComponentEventCallback(this.node2 as TaroElement, VISIBLE_CHANGE_EVENT_NAME))
        .onAreaChange(getComponentEventCallback(this.node2 as TaroElement, AREA_CHANGE_EVENT_NAME, (res: TaroAny) => {
          (this.node2 as TaroElement)._nodeInfo.areaInfo = res[1]
        }))
      }
      if ((this.node0.childNodes[2] as TaroElement)._attrs.compileIf) {
        Flex(FlexManager.flexOptions(this.node7 as TaroElement)) {
          Text(this.node7.childNodes[0].textContent)
          .textStyle(getNormalAttributes(this.node7.childNodes[0] as TaroElement))
          .textAttr(getFontAttributes(this.node7.childNodes[0] as TaroElement))
          .onVisibleAreaChange(getNodeThresholds(this.node7.childNodes[0] as TaroElement) || [0.0, 1.0], getComponentEventCallback(this.node7.childNodes[0] as TaroElement, VISIBLE_CHANGE_EVENT_NAME))
          .onAreaChange(getComponentEventCallback(this.node7.childNodes[0] as TaroElement, AREA_CHANGE_EVENT_NAME, (res: TaroAny) => {
            (this.node7.childNodes[0] as TaroElement)._nodeInfo.areaInfo = res[1]
          }))
        }
        .attrs(getNormalAttributes(this.node7 as TaroElement))
        .onVisibleAreaChange(getNodeThresholds(this.node7 as TaroElement) || [0.0, 1.0], getComponentEventCallback(this.node7 as TaroElement, VISIBLE_CHANGE_EVENT_NAME))
        .onAreaChange(getComponentEventCallback(this.node7 as TaroElement, AREA_CHANGE_EVENT_NAME, (res: TaroAny) => {
          (this.node7 as TaroElement)._nodeInfo.areaInfo = res[1]
        }))
      } else {
        if ((this.node0.childNodes[2] as TaroElement)._attrs.compileIf) {
          Flex(FlexManager.flexOptions(this.node6 as TaroElement)) {
            Text(this.node6.childNodes[0].textContent)
            .textStyle(getNormalAttributes(this.node6.childNodes[0] as TaroElement))
            .textAttr(getFontAttributes(this.node6.childNodes[0] as TaroElement))
            .onVisibleAreaChange(getNodeThresholds(this.node6.childNodes[0] as TaroElement) || [0.0, 1.0], getComponentEventCallback(this.node6.childNodes[0] as TaroElement, VISIBLE_CHANGE_EVENT_NAME))
            .onAreaChange(getComponentEventCallback(this.node6.childNodes[0] as TaroElement, AREA_CHANGE_EVENT_NAME, (res: TaroAny) => {
              (this.node6.childNodes[0] as TaroElement)._nodeInfo.areaInfo = res[1]
            }))
          }
          .attrs(getNormalAttributes(this.node6 as TaroElement))
          .onVisibleAreaChange(getNodeThresholds(this.node6 as TaroElement) || [0.0, 1.0], getComponentEventCallback(this.node6 as TaroElement, VISIBLE_CHANGE_EVENT_NAME))
          .onAreaChange(getComponentEventCallback(this.node6 as TaroElement, AREA_CHANGE_EVENT_NAME, (res: TaroAny) => {
            (this.node6 as TaroElement)._nodeInfo.areaInfo = res[1]
          }))
        } else {
          Text(this.node5.textContent)
          .textStyle(getNormalAttributes(this.node5 as TaroElement))
          .textAttr(getFontAttributes(this.node5 as TaroElement))
          .onVisibleAreaChange(getNodeThresholds(this.node5 as TaroElement) || [0.0, 1.0], getComponentEventCallback(this.node5 as TaroElement, VISIBLE_CHANGE_EVENT_NAME))
          .onAreaChange(getComponentEventCallback(this.node5 as TaroElement, AREA_CHANGE_EVENT_NAME, (res: TaroAny) => {
            (this.node5 as TaroElement)._nodeInfo.areaInfo = res[1]
          }))
        }
      }
      if ((this.node0.childNodes[3] as TaroElement)._attrs.compileIf) {
        Flex(FlexManager.flexOptions(this.node8 as TaroElement)) {
          Text(this.node8.childNodes[0].textContent)
          .textStyle(getNormalAttributes(this.node8.childNodes[0] as TaroElement))
          .textAttr(getFontAttributes(this.node8.childNodes[0] as TaroElement))
          .onVisibleAreaChange(getNodeThresholds(this.node8.childNodes[0] as TaroElement) || [0.0, 1.0], getComponentEventCallback(this.node8.childNodes[0] as TaroElement, VISIBLE_CHANGE_EVENT_NAME))
          .onAreaChange(getComponentEventCallback(this.node8.childNodes[0] as TaroElement, AREA_CHANGE_EVENT_NAME, (res: TaroAny) => {
            (this.node8.childNodes[0] as TaroElement)._nodeInfo.areaInfo = res[1]
          }))
        }
        .attrs(getNormalAttributes(this.node8 as TaroElement))
        .onVisibleAreaChange(getNodeThresholds(this.node8 as TaroElement) || [0.0, 1.0], getComponentEventCallback(this.node8 as TaroElement, VISIBLE_CHANGE_EVENT_NAME))
        .onAreaChange(getComponentEventCallback(this.node8 as TaroElement, AREA_CHANGE_EVENT_NAME, (res: TaroAny) => {
          (this.node8 as TaroElement)._nodeInfo.areaInfo = res[1]
        }))
      }
      if ((this.node0.childNodes[4] as TaroElement)._attrs.compileIf) {
      } else {
        Flex(FlexManager.flexOptions(this.node9 as TaroElement)) {
          Text(this.node9.childNodes[0].textContent)
          .textStyle(getNormalAttributes(this.node9.childNodes[0] as TaroElement))
          .textAttr(getFontAttributes(this.node9.childNodes[0] as TaroElement))
          .onVisibleAreaChange(getNodeThresholds(this.node9.childNodes[0] as TaroElement) || [0.0, 1.0], getComponentEventCallback(this.node9.childNodes[0] as TaroElement, VISIBLE_CHANGE_EVENT_NAME))
          .onAreaChange(getComponentEventCallback(this.node9.childNodes[0] as TaroElement, AREA_CHANGE_EVENT_NAME, (res: TaroAny) => {
            (this.node9.childNodes[0] as TaroElement)._nodeInfo.areaInfo = res[1]
          }))
        }
        .attrs(getNormalAttributes(this.node9 as TaroElement))
        .onVisibleAreaChange(getNodeThresholds(this.node9 as TaroElement) || [0.0, 1.0], getComponentEventCallback(this.node9 as TaroElement, VISIBLE_CHANGE_EVENT_NAME))
        .onAreaChange(getComponentEventCallback(this.node9 as TaroElement, AREA_CHANGE_EVENT_NAME, (res: TaroAny) => {
          (this.node9 as TaroElement)._nodeInfo.areaInfo = res[1]
        }))
      }
      if ((this.node0.childNodes[5] as TaroElement)._attrs.compileIf) {
        Flex(FlexManager.flexOptions(this.node10 as TaroElement)) {
          Text(this.node10.childNodes[0].textContent)
          .textStyle(getNormalAttributes(this.node10.childNodes[0] as TaroElement))
          .textAttr(getFontAttributes(this.node10.childNodes[0] as TaroElement))
          .onVisibleAreaChange(getNodeThresholds(this.node10.childNodes[0] as TaroElement) || [0.0, 1.0], getComponentEventCallback(this.node10.childNodes[0] as TaroElement, VISIBLE_CHANGE_EVENT_NAME))
          .onAreaChange(getComponentEventCallback(this.node10.childNodes[0] as TaroElement, AREA_CHANGE_EVENT_NAME, (res: TaroAny) => {
            (this.node10.childNodes[0] as TaroElement)._nodeInfo.areaInfo = res[1]
          }))
        }
        .attrs(getNormalAttributes(this.node10 as TaroElement))
        .onVisibleAreaChange(getNodeThresholds(this.node10 as TaroElement) || [0.0, 1.0], getComponentEventCallback(this.node10 as TaroElement, VISIBLE_CHANGE_EVENT_NAME))
        .onAreaChange(getComponentEventCallback(this.node10 as TaroElement, AREA_CHANGE_EVENT_NAME, (res: TaroAny) => {
          (this.node10 as TaroElement)._nodeInfo.areaInfo = res[1]
        }))
      }
      if ((this.node0.childNodes[6] as TaroElement)._attrs.compileIf) {
        Text(this.node0.childNodes[6].textContent)
        .textStyle(getNormalAttributes(this.node0.childNodes[6] as TaroElement))
        .textAttr(getFontAttributes(this.node0.childNodes[6] as TaroElement))
        .onVisibleAreaChange(getNodeThresholds(this.node0.childNodes[6] as TaroElement) || [0.0, 1.0], getComponentEventCallback(this.node0.childNodes[6] as TaroElement, VISIBLE_CHANGE_EVENT_NAME))
        .onAreaChange(getComponentEventCallback(this.node0.childNodes[6] as TaroElement, AREA_CHANGE_EVENT_NAME, (res: TaroAny) => {
          (this.node0.childNodes[6] as TaroElement)._nodeInfo.areaInfo = res[1]
        }))
      } else {
        Text(this.node0.childNodes[6].textContent)
        .textStyle(getNormalAttributes(this.node0.childNodes[6] as TaroElement))
        .textAttr(getFontAttributes(this.node0.childNodes[6] as TaroElement))
        .onVisibleAreaChange(getNodeThresholds(this.node0.childNodes[6] as TaroElement) || [0.0, 1.0], getComponentEventCallback(this.node0.childNodes[6] as TaroElement, VISIBLE_CHANGE_EVENT_NAME))
        .onAreaChange(getComponentEventCallback(this.node0.childNodes[6] as TaroElement, AREA_CHANGE_EVENT_NAME, (res: TaroAny) => {
          (this.node0.childNodes[6] as TaroElement)._nodeInfo.areaInfo = res[1]
        }))
      }
      Flex(FlexManager.flexOptions(this.node11 as TaroElement)) {}
      .attrs(getNormalAttributes(this.node11 as TaroElement))
      .onVisibleAreaChange(getNodeThresholds(this.node11 as TaroElement) || [0.0, 1.0], getComponentEventCallback(this.node11 as TaroElement, VISIBLE_CHANGE_EVENT_NAME))
      .onAreaChange(getComponentEventCallback(this.node11 as TaroElement, AREA_CHANGE_EVENT_NAME, (res: TaroAny) => {
        (this.node11 as TaroElement)._nodeInfo.areaInfo = res[1]
      }))
    }
    .attrs(getNormalAttributes(this.node0 as TaroElement))
    .onVisibleAreaChange(getNodeThresholds(this.node0 as TaroElement) || [0.0, 1.0], getComponentEventCallback(this.node0 as TaroElement, VISIBLE_CHANGE_EVENT_NAME))
    .onAreaChange(getComponentEventCallback(this.node0 as TaroElement, AREA_CHANGE_EVENT_NAME, (res: TaroAny) => {
      (this.node0 as TaroElement)._nodeInfo.areaInfo = res[1]
    }))
  }
}
`;
function Index() {
    return <View compileMode="f0t0" _dynamicID="node0">

            {condition ? <View hoverClass={myClass} compileIf={condition} _dynamicID="node1">{content}</View> : <Text selectable>hello</Text>}

            {condition1 ? condition2 ? <View compileIf={condition2} _dynamicID="node4">{a}</View> : <Text _dynamicID="node3">{b}</Text> : <View _dynamicID="node2">{c}</View>}

            {condition1 ? <View compileIf={condition1} _dynamicID="node7">{a}</View> : condition2 ? <View _dynamicID="node6">{b}</View> : <Text _dynamicID="node5">{c}</Text>}

            {condition1 ? <View compileIf={condition1} _dynamicID="node8">{a}</View> : condition2 ? <View>{b}</View> : <Text>{c}</Text>}

            {condition1 ? condition2 && <View>{a}</View> : <View _dynamicID="node9">{b}</View>}

            {condition1 ? <View compileIf={condition1} _dynamicID="node10">{a}</View> : condition2 && <View>{b}</View>}

            {condition1 ? "someText" : 789}

            <View hoverClass={myClass} _dynamicID="node11"></View>

          </View>;
}
