export var content =`<?xml version="1.0"?>
<!--SCHEMA VERSION: 2.0.0-->
<xs:schema xmlns:xs="http://www.w3.org/2001/XMLSchema"  elementFormDefault="qualified" attributeFormDefault="unqualified">
    <!-- ActionBar sections -->
    <xs:attributeGroup name="actionBarAttributes">
        <xs:attribute name="title" type="StringValidator" />
        <xs:attribute name="navigationButton" type="StringValidator" />
        <xs:attribute name="actionItems" type="StringValidator" />
        <xs:attribute name="page" type="StringValidator" />
        <xs:attribute name="flat" type="BooleanValidator" />
    </xs:attributeGroup>
    <xs:complexType name="ActionBar">
        <xs:complexContent>
            <xs:extension base="View">
                <xs:choice>
                    <xs:element name="ActionBar.actionItems" maxOccurs="1">
                        <xs:complexType>
                            <xs:sequence>
                                <xs:element name="ActionItem" type="ActionItem" maxOccurs="unbounded" />
                            </xs:sequence>
                        </xs:complexType>
                    </xs:element>
                </xs:choice>
                <xs:attributeGroup ref="actionBarAttributes" />
            </xs:extension>
        </xs:complexContent>
    </xs:complexType>
    <xs:element name="ActionBar" type="ActionBar" />
    <xs:element name="action-bar" type="ActionBar" />
    <!-- ActionItem section -->
    <xs:attributeGroup name="actionItemAttributes">
        <xs:attribute name="text" type="StringValidator" />
        <xs:attribute name="icon" type="StringValidator" />
        <xs:attribute name="visibility" type="StringValidator" />
        <xs:attribute name="actionBar" type="StringValidator" />
        <xs:attribute name="page" type="StringValidator" />
    </xs:attributeGroup>
    <xs:complexType name="ActionItem">
        <xs:complexContent>
            <xs:extension base="Bindable">
                <xs:attributeGroup ref="actionItemAttributes" />
            </xs:extension>
        </xs:complexContent>
    </xs:complexType>
    <xs:element name="ActionItem" type="ActionItem" />
    <xs:element name="action-item" type="ActionItem" />
    <!-- Activity indicator section -->
    <xs:attributeGroup name="activityIndicatorAttributes">
        <xs:attribute name="busy" type="BooleanValidator" />
    </xs:attributeGroup>
    <xs:complexType name="ActivityIndicator">
        <xs:complexContent>
            <xs:extension base="View">
                <xs:attributeGroup ref="activityIndicatorAttributes" />
            </xs:extension>
        </xs:complexContent>
    </xs:complexType>
    <xs:element name="ActivityIndicator" type="ActivityIndicator" />
    <xs:element name="activity-indicator" type="ActivityIndicator" />
    <!-- Border section -->
    <xs:attributeGroup name="borderAttributes">
        <xs:attribute name="cornerRadius" type="NumberValidator" />
    </xs:attributeGroup>
    <xs:complexType name="Border">
        <xs:complexContent>
            <xs:extension base="ContentView">
                <xs:attributeGroup ref="borderAttributes" />
            </xs:extension>
        </xs:complexContent>
    </xs:complexType>
    <xs:element name="Border" type="Border" />
    <xs:element name="border" type="Border" />
    <!-- Button section -->
    <xs:attributeGroup name="buttonAttributes">
        <xs:attribute name="text" type="StringValidator" />
        <xs:attribute name="textWrap" type="BooleanValidator" />
        <xs:attribute name="formattedText" type="StringValidator" />
    </xs:attributeGroup>
    <xs:complexType name="Button">
        <xs:complexContent>
            <xs:extension base="View">
                <xs:attributeGroup ref="buttonAttributes" />
            </xs:extension>
        </xs:complexContent>
    </xs:complexType>
    <xs:element name="Button" type="Button" />
    <xs:element name="button" type="Button" />
    <!-- Content View section  -->
    <xs:attributeGroup name="contentViewAttributes" />
    <xs:complexType name="ContentView">
        <xs:complexContent>
            <xs:extension base="View">
                <xs:sequence>
                    <xs:any processContents="skip" minOccurs="0" maxOccurs="1" />
                </xs:sequence>
                <xs:attributeGroup ref="contentViewAttributes" />
            </xs:extension>
        </xs:complexContent>
    </xs:complexType>
    <xs:element name="ContentView" type="ContentView" />
    <xs:element name="content-view" type="ContentView" />
    <!-- Bindable section -->
    <xs:attributeGroup name="bindableAttributes" />
    <xs:complexType name="Bindable">
        <xs:attributeGroup ref="bindableAttributes" />
    </xs:complexType>
    <xs:element name="Bindable" type="Bindable" />
    <xs:element name="bindable" type="Bindable" />
    <!-- View class section -->
    <xs:attributeGroup name="viewAttributes">
        <xs:attribute name="automationText" type="StringValidator" />
        <xs:attribute name="background" type="StringValidator" />
        <xs:attribute name="backgroundColor" type="ColorValidator" />
        <xs:attribute name="backgroundImage" type="StringValidator" />
        <xs:attribute name="borderColor" type="ColorValidator" />
        <xs:attribute name="borderLeftColor" type="ColorValidator" />
        <xs:attribute name="borderRightColor" type="ColorValidator" />
        <xs:attribute name="borderTopColor" type="ColorValidator" />
        <xs:attribute name="borderBottomColor" type="ColorValidator" />
        <xs:attribute name="borderTopLeftRadius" type="NumberValidator" />
        <xs:attribute name="borderTopRightRadius" type="NumberValidator" />
        <xs:attribute name="borderBottomLeftRadius" type="NumberValidator" />
        <xs:attribute name="borderBottomRightRadius" type="NumberValidator" />
        <xs:attribute name="borderRadius" type="NumberValidator" />
        <xs:attribute name="borderWidth" type="NumberValidator" />
        <xs:attribute name="borderLeftWidth" type="NumberValidator" />
        <xs:attribute name="borderRightWidth" type="NumberValidator" />
        <xs:attribute name="borderTopWidth" type="NumberValidator" />
        <xs:attribute name="borderBottomWidth" type="NumberValidator" />
        <xs:attribute name="iosOverflowSafeArea" type="BooleanValidator" />
        <xs:attribute name="color" type="ColorValidator" />
        <xs:attribute name="loaded" type="StringValidator" />
        <xs:attribute name="unloaded" type="StringValidator" />
        <xs:attribute name="minWidth" type="NumberValidator" />
        <xs:attribute name="minHeight" type="NumberValidator" />
        <xs:attribute name="width" type="NumberValidator" />
        <xs:attribute name="height" type="NumberValidator" />
        <xs:attribute name="margin" type="StringValidator" />
        <xs:attribute name="marginLeft" type="NumberValidator" />
        <xs:attribute name="marginTop" type="NumberValidator" />
        <xs:attribute name="marginRight" type="NumberValidator" />
        <xs:attribute name="marginBottom" type="NumberValidator" />
        <xs:attribute name="horizontalAlignment" type="HorizontalAlignment" />
        <xs:attribute name="verticalAlignment" type="VerticalAlignment" />
        <xs:attribute name="visibility" type="StringValidator" />
        <xs:attribute name="opacity" type="NumberValidator" />
        <xs:attribute name="translateX" type="NumberValidator" />
        <xs:attribute name="translateY" type="NumberValidator" />
        <xs:attribute name="scaleX" type="NumberValidator" />
        <xs:attribute name="scaleY" type="NumberValidator" />
        <xs:attribute name="originX" type="NumberValidator" />
        <xs:attribute name="originY" type="NumberValidator" />
        <xs:attribute name="rotate" type="NumberValidator" />
        <xs:attribute name="isEnabled" type="BooleanValidator" />
        <xs:attribute name="isUserInteractionEnabled" type="BooleanValidator" />
        <xs:attribute name="id" type="StringValidator" />
        <xs:attribute name="cssClass" type="StringValidator" />
        <xs:attribute name="className" type="StringValidator" />
        <xs:attribute name="style" type="StringValidator" />
        <xs:attribute name="cssType" type="StringValidator" />
        <xs:attribute name="row" type="NumberValidator" />
        <xs:attribute name="col" type="NumberValidator" />
        <xs:attribute name="rowSpan" type="NumberValidator" />
        <xs:attribute name="colSpan" type="NumberValidator" />
        <xs:attribute name="left" type="NumberValidator" />
        <xs:attribute name="top" type="NumberValidator" />
        <xs:attribute name="dock" type="StringValidator" />
        <xs:attribute name="class" type="StringValidator" />
        <xs:attribute name="tap" type="StringValidator" />
        <xs:attribute name="ontap" type="StringValidator" />
        <xs:attribute name="doubletap" type="StringValidator" />
        <xs:attribute name="ondoubletap" type="StringValidator" />
        <xs:attribute name="longpress" type="StringValidator" />
        <xs:attribute name="onlongpress" type="StringValidator" />
        <xs:attribute name="pinch" type="StringValidator" />
        <xs:attribute name="onpinch" type="StringValidator" />
        <xs:attribute name="pan" type="StringValidator" />
        <xs:attribute name="onpan" type="StringValidator" />
        <xs:attribute name="swipe" type="StringValidator" />
        <xs:attribute name="onswipe" type="StringValidator" />
        <xs:attribute name="rotation" type="StringValidator" />
        <xs:attribute name="onrotation" type="StringValidator" />
    </xs:attributeGroup>
    <xs:complexType name="View">
        <xs:attributeGroup ref="viewAttributes" />
    </xs:complexType>
    <xs:element name="View" type="View" />
    <xs:element name="view" type="View" />
    <!-- Custom LayoutView -->
    <xs:attributeGroup name="customLayoutViewAttributes" />
    <xs:complexType name="CustomLayoutView">
        <xs:complexContent>
            <xs:extension base="View">
                <xs:sequence>
                    <xs:any processContents="skip" minOccurs="0" maxOccurs="unbounded" />
                </xs:sequence>
                <xs:attributeGroup ref="customLayoutViewAttributes" />
            </xs:extension>
        </xs:complexContent>
    </xs:complexType>
    <xs:element name="CustomLayoutView" type="CustomLayoutView" />
    <xs:element name="custom-layout-view" type="CustomLayoutView" />
    <!-- Date picker section -->
    <xs:attributeGroup name="datePickerAttributes">
        <xs:attribute name="year" type="NumberValidator" />
        <xs:attribute name="month" type="NumberValidator" />
        <xs:attribute name="day" type="NumberValidator" />
        <xs:attribute name="date" type="StringValidator" />
        <xs:attribute name="maxDate" type="StringValidator" />
        <xs:attribute name="minDate" type="StringValidator" />
    </xs:attributeGroup>
    <xs:complexType name="DatePicker">
        <xs:complexContent>
            <xs:extension base="View">
                <xs:attributeGroup ref="datePickerAttributes" />
            </xs:extension>
        </xs:complexContent>
    </xs:complexType>
    <xs:element name="DatePicker" type="DatePicker" />
    <xs:element name="date-picker" type="DatePicker" />
    <!-- Editable TextBase section -->
    <xs:attributeGroup name="editableTextBaseAttributes">
        <xs:attribute name="keyboardType" type="StringValidator" />
        <xs:attribute name="returnKeyType" type="StringValidator" />
        <xs:attribute name="editable" type="BooleanValidator" />
        <xs:attribute name="updateTextTrigger" type="StringValidator" />
        <xs:attribute name="autocapitalizationType" type="StringValidator" />
        <xs:attribute name="autocorrect" type="BooleanValidator" />
        <xs:attribute name="hint" type="StringValidator" />
    </xs:attributeGroup>
    <xs:complexType name="EditableTextBase">
        <xs:complexContent>
            <xs:extension base="TextBase">
                <xs:attributeGroup ref="editableTextBaseAttributes" />
            </xs:extension>
        </xs:complexContent>
    </xs:complexType>
    <xs:element name="EditableTextBase" type="EditableTextBase" />
    <xs:element name="editable-text-base" type="EditableTextBase" />
    <!-- HTML View section -->
    <xs:attributeGroup name="htmlViewAttributes">
        <xs:attribute name="html" type="StringValidator" />
    </xs:attributeGroup>
    <xs:complexType name="HtmlView">
        <xs:complexContent>
            <xs:extension base="View">
                <xs:attributeGroup ref="htmlViewAttributes" />
            </xs:extension>
        </xs:complexContent>
    </xs:complexType>
    <xs:element name="HtmlView" type="HtmlView" />
    <xs:element name="html-view" type="HtmlView" />
    <!-- Image section -->
    <xs:attributeGroup name="imageAttributes">
        <xs:attribute name="isLoading" type="BooleanValidator" />
        <xs:attribute name="stretch" type="StringValidator" />
        <xs:attribute name="src" type="StringValidator" />
        <xs:attribute name="loadMode" type="StringValidator" />
        <xs:attribute name="tintColor" type="ColorValidator" />
    </xs:attributeGroup>
    <xs:complexType name="Image">
        <xs:complexContent>
            <xs:extension base="View">
                <xs:attributeGroup ref="imageAttributes" />
            </xs:extension>
        </xs:complexContent>
    </xs:complexType>
    <xs:element name="Image" type="Image" />
    <xs:element name="image" type="Image" />
    <!-- Label section -->
    <xs:attributeGroup name="labelAttributes">
        <xs:attribute name="textWrap" type="BooleanValidator" />
    </xs:attributeGroup>
    <xs:complexType name="Label">
        <xs:complexContent>
            <xs:extension base="TextBase">
                <xs:attributeGroup ref="labelAttributes" />
            </xs:extension>
        </xs:complexContent>
    </xs:complexType>
    <xs:element name="Label" type="Label" />
    <xs:element name="label" type="Label" />
    <!-- AbsoluteLayout Section -->
    <xs:attributeGroup name="absoluteLayoutAttributes" />
    <xs:complexType name="AbsoluteLayout">
        <xs:complexContent>
            <xs:extension base="LayoutBase">
                <xs:attributeGroup ref="absoluteLayoutAttributes" />
            </xs:extension>
        </xs:complexContent>
    </xs:complexType>
    <xs:element name="AbsoluteLayout" type="AbsoluteLayout" />
    <xs:element name="absolute-layout" type="AbsoluteLayout" />
    <xs:attributeGroup name="dockLayoutAttributes">
        <xs:attribute name="stretchLastChild" type="BooleanValidator" />
    </xs:attributeGroup>
    <xs:complexType name="DockLayout">
        <xs:complexContent>
            <xs:extension base="LayoutBase">
                <xs:attributeGroup ref="dockLayoutAttributes" />
            </xs:extension>
        </xs:complexContent>
    </xs:complexType>
    <xs:element name="DockLayout" type="DockLayout" />
    <xs:element name="dock-layout" type="DockLayout" />
    <xs:attributeGroup name="gridLayoutAttributes">
        <xs:attribute name="rows" type="StringValidator" />
        <xs:attribute name="columns" type="StringValidator" />
    </xs:attributeGroup>
    <xs:complexType name="GridLayout">
        <xs:complexContent>
            <xs:extension base="LayoutBase">
                <xs:attributeGroup ref="gridLayoutAttributes" />
            </xs:extension>
        </xs:complexContent>
    </xs:complexType>
    <xs:element name="GridLayout" type="GridLayout" />
    <xs:element name="grid-layout" type="GridLayout" />
    <xs:attributeGroup name="layoutBaseAttributes">
        <xs:attribute name="padding" type="StringValidator" />
        <xs:attribute name="paddingBottom" type="NumberValidator" />
        <xs:attribute name="paddingLeft" type="NumberValidator" />
        <xs:attribute name="paddingRight" type="NumberValidator" />
        <xs:attribute name="paddingTop" type="NumberValidator" />
    </xs:attributeGroup>
    <xs:complexType name="LayoutBase">
        <xs:complexContent>
            <xs:extension base="CustomLayoutView">
                <xs:attributeGroup ref="layoutBaseAttributes" />
            </xs:extension>
        </xs:complexContent>
    </xs:complexType>
    <xs:element name="LayoutBase" type="LayoutBase" />
    <xs:element name="layout-base" type="LayoutBase" />
    <xs:attributeGroup name="stackLayoutAttributes">
        <xs:attribute name="orientation" type="StringValidator" />
    </xs:attributeGroup>
    <xs:complexType name="FlexLayout">
        <xs:complexContent>
            <xs:extension base="LayoutBase">
                <xs:attributeGroup ref="flexLayoutAttributes" />
            </xs:extension>
        </xs:complexContent>
    </xs:complexType>
    <xs:element name="FlexLayout" type="FlexLayout" />
    <xs:element name="flex-layout" type="FlexLayout" />
    <xs:attributeGroup name="flexLayoutAttributes">
        <xs:attribute name="alignContent" type="StringValidator" />
        <xs:attribute name="alignItems" type="StringValidator" />
        <xs:attribute name="flexDirection" type="StringValidator" />
        <xs:attribute name="flexWrap" type="StringValidator" />
        <xs:attribute name="justifyContent" type="StringValidator" />
    </xs:attributeGroup>
    <xs:complexType name="StackLayout">
        <xs:complexContent>
            <xs:extension base="LayoutBase">
                <xs:attributeGroup ref="stackLayoutAttributes" />
            </xs:extension>
        </xs:complexContent>
    </xs:complexType>
    <xs:element name="StackLayout" type="StackLayout" />
    <xs:element name="stack-layout" type="StackLayout" />
    <xs:attributeGroup name="wrapLayoutAttributes">
        <xs:attribute name="orientation" type="StringValidator" />
        <xs:attribute name="itemWidth" type="NumberValidator" />
        <xs:attribute name="itemHeight" type="NumberValidator" />
    </xs:attributeGroup>
    <xs:complexType name="WrapLayout">
        <xs:complexContent>
            <xs:extension base="LayoutBase">
                <xs:attributeGroup ref="wrapLayoutAttributes" />
            </xs:extension>
        </xs:complexContent>
    </xs:complexType>
    <xs:element name="WrapLayout" type="WrapLayout" />
    <xs:element name="wrap-layout" type="WrapLayout" />
    <xs:attributeGroup name="listPickerAttributes">
        <xs:attribute name="selectedIndex" type="NumberValidator" />
    </xs:attributeGroup>
    <xs:complexType name="ListPicker">
        <xs:complexContent>
            <xs:extension base="View">
                <xs:attributeGroup ref="listPickerAttributes" />
            </xs:extension>
        </xs:complexContent>
    </xs:complexType>
    <xs:element name="ListPicker" type="ListPicker" />
    <xs:element name="list-picker" type="ListPicker" />
    <xs:attributeGroup name="listViewAttributes">
        <xs:attribute name="itemLoading" type="StringValidator" />
        <xs:attribute name="itemTap" type="StringValidator" />
        <xs:attribute name="loadMoreItems" type="StringValidator" />
        <xs:attribute name="isScrolling" type="BooleanValidator" />
        <xs:attribute name="itemTemplate" type="StringValidator" />
        <xs:attribute name="separatorColor" type="ColorValidator" />
        <xs:attribute name="rowHeight" type="NumberValidator" />
        <xs:attribute name="items" type="StringValidator" />
    </xs:attributeGroup>
    <xs:complexType name="ListView">
        <xs:complexContent>
            <xs:extension base="View">
                <xs:all>
                    <xs:element name="ListView.itemTemplate" minOccurs="0" maxOccurs="1">
                        <xs:complexType>
                            <xs:sequence>
                                <xs:any processContents="skip" minOccurs="0" maxOccurs="1" />
                            </xs:sequence>
                        </xs:complexType>
                    </xs:element>
                </xs:all>
                <xs:attributeGroup ref="listViewAttributes" />
            </xs:extension>
        </xs:complexContent>
    </xs:complexType>
    <xs:element name="ListView" type="ListView" />
    <xs:element name="list-view" type="ListView" />
    <xs:attributeGroup name="pageAttributes">
        <xs:attribute name="showingModally" type="StringValidator" />
        <xs:attribute name="shownModally" type="StringValidator" />
        <xs:attribute name="navigatingTo" type="StringValidator" />
        <xs:attribute name="navigatedTo" type="StringValidator" />
        <xs:attribute name="navigatingFrom" type="StringValidator" />
        <xs:attribute name="navigatedFrom" type="StringValidator" />
        <xs:attribute name="backgroundSpanUnderStatusBar" type="BooleanValidator" />
        <xs:attribute name="actionBarHidden" type="BooleanValidator" />
        <xs:attribute name="css" type="StringValidator" />
        <xs:attribute name="actionBar" type="StringValidator" />
        <xs:attribute name="modal" type="StringValidator" />
    </xs:attributeGroup>
    <xs:complexType name="Page">
        <xs:complexContent>
            <xs:extension base="View">
                <xs:sequence>
                    <xs:any maxOccurs="2" processContents="skip" />
                </xs:sequence>
            </xs:extension>
        </xs:complexContent>
    </xs:complexType>
    <xs:element name="Page" type="Page" />
    <xs:element name="page" type="Page" />
    <xs:attributeGroup name="placeholderAttributes">
        <xs:attribute name="creatingView" type="StringValidator" />
    </xs:attributeGroup>
    <xs:complexType name="Placeholder">
        <xs:complexContent>
            <xs:extension base="View">
                <xs:attributeGroup ref="placeholderAttributes" />
            </xs:extension>
        </xs:complexContent>
    </xs:complexType>
    <xs:element name="Placeholder" type="Placeholder" />
    <xs:element name="placeholder" type="Placeholder" />
    <xs:attributeGroup name="progressAttributes">
        <xs:attribute name="value" type="NumberValidator" />
        <xs:attribute name="maxValue" type="NumberValidator" />
    </xs:attributeGroup>
    <xs:complexType name="Progress">
        <xs:complexContent>
            <xs:extension base="View">
                <xs:attributeGroup ref="progressAttributes" />
            </xs:extension>
        </xs:complexContent>
    </xs:complexType>
    <xs:element name="Progress" type="Progress" />
    <xs:element name="progress" type="Progress" />
    <xs:attributeGroup name="proxyViewContainerAttributes" />
    <xs:complexType name="ProxyViewContainer">
        <xs:complexContent>
            <xs:extension base="LayoutBase">
                <xs:attributeGroup ref="proxyViewContainerAttributes" />
            </xs:extension>
        </xs:complexContent>
    </xs:complexType>
    <xs:element name="ProxyViewContainer" type="ProxyViewContainer" />
    <xs:element name="proxy-view-container" type="ProxyViewContainer" />
    <xs:attributeGroup name="repeaterAttributes">
        <xs:attribute name="itemTemplate" type="StringValidator" />
        <xs:attribute name="itemsLayout" type="LayoutValidator" />
        <xs:attribute name="items" type="StringValidator" />
    </xs:attributeGroup>
    <xs:complexType name="Repeater">
        <xs:complexContent>
            <xs:extension base="View">
                <xs:all>
                    <xs:element name="Repeater.itemTemplate" minOccurs="0" maxOccurs="1">
                        <xs:complexType>
                            <xs:sequence>
                                <xs:any processContents="skip" minOccurs="0" maxOccurs="1" />
                            </xs:sequence>
                        </xs:complexType>
                    </xs:element>
                    <xs:element name="Repeater.itemsLayout" maxOccurs="1">
                        <xs:complexType>
                            <xs:group ref="UILayouts" maxOccurs="1" />
                        </xs:complexType>
                    </xs:element>
                </xs:all>
                <xs:attributeGroup ref="repeaterAttributes" />
            </xs:extension>
        </xs:complexContent>
    </xs:complexType>
    <xs:element name="Repeater" type="Repeater" />
    <xs:element name="repeater" type="Repeater" />
    <xs:attributeGroup name="scrollViewAttributes">
        <xs:attribute name="scroll" type="StringValidator" />
        <xs:attribute name="verticalOffset" type="NumberValidator" />
        <xs:attribute name="horizontalOffset" type="NumberValidator" />
        <xs:attribute name="scrollableHeight" type="NumberValidator" />
        <xs:attribute name="scrollableWidth" type="NumberValidator" />
        <xs:attribute name="orientation" type="StringValidator" />
    </xs:attributeGroup>
    <xs:complexType name="ScrollView">
        <xs:complexContent>
            <xs:extension base="ContentView">
                <xs:attributeGroup ref="scrollViewAttributes" />
            </xs:extension>
        </xs:complexContent>
    </xs:complexType>
    <xs:element name="ScrollView" type="ScrollView" />
    <xs:element name="scroll-view" type="ScrollView" />
    <xs:attributeGroup name="searchBarAttributes">
        <xs:attribute name="submit" type="StringValidator" />
        <xs:attribute name="clear" type="StringValidator" />
        <xs:attribute name="text" type="StringValidator" />
        <xs:attribute name="hint" type="StringValidator" />
        <xs:attribute name="textFieldBackgroundColor" type="ColorValidator" />
        <xs:attribute name="textFieldHintColor" type="ColorValidator" />
    </xs:attributeGroup>
    <xs:complexType name="SearchBar">
        <xs:complexContent>
            <xs:extension base="View">
                <xs:attributeGroup ref="searchBarAttributes" />
            </xs:extension>
        </xs:complexContent>
    </xs:complexType>
    <xs:element name="SearchBar" type="SearchBar" />
    <xs:element name="search-bar" type="SearchBar" />
    <xs:attributeGroup name="segmentedBarAttributes">
        <xs:attribute name="selectedIndex" type="NumberValidator" />
        <xs:attribute name="selectedBackgroundColor" type="ColorValidator" />
        <xs:attribute name="items" type="StringValidator" />
        <xs:attribute name="selectedIndexChanged" type="StringValidator" />
    </xs:attributeGroup>
    <xs:complexType name="SegmentedBar">
        <xs:complexContent>
            <xs:extension base="View">
                <xs:choice>
                    <xs:element name="SegmentedBar.items" maxOccurs="1">
                        <xs:complexType>
                            <xs:sequence>
                                <xs:element name="SegmentedBarItem" maxOccurs="unbounded">
                                    <xs:complexType>
                                        <xs:attribute name="title" type="StringValidator" />
                                    </xs:complexType>
                                </xs:element>
                            </xs:sequence>
                        </xs:complexType>
                    </xs:element>
                </xs:choice>
                <xs:attributeGroup ref="segmentedBarAttributes" />
            </xs:extension>
        </xs:complexContent>
    </xs:complexType>
    <xs:element name="SegmentedBar" type="SegmentedBar" />
    <xs:element name="segmented-bar" type="SegmentedBar" />
    <xs:attributeGroup name="sliderAttributes">
        <xs:attribute name="value" type="NumberValidator" />
        <xs:attribute name="minValue" type="NumberValidator" />
        <xs:attribute name="maxValue" type="NumberValidator" />
    </xs:attributeGroup>
    <xs:complexType name="Slider">
        <xs:complexContent>
            <xs:extension base="View">
                <xs:attributeGroup ref="sliderAttributes" />
            </xs:extension>
        </xs:complexContent>
    </xs:complexType>
    <xs:element name="Slider" type="Slider" />
    <xs:element name="slider" type="Slider" />
    <xs:attributeGroup name="switchAttributes">
        <xs:attribute name="checked" type="BooleanValidator" />
    </xs:attributeGroup>
    <xs:complexType name="Switch">
        <xs:complexContent>
            <xs:extension base="View">
                <xs:attributeGroup ref="switchAttributes" />
            </xs:extension>
        </xs:complexContent>
    </xs:complexType>
    <xs:element name="Switch" type="Switch" />
    <xs:element name="switch" type="Switch" />
    <xs:attributeGroup name="tabViewAttributes">
        <xs:attribute name="items" type="StringValidator" />
        <xs:attribute name="selectedIndex" type="NumberValidator" />
        <xs:attribute name="selectedColor" type="ColorValidator" />
        <xs:attribute name="tabsBackgroundColor" type="ColorValidator" />
        <xs:attribute name="selectedIndexChanged" type="StringValidator" />
    </xs:attributeGroup>
    <xs:complexType name="TabView">
        <xs:complexContent>
            <xs:extension base="View">
                <xs:choice>
                    <xs:element name="TabView.items" maxOccurs="1">
                        <xs:complexType>
                            <xs:sequence>
                                <xs:element name="TabViewItem" maxOccurs="unbounded">
                                    <xs:complexType>
                                        <xs:complexContent>
                                            <xs:extension base="View">
                                                <xs:all>
                                                    <xs:element name="TabViewItem.view" minOccurs="0" maxOccurs="1">
                                                        <xs:complexType>
                                                            <xs:sequence>
                                                                <xs:any processContents="skip" minOccurs="0" maxOccurs="1" />
                                                            </xs:sequence>
                                                        </xs:complexType>
                                                    </xs:element>
                                                </xs:all>
                                                <xs:attribute name="title" type="StringValidator" />
                                            </xs:extension>
                                        </xs:complexContent>
                                    </xs:complexType>
                                </xs:element>
                            </xs:sequence>
                        </xs:complexType>
                    </xs:element>
                </xs:choice>
                <xs:attributeGroup ref="tabViewAttributes" />
            </xs:extension>
        </xs:complexContent>
    </xs:complexType>
    <xs:element name="TabView" type="TabView" />
    <xs:element name="tab-view" type="TabView" />
    <xs:attributeGroup name="textBaseAttributes">
        <xs:attribute name="lineHeight" type="NumberValidator" />
        <xs:attribute name="padding" type="NumberValidator" />
        <xs:attribute name="paddingBottom" type="NumberValidator" />
        <xs:attribute name="paddingLeft" type="NumberValidator" />
        <xs:attribute name="paddingRight" type="NumberValidator" />
        <xs:attribute name="paddingTop" type="NumberValidator" />
        <xs:attribute name="letterSpacing" type="NumberValidator" />
        <xs:attribute name="text" type="StringValidator" />
        <xs:attribute name="textAlignment" type="TextAlignment" />
        <xs:attribute name="textDecorator" type="TextDecoration" />
        <xs:attribute name="textTransform" type="TextTransform" />
        <xs:attribute name="whiteSpace" type="WhiteSpace" />
        <xs:attribute name="fontSize" type="NumberValidator" />
        <xs:attribute name="formattedText" type="TextTransform" />
    </xs:attributeGroup>
    <xs:complexType name="TextBase">
        <xs:complexContent>
            <xs:extension base="View">
                <xs:attributeGroup ref="textBaseAttributes" />
            </xs:extension>
        </xs:complexContent>
    </xs:complexType>
    <xs:element name="TextBase" type="TextBase" />
    <xs:element name="text-base" type="TextBase" />
    <xs:attributeGroup name="textFieldAttributes">
        <xs:attribute name="returnPress" type="StringValidator" />
        <xs:attribute name="secure" type="BooleanValidator" />
    </xs:attributeGroup>
    <xs:complexType name="TextField">
        <xs:complexContent>
            <xs:extension base="EditableTextBase">
                <xs:attributeGroup ref="textFieldAttributes" />
            </xs:extension>
        </xs:complexContent>
    </xs:complexType>
    <xs:element name="TextField" type="TextField" />
    <xs:element name="text-field" type="TextField" />
    <xs:attributeGroup name="textViewAttributes" />
    <xs:complexType name="TextView">
        <xs:complexContent>
            <xs:extension base="EditableTextBase">
                <xs:attributeGroup ref="textViewAttributes" />
            </xs:extension>
        </xs:complexContent>
    </xs:complexType>
    <xs:element name="TextView" type="TextView" />
    <xs:element name="text-view" type="TextView" />
    <xs:attributeGroup name="timePickerAttributes">
        <xs:attribute name="hour" type="NumberValidator" />
        <xs:attribute name="minute" type="NumberValidator" />
        <xs:attribute name="time" type="StringValidator" />
        <xs:attribute name="maxHour" type="NumberValidator" />
        <xs:attribute name="maxMinute" type="NumberValidator" />
        <xs:attribute name="minHour" type="NumberValidator" />
        <xs:attribute name="minMinute" type="NumberValidator" />
        <xs:attribute name="minuteInterval" type="NumberValidator" />
    </xs:attributeGroup>
    <xs:complexType name="TimePicker">
        <xs:complexContent>
            <xs:extension base="View">
                <xs:attributeGroup ref="timePickerAttributes" />
            </xs:extension>
        </xs:complexContent>
    </xs:complexType>
    <xs:element name="TimePicker" type="TimePicker" />
    <xs:element name="time-picker" type="TimePicker" />
    <xs:attributeGroup name="webViewAttributes">
        <xs:attribute name="loadStarted" type="StringValidator" />
        <xs:attribute name="loadFinished" type="StringValidator" />
        <xs:attribute name="navigationTypes" type="StringValidator" />
        <xs:attribute name="url" type="StringValidator" />
        <xs:attribute name="src" type="StringValidator" />
        <xs:attribute name="canGoBack" type="BooleanValidator" />
        <xs:attribute name="canGoForward" type="BooleanValidator" />
    </xs:attributeGroup>
    <xs:complexType name="WebView">
        <xs:complexContent>
            <xs:extension base="View">
                <xs:attributeGroup ref="webViewAttributes" />
            </xs:extension>
        </xs:complexContent>
    </xs:complexType>
    <xs:element name="WebView" type="WebView" />
    <xs:element name="web-view" type="WebView" />
    <xs:simpleType name="BindingValidator">
        <xs:restriction base="xs:string">
            <xs:pattern value="\{\{.*\}\}" />
            <xs:whiteSpace value="collapse" />
        </xs:restriction>
    </xs:simpleType>
    <xs:simpleType name="StringValidator">
        <xs:union memberTypes="BindingValidator">
            <xs:simpleType>
                <xs:restriction base="xs:string" />
            </xs:simpleType>
        </xs:union>
    </xs:simpleType>
    <xs:simpleType name="Stretch">
        <xs:union memberTypes="BindingValidator">
            <xs:simpleType>
                <xs:restriction base="xs:string">
                    <xs:enumeration value="initial" />
                    <xs:enumeration value="aspectFill" />
                    <xs:enumeration value="aspectFit" />
                    <xs:enumeration value="fill" />
                </xs:restriction>
            </xs:simpleType>
        </xs:union>
    </xs:simpleType>
    <xs:simpleType name="TextAlignment">
        <xs:union memberTypes="BindingValidator">
            <xs:simpleType>
                <xs:restriction base="xs:string">
                    <xs:enumeration value="initial" />
                    <xs:enumeration value="left" />
                    <xs:enumeration value="center" />
                    <xs:enumeration value="right" />
                </xs:restriction>
            </xs:simpleType>
        </xs:union>
    </xs:simpleType>
    <xs:simpleType name="TextDecoration">
        <xs:union memberTypes="BindingValidator">
            <xs:simpleType>
                <xs:restriction base="xs:string">
                    <xs:enumeration value="none" />
                    <xs:enumeration value="underline" />
                    <xs:enumeration value="line-through" />
                    <xs:enumeration value="underline line-through" />
                </xs:restriction>
            </xs:simpleType>
        </xs:union>
    </xs:simpleType>
    <xs:simpleType name="TextTransform">
        <xs:union memberTypes="BindingValidator">
            <xs:simpleType>
                <xs:restriction base="xs:string">
                    <xs:enumeration value="initial" />
                    <xs:enumeration value="none" />
                    <xs:enumeration value="capitalize" />
                    <xs:enumeration value="uppercase" />
                    <xs:enumeration value="lowercase" />
                </xs:restriction>
            </xs:simpleType>
        </xs:union>
    </xs:simpleType>
    <xs:simpleType name="WhiteSpace">
        <xs:union memberTypes="BindingValidator">
            <xs:simpleType>
                <xs:restriction base="xs:string">
                    <xs:enumeration value="initial" />
                    <xs:enumeration value="normal" />
                    <xs:enumeration value="nowrap" />
                </xs:restriction>
            </xs:simpleType>
        </xs:union>
    </xs:simpleType>
    <xs:simpleType name="HorizontalAlignment">
        <xs:union memberTypes="BindingValidator">
            <xs:simpleType>
                <xs:restriction base="xs:string">
                    <xs:enumeration value="center" />
                    <xs:enumeration value="left" />
                    <xs:enumeration value="right" />
                    <xs:enumeration value="top" />
                </xs:restriction>
            </xs:simpleType>
        </xs:union>
    </xs:simpleType>
    <xs:simpleType name="VerticalAlignment">
        <xs:union memberTypes="BindingValidator">
            <xs:simpleType>
                <xs:restriction base="xs:string">
                    <xs:enumeration value="center" />
                    <xs:enumeration value="middle" />
                    <xs:enumeration value="bottom" />
                    <xs:enumeration value="stretch" />
                    <xs:enumeration value="top" />
                </xs:restriction>
            </xs:simpleType>
        </xs:union>
    </xs:simpleType>
    <xs:simpleType name="ReturnKeyType">
        <xs:union memberTypes="BindingValidator">
            <xs:simpleType>
                <xs:restriction base="xs:string">
                    <xs:enumeration value="go" />
                    <xs:enumeration value="done" />
                    <xs:enumeration value="search" />
                    <xs:enumeration value="next" />
                    <xs:enumeration value="send" />
                </xs:restriction>
            </xs:simpleType>
        </xs:union>
    </xs:simpleType>
    <xs:simpleType name="BooleanValidator">
        <xs:union memberTypes="BindingValidator">
            <xs:simpleType>
                <xs:restriction base="xs:boolean" />
            </xs:simpleType>
        </xs:union>
    </xs:simpleType>
    <xs:simpleType name="NumberValidator">
        <xs:union memberTypes="BindingValidator">
            <xs:simpleType>
                <xs:restriction base="xs:integer" />
            </xs:simpleType>
        </xs:union>
    </xs:simpleType>
    <xs:simpleType name="ColorValidator">
        <xs:union memberTypes="BindingValidator">
            <xs:simpleType>
                <xs:restriction base="xs:string">
                    <xs:pattern value="#ddd(ddd)?" />
                    <xs:enumeration value="Transparent" />
                    <xs:enumeration value="AliceBlue" />
                    <xs:enumeration value="AntiqueWhite" />
                    <xs:enumeration value="Aqua" />
                    <xs:enumeration value="Aquamarine" />
                    <xs:enumeration value="Azure" />
                    <xs:enumeration value="Beige" />
                    <xs:enumeration value="Bisque" />
                    <xs:enumeration value="Black" />
                    <xs:enumeration value="BlanchedAlmond" />
                    <xs:enumeration value="Blue" />
                    <xs:enumeration value="BlueViolet" />
                    <xs:enumeration value="Brown" />
                    <xs:enumeration value="BurlyWood" />
                    <xs:enumeration value="CadetBlue" />
                    <xs:enumeration value="Chartreuse" />
                    <xs:enumeration value="Chocolate" />
                    <xs:enumeration value="Coral" />
                    <xs:enumeration value="CornflowerBlue" />
                    <xs:enumeration value="Cornsilk" />
                    <xs:enumeration value="Crimson" />
                    <xs:enumeration value="Cyan" />
                    <xs:enumeration value="DarkBlue" />
                    <xs:enumeration value="DarkCyan" />
                    <xs:enumeration value="DarkGoldenRod" />
                    <xs:enumeration value="DarkGray" />
                    <xs:enumeration value="DarkGreen" />
                    <xs:enumeration value="DarkKhaki" />
                    <xs:enumeration value="DarkMagenta" />
                    <xs:enumeration value="DarkOliveGreen" />
                    <xs:enumeration value="DarkOrange" />
                    <xs:enumeration value="DarkOrchid" />
                    <xs:enumeration value="DarkRed" />
                    <xs:enumeration value="DarkSalmon" />
                    <xs:enumeration value="DarkSeaGreen" />
                    <xs:enumeration value="DarkSlateBlue" />
                    <xs:enumeration value="DarkSlateGray" />
                    <xs:enumeration value="DarkTurquoise" />
                    <xs:enumeration value="DarkViolet" />
                    <xs:enumeration value="DeepPink" />
                    <xs:enumeration value="DeepSkyBlue" />
                    <xs:enumeration value="DimGray" />
                    <xs:enumeration value="DodgerBlue" />
                    <xs:enumeration value="FireBrick" />
                    <xs:enumeration value="FloralWhite" />
                    <xs:enumeration value="ForestGreen" />
                    <xs:enumeration value="Fuchsia" />
                    <xs:enumeration value="Gainsboro" />
                    <xs:enumeration value="GhostWhite" />
                    <xs:enumeration value="Gold" />
                    <xs:enumeration value="GoldenRod" />
                    <xs:enumeration value="Gray" />
                    <xs:enumeration value="Green" />
                    <xs:enumeration value="GreenYellow" />
                    <xs:enumeration value="HoneyDew" />
                    <xs:enumeration value="HotPink" />
                    <xs:enumeration value="IndianRed" />
                    <xs:enumeration value="Indigo" />
                    <xs:enumeration value="Ivory" />
                    <xs:enumeration value="Khaki" />
                    <xs:enumeration value="Lavender" />
                    <xs:enumeration value="LavenderBlush" />
                    <xs:enumeration value="LawnGreen" />
                    <xs:enumeration value="LemonChiffon" />
                    <xs:enumeration value="LightBlue" />
                    <xs:enumeration value="LightCoral" />
                    <xs:enumeration value="LightCyan" />
                    <xs:enumeration value="LightGoldenRodYellow" />
                    <xs:enumeration value="LightGray" />
                    <xs:enumeration value="LightGreen" />
                    <xs:enumeration value="LightPink" />
                    <xs:enumeration value="LightSalmon" />
                    <xs:enumeration value="LightSeaGreen" />
                    <xs:enumeration value="LightSkyBlue" />
                    <xs:enumeration value="LightSlateGray" />
                    <xs:enumeration value="LightSteelBlue" />
                    <xs:enumeration value="LightYellow" />
                    <xs:enumeration value="Lime" />
                    <xs:enumeration value="LimeGreen" />
                    <xs:enumeration value="Linen" />
                    <xs:enumeration value="Magenta" />
                    <xs:enumeration value="Maroon" />
                    <xs:enumeration value="MediumAquaMarine" />
                    <xs:enumeration value="MediumBlue" />
                    <xs:enumeration value="MediumOrchid" />
                    <xs:enumeration value="MediumPurple" />
                    <xs:enumeration value="MediumSeaGreen" />
                    <xs:enumeration value="MediumSlateBlue" />
                    <xs:enumeration value="MediumSpringGreen" />
                    <xs:enumeration value="MediumTurquoise" />
                    <xs:enumeration value="MediumVioletRed" />
                    <xs:enumeration value="MidnightBlue" />
                    <xs:enumeration value="MintCream" />
                    <xs:enumeration value="MistyRose" />
                    <xs:enumeration value="Moccasin" />
                    <xs:enumeration value="NavajoWhite" />
                    <xs:enumeration value="Navy" />
                    <xs:enumeration value="OldLace" />
                    <xs:enumeration value="Olive" />
                    <xs:enumeration value="OliveDrab" />
                    <xs:enumeration value="Orange" />
                    <xs:enumeration value="OrangeRed" />
                    <xs:enumeration value="Orchid" />
                    <xs:enumeration value="PaleGoldenRod" />
                    <xs:enumeration value="PaleGreen" />
                    <xs:enumeration value="PaleTurquoise" />
                    <xs:enumeration value="PaleVioletRed" />
                    <xs:enumeration value="PapayaWhip" />
                    <xs:enumeration value="PeachPuff" />
                    <xs:enumeration value="Peru" />
                    <xs:enumeration value="Pink" />
                    <xs:enumeration value="Plum" />
                    <xs:enumeration value="PowderBlue" />
                    <xs:enumeration value="Purple" />
                    <xs:enumeration value="Red" />
                    <xs:enumeration value="RosyBrown" />
                    <xs:enumeration value="RoyalBlue" />
                    <xs:enumeration value="SaddleBrown" />
                    <xs:enumeration value="Salmon" />
                    <xs:enumeration value="SandyBrown" />
                    <xs:enumeration value="SeaGreen" />
                    <xs:enumeration value="SeaShell" />
                    <xs:enumeration value="Sienna" />
                    <xs:enumeration value="Silver" />
                    <xs:enumeration value="SkyBlue" />
                    <xs:enumeration value="SlateBlue" />
                    <xs:enumeration value="SlateGray" />
                    <xs:enumeration value="Snow" />
                    <xs:enumeration value="SpringGreen" />
                    <xs:enumeration value="SteelBlue" />
                    <xs:enumeration value="Tan" />
                    <xs:enumeration value="Teal" />
                    <xs:enumeration value="Thistle" />
                    <xs:enumeration value="Tomato" />
                    <xs:enumeration value="Turquoise" />
                    <xs:enumeration value="Violet" />
                    <xs:enumeration value="Wheat" />
                    <xs:enumeration value="White" />
                    <xs:enumeration value="WhiteSmoke" />
                    <xs:enumeration value="Yellow" />
                    <xs:enumeration value="YellowGreen" />
                </xs:restriction>
            </xs:simpleType>
        </xs:union>
    </xs:simpleType>
    <xs:simpleType name="LayoutValidator">
        <xs:union memberTypes="BindingValidator">
            <xs:simpleType>
                <xs:restriction base="xs:string">
                    <xs:enumeration value="StackLayout" />
                    <xs:enumeration value="GridLayout" />
                    <xs:enumeration value="AbsoluteLayout" />
                    <xs:enumeration value="DockLayout" />
                    <xs:enumeration value="WrapLayout" />
                    <xs:enumeration value="FlexLayout" />
                </xs:restriction>
            </xs:simpleType>
        </xs:union>
    </xs:simpleType>
    <xs:group name="UILayouts">
        <xs:choice>
            <xs:element name="AbsoluteLayout" type="AbsoluteLayout" />
            <xs:element name="DockLayout" type="DockLayout" />
            <xs:element name="GridLayout" type="GridLayout" />
            <xs:element name="StackLayout" type="StackLayout" />
            <xs:element name="WrapLayout" type="WrapLayout" />
            <xs:element name="FlexLayout" type="FlexLayout" />
        </xs:choice>
    </xs:group>
</xs:schema>
`