import React from "react";
import WebView from "react-native-webview-autoheight";
import makeMarkdown from "./makeMarkdown";
class MarkdownWebView extends React.Component {
    render() {
        const { content, highlight, innerRef } = this.props;
        return (<WebView ref={innerRef} source={{
            html: makeMarkdown(content, highlight)
        }} useWebKit={true} {...this.props}/>);
    }
}
export default React.forwardRef((props, ref) => (<MarkdownWebView innerRef={ref} {...props}/>));
